import { IPaymentAccount } from "@/models/account/types";
import { IAccountTransaction, ITransaction, IUserTransaction, TransactionAction } from "@/models/transaction/type";

export const mockedToken = {
  accessToken: process.env.ACCESS_TOKEN_SECRET || 'test-access-secret-key-for-testing-only',
  refreshToken: process.env.REFRESH_TOKEN_SECRET || 'test-refresh-secret-key-for-testing-only',
  adminAccessToken: process.env.ADMIN_ACCESS_TOKEN_SECRET || 'test-admin-secret-key-for-testing-only',
  webToken: process.env.WEB_TOKEN_SECRET || 'test-web-secret-key-for-testing-only',
  apiAccessToken: process.env.API_ACCESS_TOKEN || 'test-api-secret-key-for-testing-only',
  apiSandboxAccessToken: process.env.API_SANDBOX_ACCESS_TOKEN || 'test-sandbox-secret-key-for-testing-only',
  apiProductionAccessToken: process.env.API_PRODUCTION_ACCESS_TOKEN || 'test-production-secret-key-for-testing-only',
};

export const mockedPaymentAccount: IPaymentAccount = {
  id: "",
  name: "",
  description: "",
  merchant: {
    id: "",
    personal: {
      first_name: "",
      surname: "",
      email_address: "",
      profile_image: undefined,
      dob: undefined,
      language: undefined,
      display_email: undefined,
      emails: undefined,
      bio: undefined
    },
    password: "",
    updated_at: new Date(),
    created_at: new Date(),
    verification: {
      code: '',
      timeout: new Date()
    },
    setting: {
      custom_setting: {
        default_theme: "",
        is_accepting_request: false
      },
      subscription: {
        package: "Pro",
        status: "",
        start_date: new Date(),
        end_date: new Date()
      },
      accounts: [],
      notification: {
        mobile: false,
        communication_emails: false,
        marketing_emails: false,
        social_emails: false,
        security_emails: false
      }
    }
  },
  analytics: [],
  wallets: [],
  api_info: {
    access_token: "",
    public_key: "",
    secret_key: "",
    webhook_url: ""
  },
  sandbox_info: {
    access_token: "",
    public_key: "",
    secret_key: "",
    webhook_url: ""
  },
  details: {
    account_type: "subscription",
    package_type: "single",
    interval: "daily",
    packages: [],
    duration: undefined
  },
  total_balance: 0,
  settings: {
    plan: "free",
    balance: 0,
    subscription_status: "",
    subscription_date: new Date(),
    subscription_expiry_date: new Date()
  }
};

export const mockedAccountTransaction: IAccountTransaction = {
  account_id: '',
  merchant_id: '',
  wallet_address: '',
  account_wallet: {
    id: '',
    blockchain: 'BSC',
    master_wallet_address: '',
    balance: 0,
    wallet: {
      id: '',
      address: '',
      blockchain: 'BSC',
      type: 'payout',
      merchant_address: '',
      developer_address: ''
    },
    account: mockedPaymentAccount
  },
  action: TransactionAction.SENDER
}

export const mockedUserTransaction: IUserTransaction = {
  email: '',
  address: '',
  user_wallet: {
    id: '',
    email: '',
    account_id: '',
    type: 'production',
    wallet: {
      id: '',
      address: '',
      blockchain: 'BSC',
      type: 'forwarder',
      merchant_address: '',
      developer_address: ''
    },
    account: mockedPaymentAccount,
    created_at: new Date(),
    updated_at: new Date()
  },
  action: TransactionAction.SENDER
}

export const mockedTransaction: ITransaction = {
  id: '',
  account: mockedAccountTransaction,
  user: mockedUserTransaction,
  blockchain: 'BSC',
  origin: 'payment',
  package: {
    name: 'basic',
    description: '',
    subscription_fee: 0
  },
  status: 'pending',
  type: 'production',
  process_status: 'pending',
  timeout: 0,
  created_at: new Date(),
  updated_at: new Date()
}