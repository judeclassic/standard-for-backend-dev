import { IAuthAPI, IPaginateResponse, IResponse } from '../../../shared/utils/types/types';
import { Repositories } from '@/repositories';
import { Models } from '@/models';
import { IGeneralTransaction, TransactionAction } from '@/models/transaction/type';
import { IPackageResponse, ISelectBlockchain, IVerifyTransaction } from './payment.types';
import { IWallet } from '@/models/wallet/type';
import { PayloadType } from '@/repositories/queue/data/webhook-retry';

class PaymentService {
  constructor(
    private readonly model: Models,
    private readonly repo: Repositories,
  ) { }

  async getOptions(account_id: string): Promise<IResponse<IPackageResponse>> {
    try {
      const account = await this.model.accounts.findOne({
        where: { id: account_id },
        relations: { wallets: { wallet: true } },
      });
      if (!account) return { status: false, message: 'Invalid account' };

      if (account.details.package_type === 'single') {
        const data: IPackageResponse = {
          package_type: 'single',
          blockchains: account.wallets.map(aw => aw.wallet.blockchain)
        }
        return { status: true, data };
      }

      const data: IPackageResponse = {
        package_type: 'multiple',
        packages: account.details.packages,
        blockchains: account.wallets.map(aw => aw.wallet.blockchain)
      }
      return { status: true, data };

    } catch (err) {
      console.log("err: ", err)
      return { status: false, message: 'Invalid account' };
    }
  }

  async getRecentTransaction(user_id: string, auth: IAuthAPI): Promise<IResponse<IPaginateResponse<IGeneralTransaction>>> {
    try {
      const transactions = await this.model.transactions.paginate({
        where: {
          user: { email: user_id },
          account: { account_id: auth.account_id },
          origin: 'payment',
          type: auth.type
        },
        options: { page: 1, limit: 3 }
      });
      if (!transactions) return { status: false, message: 'unable to get transactions' };

      return { status: true, data: transactions.map((transaction) => transaction.toGeneralResponse) };
    }
    catch (err) {
      console.log("err: ", err)
      return { status: false, message: 'unable to get transactions' };
    }
  }


  async processTransaction(user_id: string, auth: IAuthAPI, { package_name, blockchain }: ISelectBlockchain): Promise<IResponse<IGeneralTransaction>> {
    try {
      const accountWallet = await this.model.account_wallets.findOne({
        where: { account: { id: auth.account_id }, blockchain },
        relations: { account: true, wallet: true }
      });
      if (!accountWallet) return { status: false, message: 'this account do not exist' };

      if (accountWallet.account.details.package_type === 'multiple' && !package_name) {
        return { status: false, error: [{ field: 'package_name', message: 'please add package name' }] };
      }

      let userWallet = await this.model.user_wallet.findOne({
        where: { email: user_id, account: { id: auth.account_id } },
        relations: { account: true, wallet: true }
      });

      let isWalletApproved = false;
      let selectedWallet: string | IWallet;

      if (userWallet?.wallet && userWallet.wallet.merchant_address === accountWallet.master_wallet_address) {
        isWalletApproved = true;
        selectedWallet = userWallet.wallet;
      } else {
        selectedWallet = accountWallet.master_wallet_address;
      }

      const cryptoWallet = auth.type === 'production' ?
        await this.repo.crypto.getBlock[blockchain].generateWallet(selectedWallet, 'forwarder')
        :
        await this.repo.crypto.getSandboxBlock[blockchain].generateWallet(selectedWallet);

      if (!userWallet?.wallet || !isWalletApproved) {
        const toWallet = this.model.wallets.create(cryptoWallet.getModel);
        const wallet = await this.model.wallets.save(toWallet);

        const toUserWallet = this.model.user_wallet.create({
          email: user_id,
          account: accountWallet.account,
          wallet: wallet,
        });
        userWallet = await this.model.user_wallet.save(toUserWallet);
      }

      const selected_package = package_name && accountWallet.account.details.packages.find((p) => p.name === package_name);
      const toTransaction = this.model.transactions.create({
        user: {
          email: user_id,
          address: userWallet.wallet.address,
          user_wallet: userWallet,
          action: TransactionAction.SENDER,
        },
        account: {
          merchant_id: accountWallet.account.merchant_id,
          account_id: accountWallet.account.id,
          wallet_address: accountWallet.wallet.address,
          account_wallet: accountWallet,
          action: TransactionAction.RECEIVER,
        },
        type: auth.type,
        origin: 'payment',
        process_status: 'pending',
        blockchain: cryptoWallet.wallet.blockchain,
        package: selected_package ?? accountWallet.account.details.packages[0],
        status: 'pending',
        timeout: (1000 * 60 * 30),
      });
      const [tx] = await Promise.all([
        await this.model.transactions.save(toTransaction),
        await this.model.analytics.merchant.monthlyRecord(toTransaction, 'pending', auth.type),
      ]);
      tx.user.user_wallet = userWallet;
      this.repo.queue.transaction.queue.add(`tx-${tx.id}`, tx, {
        jobId: `tx-${tx.id}`,
        delay: 20_000,
        attempts: 30,
        backoff: {
          type: 'fixed',
          delay: 20_000,
        },
      });
      await this.repo.queue.webhook.queue.add(`webhook-${tx.id}`, {
        url: accountWallet.account.api_info.webhook_url,
        payload: {
          id: tx.id,
          type: PayloadType.PAYMENT_CREATED,
          payload: tx.toGeneralResponse,
          timestamp: new Date().toISOString(),
        },
        attempt: 0,
        secretKey: accountWallet.account.api_info.secret_key
      }, { jobId: `webhook-${tx.id}` });

      return { status: true, data: tx.toGeneralResponse };
    } catch (err) {
      console.error('transaction err: ', err);
      return { status: false, message: 'unable to process transaction' };
    }
  }
}

export default PaymentService;
