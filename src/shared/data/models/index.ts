import { User, UserWallet } from './user';
import { AccountWallet, ApiInfo, PaymentAccount } from './account';
import { Wallet } from './wallet';
import { MerchantAnalytics } from './analytics/merchant';
import { Transaction } from './transaction';
import { Merchant } from './merchant';
import { Admin } from './admin';
import {
  AppDataSource,
  MerchantAnalyticsRepository,
  AdminAnalyticsRepository,
  AppRepository as Repository
} from '../../adapter/libraries/postgres/repo';
import { EntitySchema, MixedList } from 'typeorm';
import { PayoutUser } from './payout';
import { AdminAnalytics } from './analytics/admin';

export class Models {
  static get getEntities(): MixedList<string | Function | EntitySchema<any>> {
    return [
      AccountWallet,
      Admin,
      MerchantAnalytics,
      AdminAnalytics,
      ApiInfo,
      Merchant,
      PaymentAccount,
      PayoutUser,
      User,
      UserWallet,
      Transaction,
      Wallet,
    ];
  }

  static async new(dataSource: AppDataSource): Promise<Models> {
    if (!dataSource.isInitialized) {
      await dataSource.initialize();
    }

    return new Models(
      dataSource,

      dataSource.getAppRepository(Admin),
      dataSource.getAppRepository(Merchant),
      dataSource.getAppRepository(User),
      dataSource.getAppRepository(UserWallet),
      dataSource.getAppRepository(PaymentAccount),
      dataSource.getAppRepository(PayoutUser),
      dataSource.getAppRepository(AccountWallet),
      dataSource.getAppRepository(Wallet),
      dataSource.getAppRepository(Transaction),
      {
        admin: dataSource.getAdminAnalyticsRepository(AdminAnalytics),
        merchant: dataSource.getMerchantAnalyticsRepository(MerchantAnalytics),
      },
    );
  }

  constructor(
    public readonly dataSource: AppDataSource,

    public readonly admin: Repository<Admin>,
    public readonly merchant: Repository<Merchant>,
    public readonly user: Repository<User>,
    public readonly user_wallet: Repository<UserWallet>,
    public readonly accounts: Repository<PaymentAccount>,
    public readonly payouts: Repository<PayoutUser>,
    public readonly account_wallets: Repository<AccountWallet>,
    public readonly wallets: Repository<Wallet>,
    public readonly transactions: Repository<Transaction>,
    public readonly analytics: {
      admin: AdminAnalyticsRepository,
      merchant: MerchantAnalyticsRepository,
    },
  ) { }
}