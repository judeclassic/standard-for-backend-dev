import { ethers } from 'ethers';
import { IResponse } from '../../../../utils/types/types';
import { ICryptoWallet, IForwardCryptoWallet, IPayoutCryptoWallet } from '../type';
import { IWallet } from '@/models/wallet/type';
import { ITransaction } from '@/models/transaction/type';
import { BSC_CONFIG, bscSigner, usdtContract } from '../artifacts/bsc.config';

export class BscCryptoWallet implements ICryptoWallet {

  constructor(readonly wallet: IWallet) {
    this.wallet = wallet;
  }

  static async getUSDTBalance(address: string): Promise<IResponse<string>> {
    try {
      const [balance, decimals] = await Promise.all([
        usdtContract.balanceOf(address),
        usdtContract.decimals()
      ]);

      const formattedBalance = ethers.formatUnits(balance, decimals);
      return { status: true, data: Number(formattedBalance).toFixed(4) };
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
      const [ balance, decimals ] = await Promise.all([
        usdtContract.balanceOf(address),
        usdtContract.decimals()
      ]);

      const formattedBalance = ethers.formatUnits(balance, decimals);
      return { status: true, data: Number(formattedBalance).toFixed(4) };
    } catch (err: any) {
      console.error("Error getting BSC USDT balance:", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err.reason || err.message || 'Unknown error'}`
      };
    }
  }

  private static forwarderContract = async ( request: { merchant_address: string, fee: bigint }) => {
    const factory = new ethers.ContractFactory(BSC_CONFIG.FORWARDER_ABI, BSC_CONFIG.FORWARDER_BYTE_CODE, bscSigner);

    const forwarder = await factory.deploy(
      BSC_CONFIG.USDT_CONTRACT,
      request.merchant_address,
      BSC_CONFIG.DEVELOPER_WALLET,
      BSC_CONFIG.FORWARDER_FEE,
    );
    const deployed = await forwarder.waitForDeployment();
    
    return {
      deployed: deployed,
      address: await deployed.getAddress()
    };
  }

  private static payoutContract = async (request: { requiredApprovals: bigint }) => {
    const factory = new ethers.ContractFactory( BSC_CONFIG.PAYOUT_ABI, BSC_CONFIG.PAYOUT_BYTE_CODE, bscSigner );

    // Deploy MultiValidatorPayout with proper constructor args
    const contract = await factory.deploy( "MultiValidatorPayout", "1", request.requiredApprovals);
    const deployed = await contract.waitForDeployment();

    return {
      deployed,
      address: await deployed.getAddress(),
    };
  };

  // 🔹 Function overloads
  static async generateWallet(
    wallet_details: IWallet | string,
    type: "forwarder"
  ): Promise<BscForwarderCryptoWallet>;

  static async generateWallet(
    wallet_details: IWallet | string,
    type: "payout"
  ): Promise<BscPayoutCryptoWallet>;

  static async generateWallet(
    wallet_details: IWallet | string,
    type: "forwarder" | "payout" = "forwarder"
  ): Promise<BscCryptoWallet> {
    try {
      if (typeof wallet_details !== "string") {
        return new BscCryptoWallet(wallet_details);
      }

      const merchant_address = wallet_details;
      const fee = BigInt(0.1 * 10 ** BSC_CONFIG.DECIMALS);

      if (type === "payout") {
        const contract = await this.payoutContract({ requiredApprovals: 3n });
        return new BscPayoutCryptoWallet({
          address: contract.address,
          type: type,
          blockchain: "BSC",
          merchant_address,
          developer_address: BSC_CONFIG.DEVELOPER_WALLET,
        } as IWallet);
      }

      const contract = await this.forwarderContract({ merchant_address, fee });
      return new BscForwarderCryptoWallet({
        address: contract.address,
        type: type,
        blockchain: "BSC",
        merchant_address,
        developer_address: BSC_CONFIG.DEVELOPER_WALLET,
      } as IWallet);
    } catch (err: any) {
      console.error("Wallet deployment failed:", err);
      throw new Error("Failed to deploy forwarder/payout contract");
    }
  }

  async getUSDTBalance(): Promise<IResponse<number>> {
    try {
      const [ balance, decimals ] = await Promise.all([
        usdtContract.balanceOf(this.wallet.address),
        usdtContract.decimals()
      ]);

      const formattedBalance = ethers.formatUnits(balance, decimals);
      return { status: true, data: Number(formattedBalance) };
    } catch (err: any) {
      console.error("Error getting BSC USDT balance:", err);
      return {
        status: false,
        message: `Failed to get BSC USDT balance: ${err.reason || err.message || 'Unknown error'}`
      };
    }
  }

  get getModel(): IWallet {
    return { ...this.wallet }
  }

  static get isActive(): Promise<boolean> {
    return (async () => {
      try {
        const network = await bscSigner.provider?.getNetwork();
        console.log('network', network?.chainId);
        if (process.env.ENV === 'production') {
          return network?.chainId === 56n;
        } else {
          return network?.chainId === 97n;
        }
      } catch (err: any) {
        console.error("Error getting BSC network:", err);
        return false;
      }
    })();
  }
}

export class BscForwarderCryptoWallet extends BscCryptoWallet implements IForwardCryptoWallet {
  constructor(wallet: IWallet) {
    super(wallet);
  }

  async confirmPayment(tx: ITransaction): Promise<IResponse<ITransaction>> {
    try {
      const balance = await this.getUSDTBalance();
      if (!balance.status) return { status: false, message: "unable to get BSC USDT Balance" };
      if (balance.data < tx.package.subscription_fee) return { status: false, message: "insufficient BSC USDT Balance" };

      const forwarder = new ethers.Contract(BSC_CONFIG.FORWARDER_CONTRACT, BSC_CONFIG.FORWARDER_ABI, bscSigner );
      const forwardTx = await forwarder.forward(BSC_CONFIG.USDT_CONTRACT);
      const receipt = await forwardTx.wait();
      tx.hash = receipt.transactionHash;
  
      return { status: true, data: tx };
    } catch (err: any) {
      return { status: false, message: err.message || "Failed to confirm payment by time" };
    }
  }

  async rescueToken(token: string, tx: ITransaction): Promise<IResponse<string>> {
    try {
      const forwarder = new ethers.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner );

      const rescueTx = await forwarder.rescueTokens(token, tx.user.address);
      const receipt = await rescueTx.wait();

      return { status: true, data: receipt.transactionHash };
    } catch (err: any) {
      console.error("Error rescuing tokens:", err);
      return { status: false, message: err?.message || "Failed to rescue tokens" };
    }
  }

  /**
   * Creates a new payment transaction with minimum amount and timeout.
   * @param minimumAmount The minimum amount required for this transaction (in USDT units)
   * @param timeout The timeout period in seconds for this transaction
   * @returns Transaction ID of the created payment
   */
  async createPayment(minimumAmount: number, timeout: number): Promise<IResponse<number>> {
    try {
      const forwarder = new ethers.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      
      // Convert minimum amount to proper units (USDT has 6 decimals)
      const minimumAmountWei = ethers.parseUnits(minimumAmount.toString(), BSC_CONFIG.DECIMALS);
      
      const createTx = await forwarder.createPayment(minimumAmountWei, timeout);
      const receipt = await createTx.wait();
      
      // Get the transaction ID from the event
      const event = receipt.logs.find((log: any) => {
        try {
          const parsed = forwarder.interface.parseLog(log);
          return parsed?.name === 'PaymentCreated';
        } catch {
          return false;
        }
      });
      
      if (event) {
        const parsed = forwarder.interface.parseLog(event);
        const transactionId = Number(parsed?.args.transactionId);
        return { status: true, data: transactionId };
      }
      
      return { status: false, message: "Failed to get transaction ID from event" };
    } catch (err: any) {
      console.error("Error creating payment:", err);
      return { status: false, message: err?.message || "Failed to create payment" };
    }
  }

  /**
   * Processes payment for the active transaction.
   * This should be called after tokens are transferred to the contract.
   * @param transactionId The ID of the transaction to process payment for
   * @returns Transaction hash of the processing transaction
   */
  async processPayment(transactionId: number): Promise<IResponse<string>> {
    try {
      const forwarder = new ethers.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      
      const processTx = await forwarder.processPayment(transactionId);
      const receipt = await processTx.wait();
      
      return { status: true, data: receipt.transactionHash };
    } catch (err: any) {
      console.error("Error processing payment:", err);
      return { status: false, message: err?.message || "Failed to process payment" };
    }
  }

  /**
   * Verifies the last transaction and checks if payment was made.
   * @returns Transaction verification details
   */
  async verifyTransaction(): Promise<IResponse<{
    transactionId: number;
    isCompleted: boolean;
    amount: number;
    minimumAmount: number;
    isExpired: boolean;
  }>> {
    try {
      const forwarder = new ethers.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      
      const result = await forwarder.verifyTransaction();
      
      return {
        status: true,
        data: {
          transactionId: Number(result.transactionId),
          isCompleted: result.isCompleted,
          amount: Number(ethers.formatUnits(result.amount, BSC_CONFIG.DECIMALS)),
          minimumAmount: Number(ethers.formatUnits(result.minimumAmount, BSC_CONFIG.DECIMALS)),
          isExpired: result.isExpired
        }
      };
    } catch (err: any) {
      console.error("Error verifying transaction:", err);
      return { status: false, message: err?.message || "Failed to verify transaction" };
    }
  }

  /**
   * Checks if the current active transaction can be processed.
   * @returns Payment processing status and details
   */
  async canProcessPayment(): Promise<IResponse<{
    canProcess: boolean;
    currentBalance: number;
    minimumRequired: number;
    isExpired: boolean;
  }>> {
    try {
      const forwarder = new ethers.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      
      const result = await forwarder.canProcessPayment();
      
      return {
        status: true,
        data: {
          canProcess: result.canProcess,
          currentBalance: Number(ethers.formatUnits(result.currentBalance, BSC_CONFIG.DECIMALS)),
          minimumRequired: Number(ethers.formatUnits(result.minimumRequired, BSC_CONFIG.DECIMALS)),
          isExpired: result.isExpired
        }
      };
    } catch (err: any) {
      console.error("Error checking payment status:", err);
      return { status: false, message: err?.message || "Failed to check payment status" };
    }
  }

  /**
   * Gets the current active transaction details.
   * @returns Active transaction details
   */
  async getActiveTransaction(): Promise<IResponse<{
    transactionId: number;
    minimumAmount: number;
    timeout: number;
    createdAt: number;
    isActive: boolean;
  }>> {
    try {
      const forwarder = new ethers.Contract(this.wallet.address, BSC_CONFIG.FORWARDER_ABI, bscSigner);
      
      const result = await forwarder.getActiveTransaction();
      
      return {
        status: true,
        data: {
          transactionId: Number(result.transactionId),
          minimumAmount: Number(ethers.formatUnits(result.minimumAmount, BSC_CONFIG.DECIMALS)),
          timeout: Number(result.timeout),
          createdAt: Number(result.createdAt),
          isActive: result.isActive
        }
      };
    } catch (err: any) {
      console.error("Error getting active transaction:", err);
      return { status: false, message: err?.message || "Failed to get active transaction" };
    }
  }
}

export class BscPayoutCryptoWallet extends BscCryptoWallet implements IPayoutCryptoWallet {
  constructor(wallet: IWallet) {
    super(wallet);
  }

  async addRecipient(address: string): Promise<IResponse<string>> {
    try {
      const payout = new ethers.Contract(this.wallet.address, BSC_CONFIG.PAYOUT_ABI, bscSigner );

      const addTx = await payout.addRecipient(address);
      const receipt = await addTx.wait();

      return { status: true, data: receipt.transactionHash };
    } catch (err: any) {
      console.error("Error adding recipient:", err);
      return { status: false, message: err?.message || "Failed to add recipient" };
    }
  }

  async removeRecipient(address: string): Promise<IResponse<string>> {
    try {
      const payout = new ethers.Contract(this.wallet.address, BSC_CONFIG.PAYOUT_ABI, bscSigner );

      const removeTx = await payout.removeRecipient(address);
      const receipt = await removeTx.wait();

      return { status: true, data: receipt.transactionHash };
    } catch (err: any) {
      console.error("Error removing recipient:", err);
      return { status: false, message: err?.message || "Failed to remove recipient" };
    }
  }

  async addPayoutRequest(address: string, amount: number): Promise<IResponse<string>> {
    try {
      const payout = new ethers.Contract(this.wallet.address, BSC_CONFIG.PAYOUT_ABI, bscSigner );

      const removeTx = await payout.addPayout(address, amount);
      const receipt = await removeTx.wait();

      return { status: true, data: receipt.transactionHash };
    } catch (err: any) {
      console.error("Error removing recipient:", err);
      return { status: false, message: err?.message || "Failed to remove recipient" };
    }
  }
}