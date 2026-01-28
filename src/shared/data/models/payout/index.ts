import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PaymentAccount } from '../account';
import { User } from '../user';
import { IBlockchainType } from '../wallet/type';
import { IPayoutUser, ISecurePayoutUser } from './types';

@Entity('payout_users')
export class PayoutUser implements IPayoutUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid', { name: 'user_id' })
  user_id!: string;

  @ManyToOne(() => User, (user) => user.wallets, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'varchar', length: 255 })
  email!: string;

  @ManyToOne(() => PaymentAccount, (account) => account.id)
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

  @Column({
    type: 'enum',
    enum: ['pending', 'cancelled', 'completed'],
    default: 'pending'
  })
  status!: 'pending' | 'cancelled' | 'completed';

  @Column({ type: 'varchar', length: 255 })
  destination_address!: string;

  @Column({ type: 'text' })
  hash!: string;

  @Column({ type: 'enum', enum: ["Ton", "BSC"], default: "BSC" })
  blockchain!: IBlockchainType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  get toResponse(): ISecurePayoutUser {
    return {
      id: this.id,
      email: this.email,
      account_id: this.account_id,
      type: this.type,
      blockchain: this.blockchain,
      destination_address: this.destination_address,
      hash: this.hash,
      user_id: this.user_id,
      status: this.status,
      created_at: this.created_at,
      updated_at: this.updated_at
    }
  }
}
