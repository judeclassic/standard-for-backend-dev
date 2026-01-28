import { IWallet } from "@/models/wallet/type";
import { ICryptoWallet, IForwardCryptoWallet, IPayoutCryptoWallet } from "../type";
import { IResponse } from "@/utils/types/types";
import { ITransaction } from "@/models/transaction/type";

export class TonCryptoWallet implements ICryptoWallet {

  constructor(readonly wallet: IWallet) {
    this.wallet = wallet;
  }

  static async getUSDTBalance(address: string): Promise<IResponse<string>> {
    throw new Error('Method not implemented.');
  }

  static async getBalance(address: string): Promise<IResponse<string>> {
    throw new Error('Method not implemented.');
  }

  // 🔹 Function overloads
  static async generateWallet(
    wallet_details: IWallet | string,
    type: "forwarder"
  ): Promise<TonForwarderCryptoWallet>;

  static async generateWallet(
    wallet_details: IWallet | string,
    type: "payout"
  ): Promise<TonPayoutCryptoWallet>;

  static async generateWallet(
    wallet_details: IWallet | string,
    type: "forwarder" | "payout" = "forwarder"
  ): Promise<TonCryptoWallet> {
    try {
      if (typeof wallet_details !== "string") {
        return type === "forwarder"
          ? new TonForwarderCryptoWallet(wallet_details)
          : new TonPayoutCryptoWallet(wallet_details);
      }

      throw new Error('Method not implemented.');
    } catch (error) {
      console.error('Error generating wallet: ', error);
      throw new Error('Failed to generate wallet');
    }
  }

  async getUSDTBalance(): Promise<IResponse<number>> {
    throw new Error('Method not implemented.');
  }

  get getModel(): IWallet {
    return { ...this.wallet }
  }

  static get isActive(): Promise<boolean> {
    return (async () => {
      return false;
    })();
  }
}

export class TonForwarderCryptoWallet extends TonCryptoWallet implements IForwardCryptoWallet {
  constructor(wallet: IWallet) {
    super(wallet);
  }

  confirmPayment = (tx: ITransaction): Promise<IResponse<ITransaction>> => {
    throw new Error('Method not implemented.');
  }

  createPayment = (minimumAmount: number, timeout: number): Promise<IResponse<number>> => {
    throw new Error('Method not implemented.');
  }

  rescueToken = (token: string, tx: ITransaction): Promise<IResponse<string>> => {
    throw new Error('Method not implemented.');
  }

  processPayment = (transactionId: number): Promise<IResponse<string>> => {
    throw new Error('Method not implemented.');
  }

  verifyTransaction = (): Promise<IResponse<{ transactionId: number; isCompleted: boolean; amount: number; minimumAmount: number; isExpired: boolean; }>> => {
    throw new Error('Method not implemented.');
  }

  canProcessPayment = (): Promise<IResponse<{ canProcess: boolean; currentBalance: number; minimumRequired: number; isExpired: boolean; }>> => {
    throw new Error('Method not implemented.');
  }

  getActiveTransaction = (): Promise<IResponse<{ transactionId: number; minimumAmount: number; timeout: number; createdAt: number; isActive: boolean; }>> => {
    throw new Error('Method not implemented.');
  }
}

export class TonPayoutCryptoWallet extends TonCryptoWallet implements IPayoutCryptoWallet {
  constructor(wallet: IWallet) {
    super(wallet);
  }

  async addRecipient(): Promise<IResponse<string>> {
    throw new Error('Method not implemented.');
  }

  removeRecipient(): Promise<IResponse<string>> {
    throw new Error('Method not implemented.');
  }

  addPayoutRequest(): Promise<IResponse<string>> {
    throw new Error('Method not implemented.');
  }
}