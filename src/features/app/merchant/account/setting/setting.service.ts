import { IAuthUser, IResponse } from '@/utils/types/types';
import { Repositories } from '@/repositories';
import { Models } from '@/models';
import { ISecurePaymentAccount } from '@/models/account/types';
import { Token } from '@/repositories/encryption';
import { IBlockchainType } from '@/models/wallet/type';
import { UpdateAccountDTO, UpdateAccountWalletDTO } from './setting.types';

class SettingService {
  constructor(
    private readonly repo: Repositories,
    private readonly model: Models,
  ) {}

  updateAccount = async (
    auth: IAuthUser,
    account_id: string,
    update: UpdateAccountDTO
  ): Promise<IResponse<ISecurePaymentAccount>> => {
    try {
      const account = await this.model.accounts.findOne({
        where: { id: account_id, merchant_id: auth.id },
      });
  
      if (!account) {
        return { status: false, error: [{ message: 'Account not found' }] };
      }
  
      account.name = update.name;
      account.description = update.description;
      account.details.account_type = update.account_type;
      account.details.package_type = update.package_type;
      account.details.interval = update.interval;
      account.details.packages = update.packages.map(pkg => ({
        name: pkg.name,
        description: pkg.description,
        subscription_fee: pkg.amount,
      }));
      account.details.duration = update.duration;
      account.updated_at = new Date();
  
      await this.model.accounts.save(account);
  
      return {
        status: true,
        data: account.toResponse,
        message: 'Account updated successfully',
      };
    } catch (error) {
      console.error('Error updating account:', error);
      return {
        status: false,
        message: 'Failed to update account',
        error: [{ message: 'Failed to update account' }],
      };
    }
  };

  updateAccountWallet = async (
    auth: IAuthUser,
    account_id: string,
    update: UpdateAccountWalletDTO
  ): Promise<IResponse<ISecurePaymentAccount>> => {
    try {
      const decrypted = this.repo.encryption.verifyToken(update.token, Token.webToken);
      if (!decrypted.status || decrypted.data.id !== auth.id) {
        return { status: false, error: [{ message: 'Invalid or unauthorized token' }] };
      }
  
      const account = await this.model.accounts.findOne({
        where: { id: account_id, merchant_id: auth.id },
        relations: ['wallets', 'wallets.wallet'],
      });
  
      if (!account) {
        return { status: false, error: [{ message: 'Account not found' }] };
      }
  
      // Remove old account-wallets
      await Promise.all(
        account.wallets.map(async (aw) => {
          await this.model.account_wallets.delete({ id: aw.id });
          await this.model.wallets.delete({ id: aw.wallet.id });
        })
      );
  
      // Create new wallets
      const newWallets = await Promise.all(
        Object.entries(update.wallet_addresses).map(async ([blockchain, address]) => {
          const newWallet = await this.repo.crypto.getBlock[blockchain as IBlockchainType].generateWallet(address, 'payout');
          const savedWallet = await this.model.wallets.save(this.model.wallets.create(newWallet.getModel));
          return savedWallet;
        })
      );
  
      const accountWallets = await Promise.all(
        newWallets.map((wallet, index) => {
          const blockchain = update.supported_chains[index];
          return this.model.account_wallets.save(
            this.model.account_wallets.create({
              account,
              wallet,
              blockchain,
              master_wallet_address: update.wallet_addresses[blockchain],
            })
          );
        })
      );
  
      account.wallets = accountWallets;
      account.api_info.webhook_url = update.webhook_url ?? account.api_info.webhook_url;
      account.sandbox_info.webhook_url = update.webhook_url ?? account.sandbox_info.webhook_url;
  
      await this.model.accounts.save(account);
  
      return {
        status: true,
        data: account.toFirstResponse,
        message: 'Account wallets updated successfully',
      };
    } catch (error) {
      console.error('Error updating account wallets:', error);
      return {
        status: false,
        message: 'Failed to update account wallets',
        error: [{ message: 'Failed to update account wallets' }],
      };
    }
  };  
}

export default SettingService;
