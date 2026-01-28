import { Models } from "@/models/index";
import { ITransaction } from "@/models/transaction/type";
import { Repositories } from "@/repositories/index";
import { withTimeout } from "@/utils/helpers/helper";
import { paymentLogger, logPaymentEvent } from "../../../adapter/libraries/logger";
import { IResponse } from "@/utils/types/types";
import { Worker } from "bullmq";
import { PayloadType } from "@/repositories/queue/data/webhook-retry";

export class PaymentTools {
  private readonly MAX_ATTEMPT = 12;
  private readonly PAYMENT_TIMEOUT = 15_000;
  private readonly FAILURE_RETRY_DELAY = 3_000;
  private activeIntervals = new Set<NodeJS.Timeout>();
  private worker: Worker<ITransaction, void, string> | null = null;

  constructor(readonly models: Models, readonly repo: Repositories) {}
  
  private async processTransaction(tx: ITransaction): Promise<IResponse<ITransaction>> {
    try {
      // Validate transaction data
      if (!tx?.id || !tx?.user?.user_wallet?.wallet || !tx?.blockchain) {
        paymentLogger.error(`Invalid transaction data for ID: ${tx?.id}`, { tx: tx });
        return { status: false, message: "Invalid transaction data" };
      }

      const Block = this.repo.crypto.getBlock[tx.blockchain];
      if (!Block) {
        paymentLogger.error(`Unsupported blockchain: ${tx.blockchain}`, { txId: tx.id });
        return { status: false, message: `Unsupported blockchain: ${tx.blockchain}` };
      }

      const walletInstance = await Block.generateWallet(tx.user.user_wallet.wallet, 'forwarder');
      if (!walletInstance) {
        paymentLogger.error(`Failed to generate wallet for transaction: ${tx.id}`);
        return { status: false, message: "Failed to generate wallet" };
      }

      const confirmation = await withTimeout(
        walletInstance.confirmPayment(tx), 
        this.PAYMENT_TIMEOUT
      );
      
      if (!confirmation?.status) {
        paymentLogger.warn(`Payment confirmation failed for transaction: ${tx.id}`, {
          confirmation,
          txId: tx.id
        });
        return confirmation || { status: false, message: "Payment confirmation failed" };
      }

      paymentLogger.info(`Payment confirmed successfully for transaction: ${tx.id}`);
      logPaymentEvent('PAYMENT_CONFIRMED', tx.id, {
        blockchain: tx.blockchain,
        amount: tx.package?.subscription_fee,
        status: 'success'
      });
      return { status: true, data: tx };
    } catch (err: any) {
      paymentLogger.error(`Error processing transaction ${tx?.id}:`, {
        error: err.message,
        stack: err.stack,
        txId: tx?.id
      });
      return { status: false, message: "Unable to process transaction" };
    }
  }

  private async completeTransaction(tx: ITransaction): Promise<IResponse<ITransaction>> {
    try {
      // Validate transaction data
      if (!tx?.id || !tx?.account?.account_wallet?.account) {
        paymentLogger.error(`Invalid transaction data for completion: ${tx?.id}`, { tx });
        return { status: false, message: "Invalid transaction data for completion" };
      }
      const account = tx.account.account_wallet.account;
      
      // Validate account data
      if (!account?.api_info?.public_key || !account?.api_info?.webhook_url) {
        paymentLogger.error(`Invalid account data for transaction: ${tx.id}`, {
          accountId: account?.id,
          txId: tx.id 
        });
        return { status: false, message: "Invalid account data" };
      }

      tx.status = 'success';
      tx.completed_at = new Date();
      tx.process_status = 'completed';

      const [encrypted, updatedTx] = await Promise.all([
        this.repo.encryption.encryptWithPublicKey(tx, account.api_info.public_key),
        this.models.transactions.save(tx),
      ]);

      if (!updatedTx) {
        paymentLogger.error(`Failed to update transaction status: ${tx.id}`);
        return { status: false, message: "Unable to save transaction" };
      }
      
      if (!encrypted.status) {
        paymentLogger.error(`Failed to encrypt transaction data: ${tx.id}`, {
          encryptionError: encrypted.message,
          txId: tx.id
        });
        return encrypted;
      }

      // Execute side effects
      try {
        this.repo.socket.getConnection.to(tx.id).emit("_completed", updatedTx);
        await this.models.accounts.increment(
          { id: tx.account.account_id }, 
          'balance', 
          tx.package.subscription_fee
        );
        
        this.repo.queue.webhook.addJob({ 
          url: account.api_info.webhook_url,
          payload: {
            id: tx.id,
            type: PayloadType.PAYMENT_COMPLETED,
            payload: updatedTx.toGeneralResponse,
            timestamp: new Date().toISOString()
          },
          attempt: 0,
          secretKey: account.api_info.secret_key
        });
      } catch (sideEffectError: any) {
        paymentLogger.error(`Side effects failed for transaction: ${tx.id}`, {
          error: sideEffectError.message,
          txId: tx.id
        });
      }

      await this.models.transactions.save(updatedTx);
      paymentLogger.info(`Transaction completed successfully: ${tx.id}`);
      return { status: true, data: tx };
    } catch (err: any) {
      paymentLogger.error(`Error completing transaction ${tx?.id}:`, {
        error: err.message,
        stack: err.stack,
        txId: tx?.id
      });
      return {
        status: false,
        message: "Unable to complete transaction"
      };
    }
  }

  private async failTransaction(tx: ITransaction, err: Error): Promise<IResponse<ITransaction>> {
    try {
      if (!tx?.id) {
        paymentLogger.error(`Invalid transaction data for failure: ${tx?.id}`, { tx });
        return { status: false, message: "Invalid transaction data" };
      }

      const updated = await this.models.transactions.update(tx.id, {
        status: 'failed',
        errors: [...(tx.errors || []), err.message],
        completed_at: new Date(),
        process_status: 'failed'
      });
      
      if (!updated) {
        paymentLogger.error(`Failed to update transaction failure status: ${tx.id}`);
        return { status: false, message: "Unable to update transaction" };
      }

      paymentLogger.warn(`Transaction marked as failed: ${tx.id}`, {
        error: err.message,
        txId: tx.id
      });
      
      return { status: true, data: tx };
    } catch (err: any) {
      paymentLogger.error(`Error failing transaction ${tx?.id}:`, {
        error: err.message,
        stack: err.stack,
        txId: tx?.id
      });
      return { status: false, message: "Unable to update transaction" };
    }
  }

  listenForTransaction = () => {
    if (this.worker) {
      paymentLogger.warn('Transaction worker already exists, skipping initialization');
      return;
    }

    this.worker = this.repo.queue.transaction.createWorker(async (job) => {
      const txId = job.data?.id;
      if (!txId) {
        paymentLogger.error('Job data missing transaction ID', { jobData: job.data });
        throw new Error('Missing transaction ID in job data');
      }

      paymentLogger.info(`Processing transaction job: ${txId}`, {
        attemptsMade: job.attemptsMade,
        txId
      });

      return await this.models.dataSource.transaction(async (manager) => {
        // Get fresh transaction data within the database transaction
        const transaction = await manager.findOne(this.models.transactions.target, { 
          where: { id: txId },
          relations: ['from', 'to', 'to.account_wallet', 'to.account_wallet.account']
        });

        if (!transaction) {
          paymentLogger.error(`Transaction not found: ${txId}`);
          throw new Error(`Transaction not found: ${txId}`);
        }

        // Check if already processed
        if (transaction.process_status === 'completed') {
          paymentLogger.info(`Transaction already completed: ${txId}`);
          return;
        }
        
        if (transaction.process_status === 'failed') {
          paymentLogger.info(`Transaction already failed: ${txId}`);
          return;
        }

        // Process the transaction if it's pending
        if (transaction.process_status === 'pending') {
          const response = await this.processTransaction(transaction);
          if (!response.status) {
            paymentLogger.warn(`Transaction processing failed: ${txId}`, {
              error: response.message,
              txId
            });
            throw new Error(response.message || 'Transaction processing failed');
          }
          
          // Update process status to processed
          await manager.update(this.models.transactions.target, txId, { 
            process_status: 'processed' 
          });
        }

        // Complete the transaction
        const completed = await this.completeTransaction(transaction);
        if (!completed.status) {
          paymentLogger.warn(`Transaction completion failed: ${txId}`, {
            error: completed.message,
            txId
          });
          throw new Error(completed.message || 'Transaction completion failed');
        }

        paymentLogger.info(`Transaction processed successfully: ${txId}`);
      });
    });

    // Handle worker events
    this.worker.on('failed', async (job: any, err: Error) => {
      if (!job) {
        paymentLogger.error('Job failed but job data is missing', { error: err.message });
        return;
      }

      const txId = job.data?.id;
      if (!txId) {
        paymentLogger.error('Failed job missing transaction ID', { 
          error: err.message,
          jobData: job.data 
        });
        return;
      }

      paymentLogger.warn(`Transaction job failed: ${txId}`, {
        attemptsMade: job.attemptsMade,
        maxAttempts: this.MAX_ATTEMPT,
        error: err.message,
        txId
      });

      // If max attempts reached, mark transaction as failed
      if (job.attemptsMade >= this.MAX_ATTEMPT) {
        paymentLogger.error(`Transaction failed after ${this.MAX_ATTEMPT} attempts: ${txId}`);
        
        const interval = setInterval(async () => {
          try {
            const response = await this.failTransaction(job.data, err);
            if (response.status) {
              paymentLogger.info(`Transaction marked as failed: ${txId}`);
              clearInterval(interval);
              this.activeIntervals.delete(interval);
            }
          } catch (failError: any) {
            paymentLogger.error(`Error marking transaction as failed: ${txId}`, {
              error: failError.message,
              txId
            });
          }
        }, this.FAILURE_RETRY_DELAY);

        this.activeIntervals.add(interval);
      }
    });

    this.worker.on('error', (err: Error) => {
      paymentLogger.error('Transaction worker error:', {
        error: err.message,
        stack: err.stack
      });
    });

    this.worker.on('ready', () => {
      paymentLogger.info('Transaction worker is ready');
    });

    paymentLogger.info('Transaction worker initialized successfully');
  };

  // Cleanup method for graceful shutdown
  async cleanup(): Promise<void> {
    paymentLogger.info('Cleaning up PaymentTools resources...');
    
    // Clear all active intervals
    this.activeIntervals.forEach(interval => {
      clearInterval(interval);
    });
    this.activeIntervals.clear();

    // Close worker if exists
    if (this.worker) {
      try {
        await this.worker.close();
        paymentLogger.info('Transaction worker closed successfully');
      } catch (err: any) {
        paymentLogger.error('Error closing transaction worker:', {
          error: err.message
        });
      }
      this.worker = null;
    }

    paymentLogger.info('PaymentTools cleanup completed');
  }
}