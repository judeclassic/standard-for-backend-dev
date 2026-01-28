export interface IMerchantMetrics {
  total_merchants: number;
  active_merchants: number;
  inactive_merchants: number;
  new_merchants_today: number;
  new_merchants_this_week: number;
  new_merchants_this_month: number;
  merchants_by_subscription: {
    basic: number;
    pro: number;
    enterprise: number;
  };
}

export interface IAccountMetrics {
  total_accounts: number;
  active_accounts: number;
  inactive_accounts: number;
  accounts_by_type: {
    subscription: number;
    one_time: number;
  };
  accounts_by_plan: {
    free: number;
    standard: number;
    continuous: number;
  };
  total_balance: number;
}

export interface ITransactionMetrics {
  // Overall metrics
  total_transactions: number;
  total_volume: number; // USD value
  success_rate: number; // percentage
  failed_rate: number; // percentage
  pending_rate: number; // percentage
  
  // By origin
  payment_transactions: number;
  payout_transactions: number;
  
  // By type
  production_transactions: number;
  sandbox_transactions: number;
  
  // By status
  successful_transactions: number;
  failed_transactions: number;
  pending_transactions: number;
  
  // By blockchain
  transactions_by_blockchain: Record<string, number>;
  
  // Time-based
  transactions_today: number;
  transactions_this_week: number;
  transactions_this_month: number;
  
  // Volume metrics
  total_revenue: number;
  revenue_today: number;
  revenue_this_week: number;
  revenue_this_month: number;
}

export interface ISubscriberMetrics {
  total_subscribers: number;
  new_subscribers_today: number;
  new_subscribers_this_week: number;
  new_subscribers_this_month: number;
  subscribers_by_account: Record<string, number>;
}

export interface ISDKMetrics {
  // Payment API metrics
  total_payment_requests: number;
  payment_requests_today: number;
  payment_requests_this_week: number;
  payment_requests_this_month: number;
  
  // Payout API metrics
  total_payout_requests: number;
  payout_requests_today: number;
  payout_requests_this_week: number;
  payout_requests_this_month: number;
  
  // Webhook metrics
  total_webhooks_sent: number;
  successful_webhooks: number;
  failed_webhooks: number;
  pending_webhooks: number;
  
  // API health
  api_uptime_percentage: number;
  average_response_time: number;
}

export interface ISystemMetrics {
  // Database metrics
  database_size: string;
  total_records: number;
  
  // Performance metrics
  cache_hit_rate: number;
  queue_size: number;
  active_jobs: number;
  failed_jobs: number;
}

export interface IAdminAnalytics {
  id: string;
  
  // Core metrics
  merchant_metrics: IMerchantMetrics;
  account_metrics: IAccountMetrics;
  transaction_metrics: ITransactionMetrics;
  subscriber_metrics: ISubscriberMetrics;
  sdk_metrics: ISDKMetrics;
  system_metrics: ISystemMetrics;
  
  // Time period
  period_type: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all-time';
  period_start: Date;
  period_end: Date;
  
  // Timestamps
  created_at: Date;
  updated_at: Date;
}

export interface IAdminAnalyticsResponse {
  merchant_metrics: IMerchantMetrics;
  account_metrics: IAccountMetrics;
  transaction_metrics: ITransactionMetrics;
  subscriber_metrics: ISubscriberMetrics;
  sdk_metrics: ISDKMetrics;
  system_metrics: ISystemMetrics;
  period_type: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all-time';
  period_start: Date;
  period_end: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IAdminAnalyticsQuery {
  period_type?: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all-time';
  start_date?: Date;
  end_date?: Date;
}

