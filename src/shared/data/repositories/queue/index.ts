import { TransactionQueue } from "./data/transaction";
import { WebhookRetryQueue } from "./data/webhook-retry";

export class QueueRepository {

  static async new(): Promise<QueueRepository> {
    return new QueueRepository(
      new TransactionQueue(),
      new WebhookRetryQueue()
    )
  }

  constructor(
    private readonly _transaction: TransactionQueue,
    private readonly _webhookRetry: WebhookRetryQueue
  ) {}

  get transaction() {
    return this._transaction;
  }

  get webhook() {
    return this._webhookRetry;
  }
}