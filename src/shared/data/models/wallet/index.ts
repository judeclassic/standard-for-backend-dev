import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IBlockchainType, IGeneralWallet, ISecureWallet, IWallet } from './type';

@Entity('wallets')
export class Wallet implements IWallet {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: "varchar" })
  address!: string;

  @Column({ type: 'enum', enum: ['forwarder', 'payout'] })
  type!: 'forwarder' | 'payout';

  @Column({ type: 'enum', enum: ['Ton', 'BSC'] })
  blockchain!: IBlockchainType;

  @Column({ type: "varchar" })
  merchant_address!: string;

  @Column({ type: "varchar" })
  developer_address!: string;

  get toGeneralResponse(): IGeneralWallet {
    return {
      id: this.id,
      address: this.address,
      type: this.type,
      blockchain: this.blockchain,
    };
  }

  get toResponse(): ISecureWallet {
    return {
      ...this.toGeneralResponse,
      merchant_address: this.merchant_address,
      developer_address: this.developer_address,
    };
  }
}
