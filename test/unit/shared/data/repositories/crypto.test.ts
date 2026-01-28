import { CryptoRepository } from '@/repositories/crypto';

// Mock blockchain implementations using jest.fn()
const mockBscCryptoWallet = jest.fn();
const mockTonCryptoWallet = jest.fn();
const mockSandBoxCryptoWallet = jest.fn();

describe('CryptoRepository', () => {
  let cryptoRepo: CryptoRepository;

  beforeEach(() => {
    cryptoRepo = new CryptoRepository();
  });

  describe('constructor', () => {
    it('should initialize with isListenerActive set to false', () => {
      expect(cryptoRepo.isListenerActive).toBe(false);
    });
  });

  describe('getBlock', () => {
    it('should return BSC and Ton blockchain implementations', () => {
      const block = cryptoRepo.getBlock;
      
      expect(block).toHaveProperty('BSC');
      expect(block).toHaveProperty('Ton');
    });

    it('should have BSC property', () => {
      expect(cryptoRepo.getBlock.BSC).toBeDefined();
    });

    it('should have Ton property', () => {
      expect(cryptoRepo.getBlock.Ton).toBeDefined();
    });
  });

  describe('getSandboxBlock', () => {
    it('should return sandbox blockchain implementations', () => {
      const sandboxBlock = cryptoRepo.getSandboxBlock;
      
      expect(sandboxBlock).toHaveProperty('BSC');
      expect(sandboxBlock).toHaveProperty('Ton');
    });

    it('should have BSC sandbox property', () => {
      expect(cryptoRepo.getSandboxBlock.BSC).toBeDefined();
    });

    it('should have Ton sandbox property', () => {
      expect(cryptoRepo.getSandboxBlock.Ton).toBeDefined();
    });
  });

  describe('isListenerActive property', () => {
    it('should be mutable', () => {
      cryptoRepo.isListenerActive = true;
      expect(cryptoRepo.isListenerActive).toBe(true);
      
      cryptoRepo.isListenerActive = false;
      expect(cryptoRepo.isListenerActive).toBe(false);
    });
  });
});
