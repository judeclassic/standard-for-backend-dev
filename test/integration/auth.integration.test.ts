import request from 'supertest';
import express from 'express';
import merchantRouter from '../../src/features/app/merchant/merchant.routes';

describe('Auth Integration Tests', () => {
  let app: express.Application;

  // Helper function to create mock data
  const createMockData = (overrides: any = {}) => {
    return {
      model: {
        merchant: {
          findOne: jest.fn(),
          create: jest.fn(),
          save: jest.fn(),
        },
        transactions: {
          findOne: jest.fn(),
          find: jest.fn(),
          create: jest.fn(),
          save: jest.fn(),
          update: jest.fn(),
          delete: jest.fn(),
        },
        accounts: {
          findOne: jest.fn(),
          find: jest.fn(),
          create: jest.fn(),
          save: jest.fn(),
          update: jest.fn(),
          increment: jest.fn(),
        },
        user_wallet: {
          findOne: jest.fn(),
          find: jest.fn(),
          create: jest.fn(),
          save: jest.fn(),
        },
        analytics: {
          findOne: jest.fn(),
          find: jest.fn(),
          create: jest.fn(),
          save: jest.fn(),
          update: jest.fn(),
        },
        dataSource: {
          transaction: jest.fn(),
        },
        ...overrides.model,
      },
      repo: {
        encryption: {
          comparePassword: jest.fn(),
          encryptPassword: jest.fn(),
          encryptToken: jest.fn(),
          verifyBearerToken: jest.fn(),
        },
        crypto: {
          getBlock: {
            bsc: { generateWallet: jest.fn() },
            ton: { generateWallet: jest.fn() },
          },
        },
        queue: {
          transaction: { add: jest.fn(), getJobs: jest.fn(), close: jest.fn() },
          webhook: { add: jest.fn(), getJobs: jest.fn(), close: jest.fn() },
        },
        socket: {
          getConnection: { emit: jest.fn(), on: jest.fn() },
        },
        notification: {
          queueNotification: jest.fn(),
        },
        file: {
          upload: jest.fn(),
          download: jest.fn(),
          delete: jest.fn(),
        },
        cache: {
          get: jest.fn(),
          set: jest.fn(),
          del: jest.fn(),
          exists: jest.fn(),
          expire: jest.fn(),
        },
        ...overrides.repo,
      },
      tools: {
        payment: {
          listenForTransaction: jest.fn(),
          cleanup: jest.fn(),
        },
        ...overrides.tools,
      },
    };
  };

  beforeEach(() => {
    // Create Express app
    app = express();
    app.use(express.json());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/merchant/auth/sign-up', () => {
    const validSignUpData = {
      first_name: 'John',
      second_name: 'Doe',
      email_address: 'test@example.com',
      password: 'password123',
    };

    it('should successfully register a new merchant', async () => {
      const mockCreatedMerchant = {
        id: 'merchant-id',
        personal: {
          first_name: 'John',
          email_address: 'test@example.com',
        },
      };

      // Create mock data with specific overrides
      const mockData = createMockData({
        model: {
          merchant: {
            findOne: jest.fn().mockResolvedValue(null),
            create: jest.fn().mockReturnValue({}),
            save: jest.fn().mockResolvedValue(mockCreatedMerchant),
          },
        },
        repo: {
          encryption: {
            encryptPassword: jest.fn().mockReturnValue('hashed-password'),
            encryptToken: jest.fn()
              .mockReturnValueOnce('access-token')
              .mockReturnValueOnce('refresh-token'),
          },
        },
      });

      // Create test app with mocked dependencies
      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/auth/sign-up')
        .send(validSignUpData)
        .expect(200);

      expect(response.body.status).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('access_token');
      expect(response.body.data).toHaveProperty('refresh_token');
    });

    it('should fail with missing required fields', async () => {
      const invalidData = {
        first_name: 'John',
        // Missing second_name, email_address, password
      };

      const response = await request(app)
        .post('/api/merchant/auth/sign-up')
        .send(invalidData)
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toBeDefined();
    });

    it('should fail when merchant already exists', async () => {
      const mockExistingMerchant = {
        id: 'existing-merchant-id',
        personal: {
          first_name: 'Existing',
          email_address: 'test@example.com',
        },
      };

      const mockData = createMockData({
        model: {
          merchant: {
            findOne: jest.fn().mockResolvedValue(mockExistingMerchant),
          },
        },
      });

      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/auth/sign-up')
        .send(validSignUpData)
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toEqual([
        { field: 'email_address', message: 'merchant already exists' }
      ]);
    });
  });

  describe('POST /api/merchant/auth/sign-in', () => {
    const validSignInData = {
      email_address: 'test@example.com',
      password: 'password123',
    };

    it('should successfully login with valid credentials', async () => {
      const mockMerchant = {
        id: 'merchant-id',
        password: 'hashed-password',
        personal: {
          first_name: 'John',
          email_address: 'test@example.com',
        },
      };

      const mockData = createMockData({
        model: {
          merchant: {
            findOne: jest.fn().mockResolvedValue(mockMerchant),
          },
        },
        repo: {
          encryption: {
            comparePassword: jest.fn().mockReturnValue(true),
            encryptToken: jest.fn()
              .mockReturnValueOnce('access-token')
              .mockReturnValueOnce('refresh-token'),
          },
        },
      });

      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/auth/sign-in')
        .send(validSignInData)
        .expect(200);

      expect(response.body.status).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('access_token');
      expect(response.body.data).toHaveProperty('refresh_token');
    });

    it('should fail with non-existent email', async () => {
      const mockData = createMockData({
        model: {
          merchant: {
            findOne: jest.fn().mockResolvedValue(null),
          },
        },
      });

      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/auth/sign-in')
        .send(validSignInData)
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toEqual([
        { field: 'password', message: 'invalid credentials' }
      ]);
    });

    it('should fail with incorrect password', async () => {
      const mockMerchant = {
        id: 'merchant-id',
        password: 'hashed-password',
        personal: {
          first_name: 'John',
          email_address: 'test@example.com',
        },
      };

      const mockData = createMockData({
        model: {
          merchant: {
            findOne: jest.fn().mockResolvedValue(mockMerchant),
          },
        },
        repo: {
          encryption: {
            comparePassword: jest.fn().mockReturnValue(false),
          },
        },
      });

      const testApp = express();
      testApp.use(express.json());
      testApp.use('/api/merchant', merchantRouter(mockData));

      const response = await request(testApp)
        .post('/api/merchant/auth/sign-in')
        .send(validSignInData)
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toEqual([
        { message: 'invalid credentials' }
      ]);
    });
  });

  describe('Request validation', () => {
    it('should validate request body structure', async () => {
      const response = await request(app)
        .post('/api/merchant/auth/sign-up')
        .send({})
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toBeDefined();
    });

    it('should validate required fields are not empty', async () => {
      const emptyData = {
        first_name: '',
        second_name: '',
        email_address: '',
        password: '',
      };

      const response = await request(app)
        .post('/api/merchant/auth/sign-up')
        .send(emptyData)
        .expect(400);

      expect(response.body.status).toBe(false);
      expect(response.body.error).toBeDefined();
    });
  });
});
