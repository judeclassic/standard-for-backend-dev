import { IAccountWallet, IGeneralAccountWallet, IPackage, ISecureAccountWallet } from "../account/types";
import { IGeneralUserWallet, ISecureUserWallet, IUserWallet } from "../user/types";
import { IBlockchainType } from "../wallet/type";

export enum TransactionAction {
    SENDER = 'sender',
    RECEIVER = 'receiver',
}

export interface ITransaction {
    id: string;
    hash?: string;
    account: IAccountTransaction,
    user: IUserTransaction,
    blockchain: IBlockchainType;
    origin: 'payout' | 'payment';
    package: IPackage;
    errors?: string[];
    status: 'success' | 'pending' | 'failed',
    type: 'sandbox' | 'production';
    description?: string;
    metadata?: Record<string, any>;
    process_status: 'pending' | 'processed' | 'completed' | 'failed';
    timeout: number;
    created_at: Date;
    completed_at?: Date;
    updated_at: Date;
}

export interface IUserTransaction {
    email: string;
    address: string;
    user_wallet: IUserWallet;
    action: TransactionAction;
}

export interface IAccountTransaction {
    account_id: string;
    merchant_id: string;
    wallet_address: string;
    account_wallet: IAccountWallet,
    action: TransactionAction;
}

export interface IGeneralTransaction {
    id: string;
    user: {
        email: string;
        address: string
        user_wallet: IGeneralUserWallet
        action: TransactionAction;
    };
    account: {
        wallet_address: string
        account_wallet?: IGeneralAccountWallet
        action: TransactionAction;
    };
    type: 'sandbox' | 'production';
    origin: 'payout' | 'payment';
    blockchain: IBlockchainType;
    timeout: number;
    package: IPackage;
    status: 'success' | 'pending' | 'failed';
    process_status: 'pending' | 'processed' | 'completed' | 'failed';
    description?: string;
    metadata?: Record<string, any>;
    completed_at?: Date;
    created_at: Date;
    updated_at: Date;
}

export interface ISecureTransaction extends IGeneralTransaction {
    errors: string[];
    user: {
        email: string;
        address: string
        user_wallet: ISecureUserWallet
        action: TransactionAction;
    };
    type: 'sandbox' | 'production';
    origin: 'payout' | 'payment';
    timeout: number;
    account: { 
        wallet_address: string;
        account_wallet?: ISecureAccountWallet
        action: TransactionAction;
    };
}