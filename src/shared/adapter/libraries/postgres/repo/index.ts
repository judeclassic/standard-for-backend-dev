import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';
import { MerchantAnalytics } from '@/models/analytics/merchant';
import { AdminAnalytics } from '@/models/analytics/admin';
import { MerchantAnalyticsRepository } from './merchant-analytics';
import { AppRepository } from './type';

export class AppDataSource extends DataSource {
  getAppRepository<Entity extends ObjectLiteral>(
    target: EntityTarget<Entity>
  ): AppRepository<Entity> {
    return new AppRepository<Entity>(target, this.manager);
  }

  getMerchantAnalyticsRepository(
    target: EntityTarget<MerchantAnalytics>
  ): MerchantAnalyticsRepository {
    return new MerchantAnalyticsRepository(target, this.manager);
  }
}

export { AppRepository, MerchantAnalyticsRepository };
