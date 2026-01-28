import { Job, Queue, Worker } from 'bullmq';
import redisClient from '../../../../adapter/libraries/redis';
import { IGeneralTransaction } from '@/models/transaction/type';

export enum PayloadType {
  PAYMENT_CREATED = 'payment.created',
  PAYMENT_COMPLETED = 'payment.completed',
  PAYMENT_FAILED = 'payment.failed',
  PAYOUT_CREATED = 'payout.created',
  PAYOUT_COMPLETED = 'payout.completed',
  PAYOUT_FAILED = 'payout.failed',
}

export type IPayload = {
  id: string;
  type: PayloadType;
  payload: IGeneralTransaction;
  timestamp: string;
}

export interface WebhookJobData {
  url: string;
  payload: IPayload;
  attempt: number;
  secretKey: string;
}

export class WebhookRetryQueue {
  private _webhookRetryQueue: Queue<WebhookJobData>;
  
  constructor() {
    this._webhookRetryQueue = new Queue('webhook-retry', {
      connection: redisClient,
      defaultJobOptions: {
        removeOnComplete: {
          age: 3600, // Keep completed jobs for 1 hour
          count: 1000, // Keep last 1000 completed jobs
        },
        removeOnFail: {
          age: 86400, // Keep failed jobs for 24 hours
        },
        attempts: 10, // Max retry attempts
        backoff: {
          type: 'fixed',
          delay: 2 * 60 * 1000, // 2 minutes
        },
      }
    });
  }

  get queue() {
    return this._webhookRetryQueue;
  }

  /**
   * Add a webhook job to the retry queue
   */
  async addJob(jobData: WebhookJobData, priority?: number) {

    const job = await this._webhookRetryQueue.add(
      'webhook-delivery',
      jobData,
      {
        jobId: `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        priority: priority || 0, // Higher priority = processed first
      }
    );

    return {
      jobId: job.id,
      status: 'queued',
      message: 'Webhook queued for processing'
    };
  }

  /**
   * Bulk add webhook jobs (reduces Redis round-trips)
   */
  async addJobsBulk(jobs: Array<{ url: string; payload: IPayload; secretKey: string; priority?: number }>) {
    const jobsToAdd = jobs.map(({ url, payload, secretKey, priority }) => ({
      name: 'webhook-delivery',
      data: {
        url,
        payload,
        attempt: 0,
        secretKey
      },
      opts: {
        jobId: `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        priority: priority || 0,
      }
    }));

    const addedJobs = await this._webhookRetryQueue.addBulk(jobsToAdd);

    return {
      jobIds: addedJobs.map(job => job.id),
      status: 'queued',
      count: addedJobs.length,
      message: `${addedJobs.length} webhooks queued for processing`
    };
  }

  /**
   * Create a worker to process webhook jobs
   */
  createWorker(callback: (job: Job<WebhookJobData>) => Promise<void>) {
    return new Worker<WebhookJobData>(
      'webhook-retry',
      async (job: Job<WebhookJobData>) => {
        try {
          await callback(job);
        } catch (error: any) {
          // Check if it's a 500 error - if so, throw to trigger retry
          if (error.is500Error) {
            throw error; // Will trigger BullMQ retry
          }
          // For non-500 errors, don't retry
          console.log(`Webhook job ${job.id} completed with non-500 error. Not retrying.`);
        }
      },
      {
        connection: redisClient,
        concurrency: 20, // Increased from 5 to 20 for better throughput
        limiter: {
          max: 100, // Increased from 10 to 100 jobs
          duration: 1000, // Per second
        },
        // Optimize worker settings for low latency
        lockDuration: 30000, // 30 seconds lock duration
        lockRenewTime: 15000, // Renew lock every 15 seconds
        stalledInterval: 30000, // Check for stalled jobs every 30 seconds
        maxStalledCount: 2, // Max times a job can be stalled before failing
        // Use skipLockRenewal for faster processing (if job completes quickly)
        skipLockRenewal: false,
      }
    );
  }

  /**
   * Get queue statistics
   */
  async getStats() {
    const [waiting, active, completed, failed, delayed] = await Promise.all([
      this._webhookRetryQueue.getWaitingCount(),
      this._webhookRetryQueue.getActiveCount(),
      this._webhookRetryQueue.getCompletedCount(),
      this._webhookRetryQueue.getFailedCount(),
      this._webhookRetryQueue.getDelayedCount(),
    ]);

    return {
      waiting,
      active,
      completed,
      failed,
      delayed,
      total: waiting + active + completed + failed + delayed
    };
  }

  /**
   * Get job by ID
   */
  async getJob(jobId: string) {
    return await this._webhookRetryQueue.getJob(jobId);
  }

  /**
   * Cancel/remove a job
   */
  async cancelJob(jobId: string) {
    const job = await this.getJob(jobId);
    if (job) {
      await job.remove();
      return { success: true, message: `Job ${jobId} cancelled` };
    }
    return { success: false, message: `Job ${jobId} not found` };
  }

  /**
   * Get failed jobs
   */
  async getFailedJobs(start = 0, end = 10) {
    return await this._webhookRetryQueue.getFailed(start, end);
  }

  /**
   * Retry a failed job
   */
  async retryFailedJob(jobId: string) {
    const job = await this.getJob(jobId);
    if (job && await job.isFailed()) {
      await job.retry();
      return { success: true, message: `Job ${jobId} queued for retry` };
    }
    return { success: false, message: `Job ${jobId} not found or not failed` };
  }

  /**
   * Clean old jobs
   */
  async cleanJobs() {
    await this._webhookRetryQueue.clean(3600000, 1000, 'completed'); // Clean completed jobs older than 1 hour
    await this._webhookRetryQueue.clean(86400000, 100, 'failed'); // Clean failed jobs older than 24 hours
  }

  /**
   * Close the queue connection
   */
  async close() {
    await this._webhookRetryQueue.close();
  }
}

