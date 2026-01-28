import { config } from 'dotenv';

// Load test environment variables
config({ path: '.env.test' });

// Test configuration
export const testConfig = {
  // Database configuration for testing
  database: {
    type: 'postgres',
    host: process.env.TEST_DB_HOST || 'localhost',
    port: parseInt(process.env.TEST_DB_PORT || '5432'),
    username: process.env.TEST_DB_USERNAME || 'test_user',
    password: process.env.TEST_DB_PASSWORD || 'test_password',
    database: process.env.TEST_DB_NAME || 'test_database',
    synchronize: true,
    dropSchema: true,
    logging: false,
  },

  // Redis configuration for testing
  redis: {
    host: process.env.TEST_REDIS_HOST || 'localhost',
    port: parseInt(process.env.TEST_REDIS_PORT || '6379'),
    password: process.env.TEST_REDIS_PASSWORD || '',
    db: parseInt(process.env.TEST_REDIS_DB || '1'),
  },

  // JWT secrets for testing
  jwt: {
    accessTokenSecret: process.env.TEST_ACCESS_TOKEN_SECRET || 'test-access-secret',
    refreshTokenSecret: process.env.TEST_REFRESH_TOKEN_SECRET || 'test-refresh-secret',
    adminAccessTokenSecret: process.env.TEST_ADMIN_ACCESS_TOKEN_SECRET || 'test-admin-secret',
    webTokenSecret: process.env.TEST_WEB_TOKEN_SECRET || 'test-web-secret',
    apiAccessToken: process.env.TEST_API_ACCESS_TOKEN || 'test-api-secret',
    apiSandboxAccessToken: process.env.TEST_API_SANDBOX_ACCESS_TOKEN || 'test-sandbox-secret',
    apiProductionAccessToken: process.env.TEST_API_PRODUCTION_ACCESS_TOKEN || 'test-production-secret',
  },

  // Blockchain configuration for testing
  blockchain: {
    bsc: {
      rpcUrl: process.env.TEST_BSC_RPC_URL || 'https://bsc-testnet.public.blastapi.io',
      chainId: parseInt(process.env.TEST_BSC_CHAIN_ID || '97'),
      privateKey: process.env.TEST_BSC_PRIVATE_KEY || 'test-private-key',
    },
    ton: {
      rpcUrl: process.env.TEST_TON_RPC_URL || 'https://testnet.toncenter.com/api/v2',
      apiKey: process.env.TEST_TON_API_KEY || 'test-api-key',
    },
  },

  // File storage configuration for testing
  storage: {
    type: process.env.TEST_STORAGE_TYPE || 'local',
    local: {
      uploadPath: process.env.TEST_UPLOAD_PATH || './test-uploads',
    },
    s3: {
      bucket: process.env.TEST_S3_BUCKET || 'test-bucket',
      region: process.env.TEST_S3_REGION || 'us-east-1',
      accessKeyId: process.env.TEST_S3_ACCESS_KEY_ID || 'test-access-key',
      secretAccessKey: process.env.TEST_S3_SECRET_ACCESS_KEY || 'test-secret-key',
    },
  },

  // Email configuration for testing
  email: {
    host: process.env.TEST_EMAIL_HOST || 'localhost',
    port: parseInt(process.env.TEST_EMAIL_PORT || '587'),
    secure: process.env.TEST_EMAIL_SECURE === 'true',
    auth: {
      user: process.env.TEST_EMAIL_USER || 'test@example.com',
      pass: process.env.TEST_EMAIL_PASS || 'test-password',
    },
  },

  // Webhook configuration for testing
  webhook: {
    timeout: parseInt(process.env.TEST_WEBHOOK_TIMEOUT || '5000'),
    retryAttempts: parseInt(process.env.TEST_WEBHOOK_RETRY_ATTEMPTS || '3'),
    retryDelay: parseInt(process.env.TEST_WEBHOOK_RETRY_DELAY || '1000'),
  },

  // Queue configuration for testing
  queue: {
    redis: {
      host: process.env.TEST_REDIS_HOST || 'localhost',
      port: parseInt(process.env.TEST_REDIS_PORT || '6379'),
      password: process.env.TEST_REDIS_PASSWORD || '',
      db: parseInt(process.env.TEST_REDIS_QUEUE_DB || '2'),
    },
    transaction: {
      maxAttempts: parseInt(process.env.TEST_TRANSACTION_MAX_ATTEMPTS || '3'),
      backoffDelay: parseInt(process.env.TEST_TRANSACTION_BACKOFF_DELAY || '1000'),
    },
    webhook: {
      maxAttempts: parseInt(process.env.TEST_WEBHOOK_MAX_ATTEMPTS || '3'),
      backoffDelay: parseInt(process.env.TEST_WEBHOOK_BACKOFF_DELAY || '1000'),
    },
  },

  // Test timeouts
  timeouts: {
    request: parseInt(process.env.TEST_REQUEST_TIMEOUT || '30000'),
    database: parseInt(process.env.TEST_DATABASE_TIMEOUT || '10000'),
    queue: parseInt(process.env.TEST_QUEUE_TIMEOUT || '5000'),
  },

  // Test data
  testData: {
    merchant: {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'testPassword123',
    },
    transaction: {
      amount: 100,
      blockchain: 'bsc',
      status: 'pending',
    },
    account: {
      name: 'Test Account',
      type: 'production',
    },
  },

  // Mock configurations
  mocks: {
    enableExternalCalls: process.env.TEST_ENABLE_EXTERNAL_CALLS === 'true',
    enableDatabaseWrites: process.env.TEST_ENABLE_DATABASE_WRITES === 'true',
    enableQueueProcessing: process.env.TEST_ENABLE_QUEUE_PROCESSING === 'true',
    enableEmailSending: process.env.TEST_ENABLE_EMAIL_SENDING === 'true',
    enableWebhookCalls: process.env.TEST_ENABLE_WEBHOOK_CALLS === 'true',
  },
};

export default testConfig;

