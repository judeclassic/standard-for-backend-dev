import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { IAnalytics, ISuccessAnalytics } from './types';
import { IMerchant } from '../../merchant/types';
import { PaymentAccount } from '../../account';
import { Merchant } from '../../merchant';

@Entity('merchant_analytics')
@Index('merchant_account_idx', ['merchant', 'account'], { unique: true })
export class MerchantAnalytics implements IAnalytics {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Merchant, { eager: false })
  @JoinColumn()
  merchant!: IMerchant;

  @ManyToOne(() => PaymentAccount, { eager: false })
  @JoinColumn()
  account!: PaymentAccount;

  @Column({ type: 'enum', enum: ['sandbox', 'production'], default: 'production'})
  type!: 'sandbox' | 'production';

  // Total Transactions
  @Column({ type: 'float', default: 0 })
  total_transactions_value!: number;

  @Column({ type: 'float', default: 0 })
  total_transactions_trend!: number;

  // Success Rate
  @Column({ type: 'float', default: 0 })
  success_rate_value!: number;

  @Column({ type: 'float', default: 0 })
  success_rate_trend!: number;

  @Column({ type: 'float', default: 0 })
  failed_rate_value!: number;

  @Column({ type: 'float', default: 0 })
  failed_rate_trend!: number;

  // Total Revenue
  @Column({ type: 'float', default: 0 })
  total_revenue_value!: number;

  @Column({ type: 'float', default: 0 })
  total_revenue_trend!: number;

  // Pending Transactions
  @Column({ type: 'float', default: 0 })
  pending_transactions_value!: number;

  @Column({ type: 'float', default: 0 })
  pending_transactions_trend!: number;

  // Timestamp columns
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  get toResponse(): ISuccessAnalytics {
    return {
      type: this.type,
      total_transactions_value: this.total_transactions_value,
      total_transactions_trend: this.total_transactions_trend,
      success_rate_value: this.success_rate_value,
      success_rate_trend: this.success_rate_trend,
      failed_rate_value: this.failed_rate_value,
      failed_rate_trend: this.failed_rate_trend,
      pending_transactions_value: this.pending_transactions_value,
      pending_transactions_trend: this.pending_transactions_trend,
      total_revenue_value: this.total_revenue_value,
      total_revenue_trend: this.total_revenue_trend,
      created_at: this.created_at,
      updated_at: this.updated_at,
    }
  }
}
