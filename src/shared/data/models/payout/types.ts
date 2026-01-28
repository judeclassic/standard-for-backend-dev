import { IPaymentAccount } from "../account/types";
import { ITransaction } from "../transaction/type";
import { IBlockchainType } from "../wallet/type";

export type IPayoutUser = {
    id: string;
    user_id?: string;
    email: string;
    account_id: string;
    account: IPaymentAccount;
    type: 'sandbox' | 'production';
    status: 'pending' | 'cancelled' | 'completed';
    blockchain: IBlockchainType;
    destination_address: string;
    hash: string;

    created_at: Date;
    updated_at: Date;
}

export type ISecurePayoutUser = Omit<IPayoutUser, 'account'>

export type IGeneratePayoutUser = {
    email: string;
    account_id: string;
    type?: 'sandbox' | 'production';
    status?: 'pending' | 'cancelled' | 'completed';
    blockchain: string;
    destination_address: string;
    wallet_id: string;
    user_id?: string;
}