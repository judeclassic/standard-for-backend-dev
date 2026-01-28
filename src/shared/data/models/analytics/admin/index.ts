import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { 
  IAdminAnalytics, 
  IAdminAnalyticsResponse, 
  IMerchantMetrics, 
  IAccountMetrics, 
  ITransactionMetrics, 
  ISubscriberMetrics, 
  ISDKMetrics, 
  ISystemMetrics 
} from './types';

@Entity('admin_analytics')
@Index('period_type_date_idx', ['period_type', 'period_start', 'period_end'])
export class AdminAnalytics implements IAdminAnalytics {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // Merchant metrics
  @Column({ type: 'jsonb' })
  merchant_metrics!: IMerchantMetrics;

  // Account metrics
  @Column({ type: 'jsonb' })
  account_metrics!: IAccountMetrics;

  // Transaction metrics
  @Column({ type: 'jsonb' })
  transaction_metrics!: ITransactionMetrics;

  // Subscriber metrics
  @Column({ type: 'jsonb' })
  subscriber_metrics!: ISubscriberMetrics;

  // SDK metrics
  @Column({ type: 'jsonb' })
  sdk_metrics!: ISDKMetrics;

  // System metrics
  @Column({ type: 'jsonb' })
  system_metrics!: ISystemMetrics;

  // Time period configuration
  @Column({ 
    type: 'enum', 
    enum: ['hourly', 'daily', 'weekly', 'monthly', 'yearly', 'all-time'],
    default: 'daily'
  })
  period_type!: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all-time';

  @Column({ type: 'timestamp' })
  period_start!: Date;

  @Column({ type: 'timestamp' })
  period_end!: Date;

  // Timestamps
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  get toResponse(): IAdminAnalyticsResponse {
    return {
      merchant_metrics: this.merchant_metrics,
      account_metrics: this.account_metrics,
      transaction_metrics: this.transaction_metrics,
      subscriber_metrics: this.subscriber_metrics,
      sdk_metrics: this.sdk_metrics,
      system_metrics: this.system_metrics,
      period_type: this.period_type,
      period_start: this.period_start,
      period_end: this.period_end,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

