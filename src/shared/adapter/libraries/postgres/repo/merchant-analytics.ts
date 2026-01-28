import { Between } from 'typeorm';
import { startOfMonth, endOfMonth, subMonths } from 'date-fns';
import { MerchantAnalytics } from '@/models/analytics/merchant';
import { ITransaction } from '@/models/transaction/type';
import { AppRepository } from './type';

// Compare to previous month for trends
const delta = (curr: number, prev: number | undefined) =>
  curr - (prev ?? 0);

export class MerchantAnalyticsRepository extends AppRepository<MerchantAnalytics> {

  async monthlyRecord(tx: ITransaction, status: 'success' | 'pending' | 'failed', type: 'sandbox' | 'production' | undefined = 'production'): Promise<MerchantAnalytics> {
    const now = new Date();
    const startCurrent = startOfMonth(now);
    const endCurrent = endOfMonth(now);

    const startPrev = startOfMonth(subMonths(now, 1));
    const endPrev = endOfMonth(subMonths(now, 1));

    const [current, previous] = await Promise.all([
      this.findOne({
        where: {
          account: { id: tx.account.account_id },
          type: type,
          created_at: Between(startCurrent, endCurrent),
        },
      }),
      this.findOne({
        where: {
          account: { id: tx.account.account_id },
          type: type,
          created_at: Between(startPrev, endPrev),
        },
      }),
    ]);

    let analytics = current ?? this.create({
      account: { id: tx.account.account_id },
      merchant: { id: tx.account.merchant_id },
      type: type,
      created_at: now,
    });

    if (!analytics) throw new Error("Unable to create analytics");

    // Initialize values if missing
    analytics.success_rate_value ??= 0;
    analytics.failed_rate_value ??= 0;
    analytics.pending_transactions_value ??= 0;
    analytics.total_transactions_value ??= 0;
    analytics.total_revenue_value ??= 0;

    // Update values
    if (status === 'success') {
      analytics.success_rate_value += 1;
      analytics.total_transactions_value += 1;
      analytics.total_revenue_value += tx.package.subscription_fee;
    }

    if (status === 'pending') {
      analytics.pending_transactions_value += 1;
      analytics.total_transactions_value += 1;
    }

    if (status === 'failed') {
      analytics.failed_rate_value += 1;
      analytics.total_transactions_value += 1;
    }

    analytics.success_rate_trend = delta(
      analytics.success_rate_value,
      previous?.success_rate_value,
    );
    analytics.failed_rate_trend = delta(
      analytics.failed_rate_value,
      previous?.failed_rate_value,
    );
    analytics.pending_transactions_trend = delta(
      analytics.pending_transactions_value,
      previous?.pending_transactions_value,
    );
    analytics.total_transactions_trend = delta(
      analytics.total_transactions_value,
      previous?.total_transactions_value,
    );
    analytics.total_revenue_trend = delta(
      analytics.total_revenue_value,
      previous?.total_revenue_value,
    );

    return this.save(analytics);
  }

}