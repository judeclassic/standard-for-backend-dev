import { IAuthUser, IResponse } from '@/utils/types/types';
import { CreateAccountDTO, GetAccountParams } from './onboard.types';
import { Repositories } from '@/repositories';
import { Models } from '@/models';
import { ISecurePaymentAccount } from '@/models/account/types';
import { Token } from '@/repositories/encryption';
import { IBlockchainType } from '@/models/wallet/type';

class OnboardService {
  constructor(
    private readonly repo: Repositories,
    private readonly model: Models,
  ) {}

  getAccount = async ( auth: IAuthUser, request: GetAccountParams ): Promise<IResponse<ISecurePaymentAccount>> => {
    try {
      const existingAccount = await this.model.accounts
        .createQueryBuilder('account')
        .leftJoinAndSelect('account.analytics', 'analytics')
        .leftJoinAndSelect('account.wallets', 'account_wallet')
        .leftJoinAndSelect('account_wallet.wallet', 'wallet')
        .where('account.id = :account_id', { account_id: request.account_id })
        .andWhere('account.merchant_id = :merchant_id', { merchant_id: auth.id })
        .orderBy('analytics.created_at', 'DESC')
        .limit(6)
        .getOne();

      if (!existingAccount) return { status: false, message: 'Account does not exist' };

      return { status: true, data: existingAccount.toResponse };
    } catch (error) {
      console.error('Error getting account: ', error);
      return {
        status: false, 
        message: 'Failed to get account',
      };
    }
  };

  createAccount = async ( auth: IAuthUser, request: CreateAccountDTO ): Promise<IResponse<ISecurePaymentAccount>> => {
    try {
      // Security: Removed sensitive data logging
      const balances = await Promise.all(Object.entries(request.wallet_addresses).map(
        (blockchain) => this.repo.crypto.getBlock[blockchain[0] as IBlockchainType].getUSDTBalance(blockchain[1])));
      
      for (let balance of balances) {
        if (!balance.status) return balance;
      }
        
      const cryptoWallets = await Promise.all(Object.entries(request.wallet_addresses).map(
        ([blockchain, address]) => this.repo.crypto.getBlock[blockchain as IBlockchainType].generateWallet(address, "payout")));

      const merchant = await this.model.merchant.findOne({
        where: { id: auth.id },
        relations: { setting: { accounts: true } },
      });

      if (!merchant) return { status: false, error: [{ message: 'User not found' }] };

      const sandboxApiKey = this.repo.encryption.generateKeyPairs();
      const apiKey = this.repo.encryption.generateKeyPairs();

      const subscription_expiry_date = 
        request.plan !== "free" ?
        new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) : new Date();

      const toAccount = this.model.accounts.create({
        name: merchant.setting.accounts?.length < 1 ? 'personal' : request.name.toLowerCase(),
        description: request.description,
        merchant_id: merchant.id,
        merchant: merchant,
        api_info: {
          webhook_url: request.webhook_url,
          access_token: '',
          public_key: apiKey.publicKey,
          secret_key: apiKey.privateKey
        },
        sandbox_info: {
          webhook_url: request.webhook_url,
          access_token: '',
          public_key: sandboxApiKey.publicKey,
          secret_key: sandboxApiKey.privateKey
        },
        total_balance: 0,
        analytics: [],
        wallets: [],
        details: {
          package_type: request.package_type,
          account_type: request.account_type,
          interval: request.interval,
          packages: request.packages.map((pkg) => ({
            name: pkg.name,
            description: pkg.description,
            subscription_fee: pkg.amount,
          })),
          duration: request.duration,
        },
        settings: {
          plan:  request.plan ?? 'free',
          balance: 0,
          subscription_status: 'inactive',
          subscription_date: new Date(),
          subscription_expiry_date,
        },
      });
      const account = await this.model.accounts.save(toAccount);

      const wallets = await Promise.all(
        cryptoWallets.map((cryptoWallet) => {
          const toWallet = this.model.wallets.create(cryptoWallet.getModel);
          return this.model.wallets.save(toWallet);
        })
      );

      const accountWallets = await Promise.all(
        wallets.map((wallet, index) => {
          const toAccountWallet = this.model.account_wallets.create({
            wallet,
            account,
            blockchain: request.supported_chains[index],
            master_wallet_address: request.wallet_addresses[request.supported_chains[index]]
          });
          return this.model.account_wallets.save(toAccountWallet);
        })
      );
  
      account.wallets.push(...accountWallets);

      const accessToken = this.repo.encryption.encryptId(JSON.stringify({ account_id: account.id, type: 'production'}), Token.apiProductionAccessToken);
      if (!accessToken.status) return accessToken;
      const sandboxAccessToken = this.repo.encryption.encryptId(JSON.stringify({account_id: account.id, type: 'sandbox'}), Token.apiSandboxAccessToken);
      if (!sandboxAccessToken.status) return sandboxAccessToken;
      
      account.api_info.access_token = accessToken.data;
      account.sandbox_info.access_token = sandboxAccessToken.data;

      merchant.setting.accounts.push(account);
      await Promise.all([
        this.model.merchant.save(merchant),
        this.model.accounts.save(account),
      ]);

      return {
        status: true,
        data: account.toFirstResponse,
        message: 'Account created successfully',
      };
    } catch (error) {
      console.error('Error creating account:', error);
      return {
        status: false,
        message: 'Failed to create account',
        error: [{ message: 'Failed to create account' }],
      };
    }
  };
}

export default OnboardService;
