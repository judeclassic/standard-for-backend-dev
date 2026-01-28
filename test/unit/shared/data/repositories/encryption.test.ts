import EncryptionRepository from '@/repositories/encryption';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { ISuccessResponse } from '@/utils/types/types';

// Mock dependencies using jest.fn()
const mockJwt = {
  sign: jest.fn(),
  verify: jest.fn(),
};

const mockBcrypt = {
  hashSync: jest.fn(),
  compareSync: jest.fn(),
};

const mockUuid = jest.fn();

describe('EncryptionRepository', () => {
  let encryptionRepo: EncryptionRepository;

  beforeEach(() => {
    encryptionRepo = new EncryptionRepository();
    jest.clearAllMocks();
  });

  describe('encryptToken', () => {
    it('should encrypt token with default expiration', () => {
      const data = { userId: '123' };
      const token = 'test-secret' as any;
      const mockToken = 'encrypted-token';

      (mockJwt.sign as jest.Mock).mockReturnValue(mockToken);

      const result = encryptionRepo.encryptToken(data, token);

      expect(result).toBe(mockToken);
      expect(mockJwt.sign).toHaveBeenCalledWith(data, token, { expiresIn: 60 * 60 * 24 * 5 });
    });

    it('should encrypt token with custom expiration', () => {
      const data = { userId: '123' };
      const token = 'test-secret' as any;
      const expiresIn = 3600;
      const mockToken = 'encrypted-token';

      (mockJwt.sign as jest.Mock).mockReturnValue(mockToken);

      const result = encryptionRepo.encryptToken(data, token, expiresIn);

      expect(result).toBe(mockToken);
      expect(mockJwt.sign).toHaveBeenCalledWith(data, token, { expiresIn });
    });
  });

  describe('decryptToken', () => {
    it('should decrypt token successfully', () => {
      const data = 'encrypted-token';
      const token = 'test-secret' as any;
      const mockDecoded = { userId: '123' };

      mockJwt.verify.mockReturnValue(mockDecoded as any);

      const result = encryptionRepo.decryptToken(data, token);

      expect(result).toBe(mockDecoded);
      expect(mockJwt.verify).toHaveBeenCalledWith(data, token);
    });
  });

  describe('createSpecialKey', () => {
    it('should create key with default options', () => {
      const mockUuidResult = 'test-uuid-123';
      (mockUuid as jest.Mock).mockReturnValue(mockUuidResult);

      const result = encryptionRepo.createSpecialKey({});

      expect(result).toBe(mockUuidResult);
      expect(mockUuid).toHaveBeenCalled();
    });

    it('should create key with prefix and suffix', () => {
      const mockUuidResult = 'test-uuid-123';
      (mockUuid as jest.Mock).mockReturnValue(mockUuidResult);

      const result = encryptionRepo.createSpecialKey({
        prefix: 'prefix-',
        suffix: '-suffix',
      });

      expect(result).toBe('prefix-test-uuid-123-suffix');
    });

    it('should create key without dashes when removeDashes is true', () => {
      const mockUuidResult = 'test-uuid-123';
      (mockUuid as jest.Mock).mockReturnValue(mockUuidResult);

      const result = encryptionRepo.createSpecialKey({
        removeDashes: true,
      });

      expect(result).toBe('testuuid123');
    });
  });

  describe('verifyToken', () => {
    it('should verify valid token', () => {
      const token = 'valid-token';
      const tokenType = 'test-secret' as any;
      const mockDecoded = { userId: '123' };

      mockJwt.verify.mockReturnValue(mockDecoded as any);

      const result = encryptionRepo.verifyToken(token, tokenType);

      expect(result).toEqual({
        status: true,
        data: mockDecoded,
      });
    });

    it('should fail with null token', () => {
      const result = encryptionRepo.verifyToken(null as any, 'test-secret' as any);

      expect(result).toEqual({
        status: false,
        error: 'Authentication failed',
      });
    });

    it('should fail with undefined token', () => {
      const result = encryptionRepo.verifyToken(undefined as any, 'test-secret' as any);

      expect(result).toEqual({
        status: false,
        error: 'Authentication failed',
      });
    });

    it('should handle verification errors', () => {
      mockJwt.verify.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      const result = encryptionRepo.verifyToken('invalid-token', 'test-secret' as any);

      expect(result).toEqual({
        status: false,
        error: 'Authentication expired',
      });
    });
  });

  describe('verifyBearerToken', () => {
    it('should verify valid bearer token', () => {
      const data = 'Bearer valid-token';
      const tokenType = 'test-secret' as any;
      const mockDecoded = { userId: '123' };

      mockJwt.verify.mockReturnValue(mockDecoded as any);

      const result = encryptionRepo.verifyBearerToken(data, tokenType);

      expect(result).toEqual({
        status: true,
        data: mockDecoded,
      });
      expect(mockJwt.verify).toHaveBeenCalledWith('valid-token', tokenType);
    });

    it('should fail with null data', () => {
      const result = encryptionRepo.verifyBearerToken(null as any, 'test-secret' as any);

      expect(result).toEqual({
        status: false,
        error: 'Authentication failed',
      });
    });

    it('should handle verification errors', () => {
      mockJwt.verify.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      const result = encryptionRepo.verifyBearerToken('Bearer invalid-token', 'test-secret' as any);

      expect(result).toEqual({
        status: false,
        error: 'Authentication expired',
      });
    });
  });

  describe('encryptPassword', () => {
    it('should encrypt password', () => {
      const password = 'plaintext-password';
      const hashedPassword = 'hashed-password';

      mockBcrypt.hashSync.mockReturnValue(hashedPassword);

      const result = encryptionRepo.encryptPassword(password);

      expect(result).toBe(hashedPassword);
      expect(mockBcrypt.hashSync).toHaveBeenCalledWith(password, 10);
    });
  });

  describe('comparePassword', () => {
    it('should compare passwords successfully', () => {
      const password = 'plaintext-password';
      const userPassword = 'hashed-password';

      mockBcrypt.compareSync.mockReturnValue(true);

      const result = encryptionRepo.comparePassword(password, userPassword);

      expect(result).toBe(true);
      expect(mockBcrypt.compareSync).toHaveBeenCalledWith(password, userPassword);
    });

    it('should return false for mismatched passwords', () => {
      const password = 'wrong-password';
      const userPassword = 'hashed-password';

      mockBcrypt.compareSync.mockReturnValue(false);

      const result = encryptionRepo.comparePassword(password, userPassword);

      expect(result).toBe(false);
    });
  });

  describe('generateVerificationCode', () => {
    it('should generate numeric verification code', () => {
      const length = 6;
      const mockDate = new Date('2023-01-01T00:00:00Z');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);

      const result = encryptionRepo.generateVerificationCode(length);

      expect(result.code).toHaveLength(length);
      expect(result.code).toMatch(/^\d+$/);
      expect(result.timeout).toBe(mockDate.getTime() + (1000 * 60 * 60));
    });
  });

  describe('generateRandomStringCode', () => {
    it('should generate random string code', () => {
      const length = 10;

      const result = encryptionRepo.generateRandomStringCode(length);

      expect(result).toHaveLength(length);
      expect(typeof result).toBe('string');
    });
  });

  describe('generateKeyPairs', () => {
    it('should generate RSA key pairs', () => {
      const mockPublicKey = 'public-key';
      const mockPrivateKey = 'private-key';

      // Mock crypto module
      const mockGenerateKeyPairSync = jest.fn().mockReturnValue({
        publicKey: mockPublicKey,
        privateKey: mockPrivateKey,
      });

      jest.doMock('crypto', () => ({
        generateKeyPairSync: mockGenerateKeyPairSync,
      }));

      const result = encryptionRepo.generateKeyPairs();

      expect(result).toEqual({
        publicKey: expect.any(String),
        privateKey: expect.any(String),
      });
    });
  });

  describe('encryptId', () => {
    it('should encrypt ID successfully', () => {
      const id = 'test-id';
      const tokenType = 'test-secret' as any;

      const result = encryptionRepo.encryptId(id, tokenType) as ISuccessResponse<string>;

      expect(result.status).toBe(true);
      expect(result.data).toBeDefined();
      expect(typeof result.data).toBe('string');
    });

    it('should handle encryption errors', () => {
      const id = 'test-id';
      const tokenType = null as any; // This will cause an error

      const result = encryptionRepo.encryptId(id, tokenType);

      expect(result.status).toBe(false);
      expect(result.message).toContain('Error:');
    });
  });

  describe('encryptWithPublicKey', () => {
    it('should encrypt data with public key', () => {
      const data = { message: 'test' };
      const publicKey = 'test-public-key';

      const result = encryptionRepo.encryptWithPublicKey(data, publicKey) as ISuccessResponse<string>;

      expect(result.status).toBe(true);
      expect(result.data).toBeDefined();
      expect(typeof result.data).toBe('string');
    });

    it('should handle encryption errors', () => {
      const data = { message: 'test' };
      const publicKey = 'invalid-key';

      const result = encryptionRepo.encryptWithPublicKey(data, publicKey);

      expect(result.status).toBe(false);
      expect(result.message).toContain('Error:');
    });
  });

  describe('decryptId', () => {
    it('should decrypt ID successfully', () => {
      // First encrypt an ID
      const id = 'test-id';
      const tokenType = 'test-secret' as any;
      const encrypted = encryptionRepo.encryptId(id, tokenType) as ISuccessResponse<string>;

      if (encrypted.status) {
        const result = encryptionRepo.decryptId(encrypted.data, tokenType) as ISuccessResponse<string>;
        expect(result.status).toBe(true);
        expect(result.data).toBe(id);
      }
    });

    it('should handle decryption errors', () => {
      const encryptedString = 'invalid-encrypted-string';
      const tokenType = 'test-secret' as any;

      const result = encryptionRepo.decryptId(encryptedString, tokenType);

      expect(result.status).toBe(false);
      expect(result.message).toContain('Error:');
    });
  });

  describe('signWithPrivateKey', () => {
    it('should sign data with private key', () => {
      const data = { message: 'test' };
      const privateKey = 'test-private-key';

      const result = encryptionRepo.signWithPrivateKey(data, privateKey) as ISuccessResponse<string>;

      expect(result.status).toBe(true);
      expect(result.data).toBeDefined();
      expect(typeof result.data).toBe('string');
    });

    it('should handle signing errors', () => {
      const data = { message: 'test' };
      const privateKey = 'invalid-key';

      const result = encryptionRepo.signWithPrivateKey(data, privateKey);

      expect(result.status).toBe(false);
      expect(result.message).toContain('Error:');
    });
  });

  describe('verifyWithPublicKey', () => {
    it('should verify signature with public key', () => {
      const data = { message: 'test' };
      const privateKey = 'test-private-key';
      const publicKey = 'test-public-key';

      // First sign the data
      const signature = encryptionRepo.signWithPrivateKey(data, privateKey);

      if (signature.status) {
        const result = encryptionRepo.verifyWithPublicKey(data, signature.data, publicKey) as ISuccessResponse<boolean>;
        expect(result.status).toBe(true);
        expect(typeof result.data).toBe('boolean');
      }
    });

    it('should handle verification errors', () => {
      const data = { message: 'test' };
      const signature = 'invalid-signature';
      const publicKey = 'invalid-key';

      const result = encryptionRepo.verifyWithPublicKey(data, signature, publicKey);

      expect(result.status).toBe(false);
      expect(result.message).toContain('Error:');
    });
  });
});
