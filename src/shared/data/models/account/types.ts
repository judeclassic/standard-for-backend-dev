import { ApiInfo } from ".";
import { IAnalytics } from "../analytics/merchant/types";
import { IMerchant, ISecureMerchant } from "../merchant/types";
import { IBlockchainType, IGeneralWallet, IWallet, ISecureWallet } from "../wallet/type";

export type IPlanType = "free" | "standard" | "continuous";
export type IAccountType = 'subscription' | 'one-time';
export type IPackageType = 'single' | 'multiple';
export type IInterval = 'daily' | 'weekly' | 'monthly' | 'yearly'; 
export type IPackageName = 'basic' | 'pro' | 'enterprise';
  

export type IAccountWallet = {
    id: string
    blockchain: IBlockchainType;
    master_wallet_address: string;
    balance: number;
    wallet: IWallet
    account: IPaymentAccount;
}

export type IGeneralAccountWallet = {
    id: string
    blockchain: IBlockchainType
    balance: number;
    wallet: IGeneralWallet
    account: IGeneralPaymentAccount;
}

export type ISecureAccountWallet = {
    id: string
    balance: number;
    master_wallet_address: string;
    blockchain: IBlockchainType
    wallet: ISecureWallet
    account: ISecurePaymentAccount;
}

export type IApiInfo = {
    access_token: string;
    public_key: string;
    secret_key: string;
    webhook_url: string;
}

export type IPackage = {
    name: IPackageName;
    description?: string;
    subscription_fee: number;
}

export type IAccountDetails= {
    account_type: IAccountType;
    package_type: IPackageType;
    interval: IInterval;
    packages: IPackage[];
    duration?: string;
}

export type IAccountSettings = {
    plan: IPlanType;
    balance: number;
    subscription_status: string;
    subscription_date: Date;
    subscription_expiry_date: Date,
}

export type IPaymentAccount = {
    id: string;
    name: string;
    description: string;
    merchant: IMerchant;
    analytics: IAnalytics[];
    wallets: IAccountWallet[];
    api_info: IApiInfo,
    sandbox_info: IApiInfo,
    details: IAccountDetails,
    total_balance: number;
    settings: IAccountSettings;
}

export interface IGeneralPaymentAccount {
    id: string;
    name: string;
    description: string;
    plan: IPlanType;
    total_balance: number;
    details: IAccountDetails;
    created_at: Date;
    updated_at: Date;
}
  
export interface ISecurePaymentAccount extends IGeneralPaymentAccount {
    merchant: ISecureMerchant;
    analytics: IAnalytics[];
    wallets: ISecureAccountWallet[];
    sandbox_info: ApiInfo;
    api_info: ApiInfo;
    settings: IAccountSettings;
}
  