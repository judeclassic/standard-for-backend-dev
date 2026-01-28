import { RepoError } from "@/utils/types/error";
import { IResponse } from "../../../utils/types/types";
import { IWallet } from "@/models/wallet/type";
import { ITransaction } from "@/models/transaction/type";

export abstract class ICryptoWallet {
    wallet: IWallet;

    constructor(wallet: IWallet) {
        this.wallet = wallet;
    }

    static async getUSDTBalance(address: string): Promise<IResponse<string>> {
        throw RepoError("getBalance not implemented", "ICryptoWallet");
    }
    
   // Overload signatures
   static async generateWallet(
        wallet_details: IWallet | string,
        type: "forwarder"
    ): Promise<IForwardCryptoWallet>;

    static async generateWallet(
        wallet_details: IWallet | string,
        type: "payout"
    ): Promise<IPayoutCryptoWallet>;

    static async generateWallet(
        wallet_details: IWallet | string,
        type: "forwarder" | "payout" = "forwarder"
    ): Promise<ICryptoWallet> {
        throw RepoError("generateWallet not implemented", "ICryptoWallet");
    }

    get getModel(): IWallet {
        throw RepoError("getBalance not implemented", "ICryptoWallet");
    }

    async getUSDTBalance(): Promise<IResponse<number>> {
        throw RepoError("getBalance not implemented", "ICryptoWallet");
    }

    static get isActive(): Promise<boolean> {
        throw RepoError("isActive not implemented", "ICryptoWallet");
    }
}

export interface IPayoutCryptoWallet extends ICryptoWallet {
    addRecipient: (address: string) => Promise<IResponse<string>>; 
    removeRecipient: (address: string) => Promise<IResponse<string>>;

    addPayoutRequest: (address: string, amount: number) => Promise<IResponse<string>>
}

export interface IForwardCryptoWallet extends ICryptoWallet {
    confirmPayment: (transaction: ITransaction) => Promise<IResponse<ITransaction>>;
    rescueToken(token: string, tx: ITransaction): Promise<IResponse<string>>;
    
    // PaymentForwarder methods
    createPayment: (minimumAmount: number, timeout: number) => Promise<IResponse<number>>;
    processPayment: (transactionId: number) => Promise<IResponse<string>>;
    verifyTransaction: () => Promise<IResponse<{
        transactionId: number;
        isCompleted: boolean;
        amount: number;
        minimumAmount: number;
        isExpired: boolean;
    }>>;
    canProcessPayment: () => Promise<IResponse<{
        canProcess: boolean;
        currentBalance: number;
        minimumRequired: number;
        isExpired: boolean;
    }>>;
    getActiveTransaction: () => Promise<IResponse<{
        transactionId: number;
        minimumAmount: number;
        timeout: number;
        createdAt: number;
        isActive: boolean;
    }>>;
}


export type ITransactionHash = {
    hash: string;
    from: string;
    recipient: string;
    amount: string;
    developer: string;
    fee: string;
    status: "success" | "failed" | "pending",
    block_number: number;
    timestamp?: number;
}