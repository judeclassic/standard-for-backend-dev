import { IResponse } from '../../../../utils/types/types';
import { ICryptoWallet, ITransactionHash } from '../type';
import { IWallet } from '@/models/wallet/type';
import { ITransaction } from '@/models/transaction/type';

export class SandBoxCryptoWallet implements ICryptoWallet {

  constructor(readonly wallet: IWallet) {
    this.wallet = wallet;
  }

  static async getUSDTBalance(address: string): Promise<IResponse<string>> {
    try {
      return { status: true, data: "10.000" };
    } catch (err: any) {
      console.error("Error getting BSC USDT balance: ", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err?.reason || err?.message || 'Unknown error'}`
      };
    }
  }

  static async getBalance(address: string): Promise<IResponse<string>> {
    try {
      return { status: true, data: "10.000" };
    } catch (err: any) {
      console.error("Error getting BSC USDT balance:", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err.reason || err.message || 'Unknown error'}`
      };
    }
  }

  private static forwarderContract = async () => {
    return {
      deployed: {},
      address: "0x0000000000000000000000000000"
    };
  }

  private static payoutContract = async () => {
    return {
      deployed: {},
      address: "0x0000000000000000000000000000"
    };
  }

  static async generateWallet(wallet_details: IWallet | string, type: 'forwarder' | 'payout' | undefined = 'forwarder'): Promise<SandBoxCryptoWallet> {
    try {
      const contract = type === 'payout' ?
        await this.payoutContract()
        :
        await this.forwarderContract();

      return new SandBoxCryptoWallet({
        address: contract.address,
        type: type,
        blockchain: "BSC",
        merchant_address: "0x0000000000000000000000000000",
        developer_address: "0x0000000000000000000000000000"
      } as IWallet);
    } catch (err: any) {
      console.error("Wallet deployment failed:", err);
      throw new Error("Failed to deploy forwarder contract");
    }
  }

  async confirmPayment(tx: ITransaction): Promise<IResponse<ITransaction>> {
    return {
      status: true,
      data: tx,
    };
  }

  async onPayment(callback: (tx: ITransactionHash) => void): Promise<void> {
    callback({
      hash: "0x0000000000000000000000000000",
      block_number: 266,
      from: "0x0000000000000000000000000000",
      recipient: "0x0000000000000000000000000000",
      developer: "0x0000000000000000000000000000",
      amount: '10.00',
      fee: '10.00',
      status: "success",
      timestamp: Date.parse((new Date()).toString()),
    });
  }

  async getUSDTBalance(): Promise<IResponse<number>> {
    try {
      return { status: true, data: 10.000 };
    } catch (err: any) {
      return { status: false, message: err.message || "Error fetching USDT balance" };
    }
  }

  get getModel(): IWallet {
    return { ...this.wallet }
  }
}