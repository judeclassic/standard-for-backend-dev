import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { IUserWallet, IUser, ISecureUser, ISecureUserWallet, IGeneralUserWallet, IGeneralUser } from './types';
import { PaymentAccount } from '../account';
import { Wallet } from '../wallet';

@Entity('user_wallets')
export class UserWallet implements IUserWallet {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.wallets, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'varchar', length: 255 })
  email!: string;

  @ManyToOne(() => PaymentAccount, (account) => account.id, { eager: true })
  @JoinColumn({ name: 'account_id' })
  account!: PaymentAccount;

  @Column('uuid', { name: 'account_id' })
  account_id!: string;

  @Column({
    type: 'enum',
    enum: ['sandbox', 'production'],
    default: 'production'
  })
  type!: 'sandbox' | 'production'

  @ManyToOne(() => Wallet, (wallet) => wallet.id, { eager: true })
  @JoinColumn({ name: 'wallet_id' })
  wallet!: Wallet;

  @Column('uuid', { name: 'wallet_id' })
  wallet_id!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  get toGeneralResponse(): IGeneralUserWallet {
    return {
      id: this.id,
      email: this.email,
      account_id: this.account_id,
      type: this.type,
      wallet: this.wallet.toGeneralResponse,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }

  get toSecureResponse(): ISecureUserWallet {
    return {
      id: this.id,
      email: this.email,
      account_id: this.account_id,
      type: this.type,
      wallet: this.wallet.toResponse,
      account: this.account.toResponse,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email!: string;

  @OneToMany(() => UserWallet, (userWallet) => userWallet.user, { cascade: true, eager: true })
  wallets!: UserWallet[];

  toGeneralResponse(): IGeneralUser {
    return {
      id: this.id,
      email: this.email,
      wallets: this.wallets.map((uw) => uw.toGeneralResponse),
    };
  }

  toResponse(): ISecureUser {
    return {
      id: this.id,
      email: this.email,
      wallets: this.wallets.map((uw) => uw.toSecureResponse),
    };
  }
}
