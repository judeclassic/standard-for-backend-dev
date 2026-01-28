import { Job, Queue, Worker } from 'bullmq';
import redisClient from '../../../../adapter/libraries/redis';
import { ITransaction } from '@/models/transaction/type';

export class TransactionQueue {
  private _transactionQueue: Queue;
  constructor() {
    this._transactionQueue = new Queue('transaction-processing', {
      connection: redisClient,
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: false,
        backoff: { type: 'exponential', delay: 1000 }
      }
    });
  }

  get queue() {
    return this._transactionQueue;
  }
  
  createWorker(callback: (job: Job<ITransaction>) => Promise<void>) {
    return new Worker( 'transaction-processing', callback, {
      connection: redisClient
    });
  }
}