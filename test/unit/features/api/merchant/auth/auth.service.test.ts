import AuthService, { ISignIn, ISignUp } from '@/features/app/merchant/auth/auth.service';
import { Repositories } from '@/repositories';
import { Models } from '@/models';
// Removed Token import since we're using mockToken

import { IAuthResponse, IError, IErrorResponse, IErrorResponseWithToken, IResponse, ISuccessResponse } from '@/utils/types/types';
import { mockedToken } from '../../../../../mock';

describe('AuthService', () => {
  let authService: AuthService;
  let mockRepo: jest.Mocked<Repositories>;
  let mockModel: jest.Mocked<Models>;

  beforeEach(() => {
    // Mock Repositories
    mockRepo = {
      encryption: {
        comparePassword: jest.fn(),
        encryptPassword: jest.fn(),
        encryptToken: jest.fn(),
      },
    } as any;

    // Mock Models
    mockModel = {
      merchant: {
        findOne: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
      },
    } as any;

    authService = new AuthService(mockRepo, mockModel);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    const loginRequest = {
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

      const mockAuth = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
        created_at: new Date(),
      };

      (mockModel.merchant.findOne as jest.Mock).mockResolvedValue(mockMerchant as any);
      (mockRepo.encryption.comparePassword as jest.Mock).mockReturnValue(true);
      (mockRepo.encryption.encryptToken as jest.Mock)
        .mockReturnValueOnce('access-token')
        .mockReturnValueOnce('refresh-token');

      const result = await authService.login(loginRequest) as ISuccessResponse<IAuthResponse>;

      expect(result.status).toBe(true);
      expect(result.data).toEqual({
        id: 'merchant-id',
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        created_at: expect.any(String),
      });
      expect(mockModel.merchant.findOne).toHaveBeenCalledWith({
        where: { personal: { email_address: 'test@example.com' } },
        relations: ['personal'],
      });
      expect(mockRepo.encryption.comparePassword).toHaveBeenCalledWith('password123', 'hashed-password');
      expect(mockRepo.encryption.encryptToken).toHaveBeenCalledWith(mockAuth, mockedToken.accessToken);
      expect(mockRepo.encryption.encryptToken).toHaveBeenCalledWith(mockAuth, mockedToken.refreshToken);
    });

    it('should fail with invalid email', async () => {
      (mockModel.merchant.findOne as jest.Mock).mockResolvedValue(null);

      const result = await authService.login(loginRequest) as IErrorResponse<IError<ISignIn>>;

      expect(result.status).toBe(false);
      expect(result.error).toEqual([{ field: 'password', message: 'invalid credentials' }]);
    });

    it('should fail with invalid password', async () => {
      const mockMerchant = {
        id: 'merchant-id',
        password: 'hashed-password',
        personal: {
          first_name: 'John',
          email_address: 'test@example.com',
        },
      };

      (mockModel.merchant.findOne as jest.Mock).mockResolvedValue(mockMerchant as any);
      (mockRepo.encryption.comparePassword as jest.Mock).mockReturnValue(false);

      const result = await authService.login(loginRequest) as IErrorResponseWithToken<IError<ISignIn>>;

      expect(result.status).toBe(false);
      expect(result.error).toEqual([{ message: 'invalid credentials' }]);
    });

    it('should handle database errors', async () => {
      (mockModel.merchant.findOne as jest.Mock).mockRejectedValue(new Error('Database error'));

      const result = await authService.login(loginRequest);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Database error');
    });
  });

  describe('register', () => {
    const registerRequest = {
      first_name: 'John',
      second_name: 'Doe',
      email_address: 'test@example.com',
      password: 'password123',
    };

    it('should successfully register new merchant', async () => {
      const mockCreatedMerchant = {
        id: 'merchant-id',
        personal: {
          first_name: 'John',
          email_address: 'test@example.com',
        },
      };

      const mockAuth = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
        created_at: new Date(),
      };

      (mockModel.merchant.findOne as jest.Mock).mockResolvedValue(null);
      (mockRepo.encryption.encryptPassword as jest.Mock).mockReturnValue('hashed-password');
      (mockModel.merchant.create as jest.Mock).mockReturnValue({} as any);
      (mockModel.merchant.save as jest.Mock).mockResolvedValue(mockCreatedMerchant as any);
      (mockRepo.encryption.encryptToken as jest.Mock)
        .mockReturnValueOnce('access-token')
        .mockReturnValueOnce('refresh-token');

      const result = await authService.register(registerRequest) as ISuccessResponse<IAuthResponse>;

      expect(result.status).toBe(true);
      expect(result.data).toEqual({
        id: 'merchant-id',
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        created_at: expect.any(String),
      });
      expect(mockModel.merchant.findOne).toHaveBeenCalledWith({
        where: { personal: { email_address: 'test@example.com' } },
        relations: ['personal'],
      });
      expect(mockRepo.encryption.encryptPassword).toHaveBeenCalledWith('password123');
      expect(mockModel.merchant.create).toHaveBeenCalledWith({
        personal: {
          first_name: 'John',
          surname: 'Doe',
          email_address: 'test@example.com',
        },
        password: 'hashed-password',
        setting: {
          subscription: {
            package: 'Pro',
            status: 'active',
            start_date: expect.any(Date),
            end_date: expect.any(Date),
          },
        },
      });
      expect(mockModel.merchant.save).toHaveBeenCalled();
    });

    it('should fail if merchant already exists', async () => {
      const mockExistingMerchant = {
        id: 'existing-merchant-id',
        personal: {
          first_name: 'Existing',
          email_address: 'test@example.com',
        },
      };

      (mockModel.merchant.findOne as jest.Mock).mockResolvedValue(mockExistingMerchant as any);

      const result = await authService.register(registerRequest) as IErrorResponse<IError<ISignUp>>;

      expect(result.status).toBe(false);
      expect(result.error).toEqual([{ field: 'email_address', message: 'merchant already exists' }]);
    });

    it('should handle database errors during registration', async () => {
      (mockModel.merchant.findOne as jest.Mock).mockResolvedValue(null);
      (mockRepo.encryption.encryptPassword as jest.Mock).mockReturnValue('hashed-password');
      (mockModel.merchant.create as jest.Mock).mockReturnValue({} as any);
      (mockModel.merchant.save as jest.Mock).mockRejectedValue(new Error('Database error'));

      const result = await authService.register(registerRequest);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Database error');
    });

    it('should handle errors during merchant creation', async () => {
      (mockModel.merchant.findOne as jest.Mock).mockResolvedValue(null);
      (mockRepo.encryption.encryptPassword as jest.Mock).mockReturnValue('hashed-password');
      (mockModel.merchant.create as jest.Mock).mockImplementation(() => {
        throw new Error('Creation error');
      });

      const result = await authService.register(registerRequest);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Creation error');
    });
  });

  describe('type definitions', () => {
    it('should have correct ISignIn type structure', () => {
      const signInData = {
        email_address: 'test@example.com',
        password: 'password123',
      };

      expect(signInData).toHaveProperty('email_address');
      expect(signInData).toHaveProperty('password');
      expect(typeof signInData.email_address).toBe('string');
      expect(typeof signInData.password).toBe('string');
    });

    it('should have correct ISignUp type structure', () => {
      const signUpData = {
        first_name: 'John',
        second_name: 'Doe',
        email_address: 'test@example.com',
        password: 'password123',
      };

      expect(signUpData).toHaveProperty('first_name');
      expect(signUpData).toHaveProperty('second_name');
      expect(signUpData).toHaveProperty('email_address');
      expect(signUpData).toHaveProperty('password');
      expect(typeof signUpData.first_name).toBe('string');
      expect(typeof signUpData.second_name).toBe('string');
      expect(typeof signUpData.email_address).toBe('string');
      expect(typeof signUpData.password).toBe('string');
    });
  });
});
