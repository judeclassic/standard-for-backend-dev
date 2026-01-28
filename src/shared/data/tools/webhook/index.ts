import { Models } from "@/models/index";
import { Repositories } from "@/repositories/index";
import { WebhookRetryQueue, WebhookJobData, IPayload } from "../../repositories/queue/data/webhook-retry";
import { Job, Worker } from "bullmq";
import axios, { AxiosInstance } from "axios";
import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';
import { logger } from "@/libraries/logger";

export class WebhookTools {
  private webhookQueue: WebhookRetryQueue;
  private axiosInstance: AxiosInstance;
  private worker: Worker<WebhookJobData> | null = null;
  private static queueInstance: WebhookRetryQueue | null = null;

  constructor(readonly models: Models, readonly repo: Repositories) {
    // Singleton pattern for webhook queue to reduce overhead
    if (!WebhookTools.queueInstance) {
      WebhookTools.queueInstance = new WebhookRetryQueue();
    }
    this.webhookQueue = WebhookTools.queueInstance;
    
    // Create optimized axios instance with connection pooling
    this.axiosInstance = axios.create({
      timeout: 10000, // 10 second timeout for faster failures
      maxRedirects: 3,
      httpAgent: new HttpAgent({
        keepAlive: true,
        keepAliveMsecs: 1000,
        maxSockets: 50,
        maxFreeSockets: 10,
        timeout: 10000,
      }),
      httpsAgent: new HttpsAgent({
        keepAlive: true,
        keepAliveMsecs: 1000,
        maxSockets: 50,
        maxFreeSockets: 10,
        timeout: 10000,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
      },
    });
  }

  /**
   * Start listening for webhook jobs
   */
  listenForWebhooks = () => {
    if (this.worker) {
      logger.info('Webhook worker is already running');
      return;
    }

    logger.info('Starting webhook worker...');

    this.worker = this.webhookQueue.createWorker(async (job: Job<WebhookJobData>) => {
      logger.info(`Processing webhook job ${job.id}, attempt ${job.attemptsMade + 1}/${job.opts.attempts}`);
      
      // Update job progress
      await job.updateProgress(10);
      
      try {
        // Execute the webhook with signature
        const result = await this.executeWebhook(job.data.url, job.data.payload, job.data.secretKey);
        
        await job.updateProgress(100);
        logger.info(`Webhook job ${job.id} completed successfully:`, result);
        
      } catch (error: any) {
        // Log the error
        logger.error(`Webhook job ${job.id} failed:`, error.message);
        
        // If it's a 500 error or network error, throw to trigger BullMQ retry
        if (error.is500Error) {
          throw error; // BullMQ will handle the retry with backoff
        }
        
        // For non-retryable errors, just log and complete the job
        logger.info(`Webhook job ${job.id} completed with non-retryable error`);
      }
    });

    // Event listeners for better observability
    this.worker.on('completed', (job) => {
      logger.info(`✅ Webhook job ${job.id} completed after ${job.attemptsMade} attempt(s)`);
    });

    this.worker.on('failed', (job, err) => {
      if (job) {
        logger.error(`❌ Webhook job ${job.id} failed after ${job.attemptsMade} attempt(s):`, err.message);
        
        if (job.attemptsMade >= (job.opts.attempts || 10)) {
          logger.error(`🚫 Webhook job ${job.id} exhausted all retries. Giving up.`);
        }
      }
    });

    this.worker.on('error', (err) => {
      logger.error('Webhook worker error:', err);
    });

    this.worker.on('stalled', (jobId) => {
      logger.warn(`⚠️  Webhook job ${jobId} has stalled`);
    });

    logger.info('✅ Webhook worker started successfully');
  };

  /**
   * Stop the webhook worker
   */
  stopWebhookWorker = async () => {
    if (!this.worker) {
      logger.info('Webhook worker is not running');
      return;
    }

    logger.info('Stopping webhook worker...');
    await this.worker.close();
    this.worker = null;
    logger.info('Webhook worker stopped');
  };

  /**
   * Execute webhook request with signature verification
   */
  private executeWebhook = async (url: string, payload: IPayload, secretKey: string) => {
    try {
      // Generate timestamp for replay attack prevention
      const timestamp = Date.now().toString();
      const payloadString = JSON.stringify(payload);
      
      // Generate HMAC-SHA256 signature
      const signature = this.repo.encryption.generateWebhookSignature(payloadString, timestamp, secretKey);
      
      // Use optimized axios instance with connection pooling
      const response = await this.axiosInstance.post(url, payload, {
        headers: {
          'x-zypay-signature': signature,
          'x-zypay-timestamp': timestamp,
        }
      });
      
      return {
        status: response.status,
        data: response.data,
        success: response.status < 400
      };
      
    } catch (error: any) {
      if (error.response) {
        const result = {
          status: error.response.status,
          data: error.response.data,
          success: false,
          message: `HTTP ${error.response.status}: ${error.response.statusText}`
        };
        
        // For 500 errors, throw with a flag to trigger retry
        if (error.response.status === 500) {
          const retryError: any = new Error(result.message);
          retryError.is500Error = true;
          retryError.result = result;
          throw retryError;
        }
        
        return result;
      } else if (error.code === 'ECONNABORTED') {
        // Timeout - should retry
        const retryError: any = new Error('Request timeout');
        retryError.is500Error = true;
        retryError.result = {
          status: 'timeout',
          success: false,
          message: 'Request timeout'
        };
        throw retryError;
      } else {
        // Network error - should retry
        const retryError: any = new Error('Network error');
        retryError.is500Error = true;
        retryError.result = {
          status: 'network_error',
          success: false,
          message: 'Network error'
        };
        throw retryError;
      }
    }
  };

  /**
   * Fire-and-forget webhook (queue immediately, no wait)
   */
  sendWebhookAsync = async (url: string, payload: IPayload, secretKey: string) => {
    // Skip immediate attempt, queue directly for background processing
    // This reduces API response latency to < 5ms
    setImmediate(() => {
      this.webhookQueue.addJob({ url, payload, attempt: 0, secretKey }).catch(err => {
        logger.error('Failed to queue webhook:', err);
      });
    });
    
    return {
      status: 'queued',
      message: 'Webhook queued for async processing'
    };
  };

  /**
   * Standard webhook with immediate attempt (backward compatible)
   */
  sendWebhook = async (url: string, payload: IPayload, secretKey: string, options?: { skipImmediate?: boolean }) => {
    // Fast path: Skip immediate attempt if requested (reduces latency)
    if (options?.skipImmediate) {
      return this.sendWebhookAsync(url, payload, secretKey);
    }
    
    try {
      // Try immediate delivery first
      const result = await this.executeWebhook(url, payload, secretKey);
      
      // If successful or non-500 error, return immediately
      if (result.status !== 500) {
        return result;
      }
      
      // If 500 error, queue for retry with BullMQ
      return await this.webhookQueue.addJob({ url, payload, attempt: 0, secretKey });
      
    } catch (error: any) {
      // Network errors, timeouts, etc. - queue for retry
      return await this.webhookQueue.addJob({ url, payload, attempt: 0, secretKey });
    }
  };

  /**
   * Bulk send webhooks (optimized for multiple webhooks)
   */
  sendWebhookBulk = async (webhooks: Array<{ url: string; payload: IPayload; secretKey: string; priority?: number }>) => {
    return await this.webhookQueue.addJobsBulk(webhooks);
  };

  /**
   * Get webhook queue status
   */
  getWebhookQueueStatus = async () => {
    return await this.webhookQueue.getStats();
  };

  /**
   * Cancel a webhook job
   */
  cancelWebhookJob = async (jobId: string) => {
    return await this.webhookQueue.cancelJob(jobId);
  };

  /**
   * Get job details
   */
  getWebhookJobDetails = async (jobId: string) => {
    const job = await this.webhookQueue.getJob(jobId);
    if (!job) {
      return null;
    }
    
    return {
      id: job.id,
      url: job.data.url,
      attempt: job.attemptsMade,
      maxRetries: job.opts.attempts || 10,
      createdAt: job.timestamp,
      status: await job.getState(),
      progress: job.progress,
      failedReason: job.failedReason
    };
  };

  /**
   * Get failed webhook jobs
   */
  getFailedWebhooks = async (start = 0, end = 10) => {
    return await this.webhookQueue.getFailedJobs(start, end);
  };

  /**
   * Retry a failed webhook job
   */
  retryFailedWebhook = async (jobId: string) => {
    return await this.webhookQueue.retryFailedJob(jobId);
  };

  /**
   * Get worker status
   */
  getWorkerStatus = async () => {
    if (!this.worker) {
      return {
        isRunning: false,
        queueStats: await this.webhookQueue.getStats()
      };
    }

    return {
      isRunning: true,
      isPaused: await this.worker.isPaused(),
      isClosing: this.worker.closing,
      queueStats: await this.webhookQueue.getStats()
    };
  };

  /**
   * Pause the worker
   */
  pauseWorker = async () => {
    if (this.worker) {
      await this.worker.pause();
      logger.info('Webhook worker paused');
    }
  };

  /**
   * Resume the worker
   */
  resumeWorker = async () => {
    if (this.worker) {
      await this.worker.resume();
      console.log('Webhook worker resumed');
    }
  };

  /**
   * Clean old jobs
   */
  cleanOldJobs = async () => {
    await this.webhookQueue.cleanJobs();
    console.log('Cleaned old webhook jobs');
  };
}
