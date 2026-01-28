import request from 'supertest';
import express from 'express';
import merchantRouter from '../../src/features/app/merchant/merchant.routes';

// Helper function to create complete mock data
const createMockData = (overrides: any = {}) => {
  const defaultModels = {
    dataSource: jest.fn(),
    admin: jest.fn(),
    merchant: jest.fn(),
    user: jest.fn(),
    account: jest.fn(),
    transaction: jest.fn(),
    wallet: jest.fn(),
    subscription: jest.fn(),
    webhook: jest.fn(),
    transactions: jest.fn(),
    accounts: jest.fn(),
    ...overrides.models
  };

  const defaultRepo = {
    encryption: {
      verifyBearerToken: jest.fn().mockReturnValue({
        status: true,
        data: { id: 'merchant-id' },
      }),
    },
    queue: {
      transaction: {
        add: jest.fn().mockResolvedValue({}),
      },
    },
    ...overrides.repo
  };

  return {
    model: defaultModels,
    repo: defaultRepo,
    tools: overrides.tools || {}
  };
};

describe('Transaction Integration Tests', () => {
  let app: express.Application;

  beforeEach(() => {
    // Create Express app
    app = express();
    app.use(express.json());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/merchant/transaction/create', () => {
    const transactionData = {
      to_account_id: 'account-id',
      package: {
        subscription_fee: 100,
      },
      blockchain: 'bsc',
    };

    it('should successfully create a new transaction', async () => {
      const mockAccount = {
        id: 'account-id',
        api_info: {
          public_key: 'public-key',
          webhook_url: 'https://webhook.url',
        },
      };

      const mockTransaction = {
        id: 'transaction-id',
        ...transactionData,
        status: 'pending',
        process_status: 'pending',
        created_at: new Date(),
      };

      const mockData = createMockData({
        models: {
          transactions: {
            create: jest.fn().mockReturnValue({}),
            save: jest.fn().mockResolvedValue(mockTransaction),
          },
          accounts: {
            findOne: jest.fn().mockResolvedValue(mockAccount),
          },
        }
      });

      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/transaction/create')
        .set('Authorization', 'Bearer valid-token')
        .send(transactionData)
        .expect(200);

      expect(response.body.status).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('status', 'pending');
    });

    it('should fail with invalid account', async () => {
      const mockData = createMockData({
        models: {
          transactions: {
            create: jest.fn(),
            save: jest.fn(),
          },
          accounts: {
            findOne: jest.fn().mockResolvedValue(null),
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/transaction/create')
        .set('Authorization', 'Bearer valid-token')
        .send(transactionData)
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.message).toContain('account');
    });

    it('should require valid authentication', async () => {
      const mockData = createMockData({
        repo: {
          encryption: {
            verifyBearerToken: jest.fn().mockReturnValue({
              status: false,
              error: 'Invalid token',
            }),
          },
          queue: {
            transaction: {
              add: jest.fn(),
            },
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/transaction/create')
        .set('Authorization', 'Bearer invalid-token')
        .send(transactionData)
        .expect(401);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toContain('Invalid token');
    });
  });

  describe('GET /api/merchant/transaction/list', () => {
    it('should retrieve transactions for authenticated user', async () => {
      const mockTransactions = [
        {
          id: 'tx-1',
          status: 'success',
          package: { subscription_fee: 100 },
          created_at: new Date(),
        },
        {
          id: 'tx-2',
          status: 'pending',
          package: { subscription_fee: 200 },
          created_at: new Date(),
        },
      ];

      const mockData = createMockData({
        models: {
          transactions: {
            find: jest.fn().mockResolvedValue(mockTransactions),
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .get('/api/merchant/transaction/list')
        .set('Authorization', 'Bearer valid-token')
        .expect(200);

      expect(response.body.status).toBe(true);
      expect(response.body.data).toHaveLength(2);
      expect(response.body.data[0]).toHaveProperty('id');
      expect(response.body.data[0]).toHaveProperty('status');
    });

    it('should return 401 without authentication', async () => {
      const mockData = createMockData({
        models: {
          transactions: {
            find: jest.fn(),
          },
        },
        repo: {
          encryption: {
            verifyBearerToken: jest.fn().mockReturnValue({
              status: false,
              error: 'Authentication required',
            }),
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .get('/api/merchant/transaction/list')
        .expect(401);

      expect(response.body.status).toBe(false);
      expect(response.body.message).toContain('Authentication');
    });
  });

  describe('GET /api/merchant/transaction/:id', () => {
    it('should retrieve specific transaction by ID', async () => {
      const mockTransaction = {
        id: 'tx-1',
        status: 'success',
        package: { subscription_fee: 100 },
        created_at: new Date(),
      };

      const mockData = createMockData({
        models: {
          transactions: {
            findOne: jest.fn().mockResolvedValue(mockTransaction),
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .get('/api/merchant/transaction/tx-1')
        .set('Authorization', 'Bearer valid-token')
        .expect(200);

      expect(response.body.status).toBe(true);
      expect(response.body.data).toHaveProperty('id', 'tx-1');
      expect(response.body.data).toHaveProperty('status', 'success');
    });

    it('should return 404 for non-existent transaction', async () => {
      const mockData = createMockData({
        models: {
          transactions: {
            findOne: jest.fn().mockResolvedValue(null),
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .get('/api/merchant/transaction/non-existent-id')
        .set('Authorization', 'Bearer valid-token')
        .expect(404);

      expect(response.body.status).toBe(false);
      expect(response.body.message).toContain('not found');
    });
  });

  describe('Error handling', () => {
    it('should handle database errors gracefully', async () => {
      const mockData = createMockData({
        models: {
          transactions: {
            find: jest.fn().mockRejectedValue(new Error('Database connection failed')),
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .get('/api/merchant/transaction/list')
        .set('Authorization', 'Bearer valid-token')
        .expect(500);

      expect(response.body.status).toBe(false);
      expect(response.body.message).toContain('Database connection failed');
    });

    it('should handle validation errors', async () => {
      const invalidData = {
        to_account_id: '',
        package: {
          subscription_fee: -100, // Invalid negative fee
        },
        blockchain: '',
      };

      const mockData = createMockData({
        models: {
          transactions: {
            create: jest.fn(),
            save: jest.fn(),
          },
          accounts: {
            findOne: jest.fn(),
          },
        }
      });
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/transaction/create')
        .set('Authorization', 'Bearer valid-token')
        .send(invalidData)
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toBeDefined();
    });
  });
});

