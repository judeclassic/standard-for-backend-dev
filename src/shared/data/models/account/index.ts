import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
  } from 'typeorm';
  import { Wallet } from '../wallet';
  import {
    IApiInfo,
    IPaymentAccount,
    IGeneralPaymentAccount,
    ISecurePaymentAccount,
    ISecureAccountWallet,
    IGeneralAccountWallet,
    IPlanType,
    IPackage,
    IPackageName,
    IAccountDetails,
    IAccountType,
    IPackageType,
    IInterval,
    IAccountSettings,
  } from './types';
import { MerchantAnalytics } from '../analytics/merchant';
import { Merchant } from '../merchant';
import { IBlockchainType } from '../wallet/type';

@Entity('account_wallets')
export class AccountWallet {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'enum', enum: ['Ton', 'BSC'] })
  blockchain!: IBlockchainType;

  @Column({ type: 'decimal', precision: 18, scale: 6, default: '0.000000' })
  balance!: number;

  @Column({ type: 'text' })
  master_wallet_address!: string;

  @ManyToOne(() => PaymentAccount, (account) => account.id)
  @JoinColumn({ name: 'account_id' })
  account!: PaymentAccount;

  @OneToOne(() => Wallet, { eager: true })
  @JoinColumn({ name: 'wallet_id' })
  wallet!: Wallet;

  get toResponse(): ISecureAccountWallet {
    return {
      id: this.id,
      wallet: this.wallet?.toResponse,
      blockchain: this.blockchain,
      master_wallet_address: this.master_wallet_address,
      balance: this.balance,
      account: this.account?.toResponse,
    };
  };

  get toGeneralResponse(): IGeneralAccountWallet {
    return {
      id: this.id,
      wallet: this.wallet?.toGeneralResponse,
      blockchain: this.blockchain,
      balance: this.balance,
      account: this.account?.toGeneralResponse,
    };
  }
}

export class ApiInfo implements IApiInfo {
    @Column({ type: 'varchar', length: 255 })
    access_token!: string;
  
    @Column({ type: 'text' })
    public_key!: string;
  
    @Column({ type: 'text' })
    secret_key!: string;
  
    @Column({ type: 'varchar', length: 255 })
    webhook_url!: string;
}

export class Package implements IPackage {
  @Column({ type: 'enum', enum: ['basic', 'pro', 'enterprise'] })
  name!: IPackageName;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'float', default: 0 })
  subscription_fee!: number;
}

export class AccountDetails implements IAccountDetails {
  @Column({ type: 'enum', enum: ['subscription', 'one-time'] })
  account_type!: IAccountType;

  @Column({ type: 'enum', enum: ['single', 'multiple'] })
  package_type!: IPackageType;

  @Column({ type: 'enum', enum: ['daily', 'weekly', 'monthly', 'yearly'] })
  interval!: IInterval;

  @Column('jsonb', { nullable: false, default: () => `'[]'` })
  packages!: Package[];

  @Column({ type: 'varchar', nullable: true })
  duration?: string;
}

export class AccountSettings implements IAccountSettings {
  @Column({ type: 'enum', enum: ['free', 'standard', 'continuous'], default: 'free' })
  plan!: IPlanType;

  @Column({ type: 'float', default: 0 })
  balance!: number;

  @Column({ type: 'varchar', default: 'inactive' })
  subscription_status!: string;

  @Column({ type: 'timestamp', nullable: true })
  subscription_date!: Date;

  @Column({ type: 'timestamp', nullable: true })
  subscription_expiry_date!: Date;
}

@Entity('payment_accounts')
export class PaymentAccount implements IPaymentAccount {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column({ type: 'text', default: "" })
    description!: string;

    @Column({ type: 'varchar', length: 100 })
    name!: string;
    
    @Column({
      type: 'enum',
      enum: [ 'free', 'standard', 'continuous' ],
      default: 'Free',
    })

    @Column({ type: 'varchar' })
    merchant_id!: string;
    
    @ManyToOne(() => Merchant, m => m.setting.accounts, { nullable: false })
    @JoinColumn({ name: 'merchant_id' })
    merchant!: Merchant;
    
    @OneToMany(() => MerchantAnalytics, (analytics) => analytics.account, { cascade: true })
    analytics!: MerchantAnalytics[];
  
    @OneToMany(() => AccountWallet, (wallet) => wallet.account, { cascade: true, eager: true })
    wallets!: AccountWallet[];
  
    @Column((type) => ApiInfo)
    api_info!: ApiInfo;

    @Column((type) => ApiInfo)
    sandbox_info!: ApiInfo;
  
    @Column(() => AccountDetails)
    details!: AccountDetails;

    @Column(() => AccountSettings)
    settings!: AccountSettings;
  
    @Column({ type: 'decimal', precision: 18, scale: 6, default: '0.000000' })
    total_balance!: number;
  
    @CreateDateColumn({ type: 'timestamp with time zone' })
    created_at!: Date;
  
    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updated_at!: Date;
  
    get toGeneralResponse(): IGeneralPaymentAccount {
      return {
        id: this.id,
        name: this.name,
        description: this.description,
        plan: this.settings.plan,
        details: this.details,
        total_balance: this.total_balance,
        created_at: this.created_at,
        updated_at: this.updated_at,
      };
    }
  
    get toResponse(): ISecurePaymentAccount {
      return {
        id: this.id,
        name: this.name,
        description: this.description,
        plan: this.settings.plan,
        merchant: this.merchant?.toResponse,
        analytics: this.analytics || [],
        wallets: this.wallets?.map?.(wallet => wallet?.toResponse) ?? [],
        api_info: {
          ...this.api_info,
          secret_key: this.api_info.secret_key.slice(0, 6) + '*********',
        },
        sandbox_info: {
          ...this.sandbox_info,
          secret_key: this.sandbox_info.secret_key.slice(0, 6) + '*********',
        },
        total_balance: this.total_balance,
        details: this.details,
        settings: this.settings,
        created_at: this.created_at,
        updated_at: this.updated_at,
      };
    }

    get toFirstResponse(): ISecurePaymentAccount {
      return {
        id: this.id,
        name: this.name,
        description: this.description,
        plan: this.settings.plan,
        merchant: this.merchant?.toResponse,
        analytics: this.analytics || [],
        wallets: this.wallets?.map?.(wallet => wallet?.toResponse) ?? [],
        sandbox_info: this.sandbox_info,
        api_info: this.api_info,
        total_balance: this.total_balance,
        details: this.details,
        settings: this.settings,
        created_at: this.created_at,
        updated_at: this.updated_at,
      };
    }
  }
  