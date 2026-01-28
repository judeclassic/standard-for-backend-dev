import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
  } from 'typeorm';
import { UserWallet } from '../user';
import { IAccountTransaction, IGeneralTransaction, ISecureTransaction, ITransaction, IUserTransaction, TransactionAction } from './type';
import { AccountWallet, Package } from '../account';
import { IBlockchainType } from '../wallet/type';
  
export class UserInfo implements IUserTransaction {
    @Column({ type: 'varchar', length: 255 })
    email!: string;

    @Column({ type: 'varchar', length: 255 })
    address!: string;

    @ManyToOne(() => UserWallet, { eager: false, nullable: true, onDelete: 'SET NULL' })
    user_wallet!: UserWallet

    @Column({ type: 'enum', enum: ['sender', 'receiver'], default: 'sender' })
    action!: TransactionAction;
}
  
export class AccountInfo implements IAccountTransaction {
    @Column({ type: 'varchar', length: 255 })
    wallet_address!: string;

    @Column({ type: 'varchar', length: 255 })
    account_id!: string;

    @Column({ type: 'varchar', length: 255 })
    merchant_id!: string;

    @ManyToOne(() => AccountWallet, { eager: false, nullable: true, onDelete: 'SET NULL' })
    account_wallet!: AccountWallet;

    @Column({ type: 'enum', enum: ['sender', 'receiver'], default: 'sender' })
    action!: TransactionAction;
}
  
@Entity('transactions')
@Index('status_idx', ['status'])
export class Transaction implements ITransaction {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column(() => UserInfo, { prefix: 'user_' })
    user!: UserInfo;

    @Column(() => AccountInfo, { prefix: 'account_' })
    account!: AccountInfo;

    @Column({ type: 'enum', enum: ['Ton', 'BSC'] })
    blockchain!: IBlockchainType;

    @Column({ type: 'enum', enum: ['payout', 'payment'], default: 'payment' })
    origin!: 'payout' | 'payment';

    @Column('jsonb', { nullable: false, default: () => `'[]'` })
    package!: Package;

    @Column('text', { array: true, default: [] })
    errors!: string[];

    @Column({ type: 'int', default: 0 })
    timeout!: number;

    @Column({
      type: 'enum',
      enum: ['success', 'pending', 'failed'],
      default: 'pending',
    })
    status!: 'success' | 'pending' | 'failed';

    @Column({
      type: 'enum',
      enum: ['pending', 'processed', 'completed', 'failed'],
      default: 'pending',
    })
    process_status!: 'pending' | 'processed' | 'completed' | 'failed';

    @Column({
      type: 'enum',
      enum: ['sandbox', 'production'],
      default: 'production'
    })
    type!: 'sandbox' | 'production'

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column('jsonb', { nullable: true })
    metadata?: Record<string, any>;

    @CreateDateColumn({ type: 'timestamp with time zone' })
    created_at!: Date;
    
    @CreateDateColumn({ type: 'timestamp with time zone', nullable: true, })
    completed_at?: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updated_at!: Date;
  
    get toGeneralResponse(): IGeneralTransaction {
      return {
        id: this.id,
        origin: this.origin,
        process_status: this.process_status,
        user: {
          email: this.user.email,
          address: this.user.address,
          user_wallet: this.user?.user_wallet?.toGeneralResponse,
          action: this.user.action,
        },
        account: {
          wallet_address: this.account?.wallet_address,
          account_wallet: this.account?.account_wallet?.toGeneralResponse,
          action: this.account.action,
        },
        type: this.type,
        blockchain: this.blockchain,
        timeout: this.timeout,
        package: this.package,
        status: this.status,
        completed_at: this.completed_at,
        created_at: this.created_at,
        updated_at: this.updated_at,
      };
    }
  
    get toSecureResponse(): ISecureTransaction {
      return {
        id: this.id,
        origin: this.origin,
        process_status: this.process_status,
        user: {
          email: this.user.email,
          address: this.user.address,
          user_wallet: this.user.user_wallet?.toSecureResponse,
          action: this.user.action,
        },
        account: {
          wallet_address: this.account?.wallet_address,
          account_wallet: this.account?.account_wallet?.toResponse,
          action: this.account.action,
        },
        type: this.type,
        errors: this.errors,
        timeout: this.timeout,
        blockchain: this.blockchain,
        package: this.package,
        status: this.status,
        completed_at: this.completed_at,
        updated_at: this.updated_at,
        created_at: this.created_at
      };
    }
}
  