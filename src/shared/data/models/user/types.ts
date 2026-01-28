import { IGeneralPaymentAccount, IPaymentAccount, ISecurePaymentAccount } from "../account/types";
import { IGeneralWallet, ISecureWallet, IWallet } from "../wallet/type";

export type ISecureUserWallet = {
    id: string;
    email: string;
    account_id: string;
    type: 'sandbox' | 'production';
    wallet: ISecureWallet
    account: ISecurePaymentAccount;
    created_at: Date;
    updated_at: Date;
}

export type IGeneralUserWallet = {
    id: string;
    email: string;
    account_id: string;
    type: 'sandbox' | 'production';
    wallet: IGeneralWallet,
    created_at: Date;
    updated_at: Date;
}

export type IUserWallet = {
    id: string;
    email: string;
    account_id: string;
    type: 'sandbox' | 'production';
    wallet: IWallet;
    account: IPaymentAccount;
    created_at: Date;
    updated_at: Date;
}

export type IGeneralUser = {
    id: string;
    email: string;
    wallets: IGeneralUserWallet[];
}

export type ISecureUser = {
    id: string;
    email: string;
    wallets: ISecureUserWallet[];
}

export type IUser = {
    id: string;
    email: string;
    wallets: IUserWallet[];
}