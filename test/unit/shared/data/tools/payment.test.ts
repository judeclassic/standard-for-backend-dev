import { PaymentTools } from '../../../../../src/shared/data/tools/payment';
import { Models } from '../../../../../src/shared/data/models';
import { Repositories } from '../../../../../src/shared/data/repositories';
import { ITransaction } from '../../../../../src/shared/data/models/transaction/type';
import { withTimeout } from '../../../../../src/shared/utils/helpers/helper';
import { mockedTransaction } from '../../../../mock';

const mockWithTimeout = withTimeout as jest.MockedFunction<typeof withTimeout>;

describe('PaymentTools', () => {
  let paymentTools: PaymentTools;
  let mockModels: jest.Mocked<Models>;
  let mockRepo: jest.Mocked<Repositories>;

  const mockTransaction: ITransaction = mockedTransaction;

  beforeEach(() => {
    // Mock Models
    mockModels = {
      transactions: {
        update: jest.fn(),
      },
      accounts: {
        increment: jest.fn(),
      },
      dataSource: {
        transaction: jest.fn(),
      },
    } as any;

    // Mock Repositories
    mockRepo = {
      crypto: {
        getBlock: {
          bsc: {
            generateWallet: jest.fn(),
          },
        },
      },
      encryption: {
        encryptWithPublicKey: jest.fn(),
      },
      socket: {
        getConnection: {
          emit: jest.fn(),
        },
      },
      notification: {
        queueNotification: jest.fn(),
      },
      queue: {
        transaction: {
          createWorker: jest.fn(),
        },
      },
    } as any;

    paymentTools = new PaymentTools(mockModels, mockRepo);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('processTransaction', () => {
    it('should successfully process a valid transaction', async () => {
      const mockTransaction: ITransaction = mockedTransaction;

      const mockWalletInstance = {
        confirmPayment: jest.fn(),
      };

      // Fix: Use correct casing for 'bsc' instead of 'BSC' to match the property in getBlock
      (mockRepo.crypto.getBlock.BSC.generateWallet as jest.Mock).mockResolvedValue(mockWalletInstance);
      (mockWithTimeout as jest.Mock).mockResolvedValue({ status: true, data: mockTransaction });

      const result = await (paymentTools as any).processTransaction(mockTransaction);

      expect(result.status).toBe(true);
      expect(result.data).toBe(mockTransaction);
      expect(mockRepo.crypto.getBlock.BSC.generateWallet).toHaveBeenCalledWith('0x123', 'forwarder');
      expect(mockWithTimeout).toHaveBeenCalledWith(
        mockWalletInstance.confirmPayment(mockTransaction),
        15000
      );
    });

    it('should fail with invalid transaction data', async () => {
      const invalidTransaction = {
        id: '',
        from: null,
      } as any;

      const result = await (paymentTools as any).processTransaction(invalidTransaction);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Invalid transaction data');
    });

    it('should fail with unsupported blockchain', async () => {
      const result = await (paymentTools as any).processTransaction(mockTransaction);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Unsupported blockchain: unsupported');
    });

    it('should handle wallet generation failure', async () => {
      // Simulate wallet generation failure by making generateWallet reject
      (mockRepo.crypto.getBlock.BSC.generateWallet as jest.Mock).mockRejectedValue(new Error('Failed to generate wallet'));

      const result = await (paymentTools as any).processTransaction(mockTransaction);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Failed to generate wallet');
    });

    it('should handle payment confirmation failure', async () => {

      const mockWalletInstance = {
        confirmPayment: jest.fn(),
      };

      (mockRepo.crypto.getBlock.BSC.generateWallet as jest.Mock).mockResolvedValue(mockWalletInstance);
      (mockWithTimeout as jest.Mock).mockResolvedValue({ status: false, message: 'Payment failed' });

      const result = await (paymentTools as any).processTransaction(mockTransaction);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Payment failed');
    });
  });

  describe('completeTransaction', () => {
    it('should successfully complete a transaction', async () => {
      const mockTransaction: ITransaction = mockedTransaction;

      (mockModels.transactions.update as jest.Mock).mockResolvedValue(mockTransaction);
      (mockRepo.encryption.encryptWithPublicKey as jest.Mock).mockResolvedValue({
        status: true,
        data: 'encrypted-data',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      (mockModels.accounts.increment as jest.Mock).mockResolvedValue({} as any);

      const result = await (paymentTools as any).completeTransaction(mockTransaction);

      expect(result.status).toBe(true);
      expect(result.data).toBe(mockTransaction);
      expect(mockModels.transactions.update).toHaveBeenCalledWith('test-tx-id', {
        status: 'success',
        completed_at: expect.any(Date),
      });
      expect(mockRepo.encryption.encryptWithPublicKey).toHaveBeenCalledWith(
        mockTransaction,
        'public-key'
      );
    });

    it('should fail with invalid transaction data', async () => {
      const invalidTransaction = {
        id: '',
        to: null,
      } as any;

      const result = await (paymentTools as any).completeTransaction(invalidTransaction);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Invalid transaction data for completion');
    });

    it('should fail with invalid account data', async () => {
      const mockTransaction: ITransaction = mockedTransaction;

      const result = await (paymentTools as any).completeTransaction(mockTransaction);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Invalid account data');
    });

    it('should handle encryption failure', async () => {
      const mockTransaction: ITransaction = mockedTransaction;
      mockTransaction.account.account_wallet.account.api_info = {
        public_key: 'public-key',
        webhook_url: 'https://webhook.url',
        access_token: '',
        secret_key: '',
      };

      (mockModels.transactions.update as jest.Mock).mockResolvedValue(mockTransaction);
      (mockRepo.encryption.encryptWithPublicKey as jest.Mock).mockResolvedValue({
        status: false,
        message: 'Encryption failed',
      });

      const result = await (paymentTools as any).completeTransaction(mockTransaction);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Encryption failed');
    });
  });

  describe('failTransaction', () => {
    it('should successfully mark transaction as failed', async () => {
      const mockTransaction: ITransaction = {
        id: 'test-tx-id',
        errors: ['previous-error'],
      } as ITransaction;

      const error = new Error('Test error');
      (mockModels.transactions.update as jest.Mock).mockResolvedValue(mockTransaction);

      const result = await (paymentTools as any).failTransaction(mockTransaction, error);

      expect(result.status).toBe(true);
      expect(result.data).toBe(mockTransaction);
      expect(mockModels.transactions.update).toHaveBeenCalledWith('test-tx-id', {
        status: 'failed',
        errors: ['previous-error', 'Test error'],
        completed_at: expect.any(Date),
        process_status: 'failed',
      });
    });

    it('should fail with invalid transaction data', async () => {
      const invalidTransaction = {
        id: '',
      } as any;

      const error = new Error('Test error');
      const result = await (paymentTools as any).failTransaction(invalidTransaction, error);

      expect(result.status).toBe(false);
      expect(result.message).toBe('Invalid transaction data');
    });
  });

  describe('listenForTransaction', () => {
    it('should initialize transaction worker', () => {
      const mockWorker = {
        on: jest.fn(),
        close: jest.fn(),
      };
      (mockRepo.queue.transaction.createWorker as jest.Mock).mockReturnValue(mockWorker);

      paymentTools.listenForTransaction();

      expect(mockRepo.queue.transaction.createWorker).toHaveBeenCalled();
      expect(mockWorker.on).toHaveBeenCalledWith('failed', expect.any(Function));
      expect(mockWorker.on).toHaveBeenCalledWith('error', expect.any(Function));
      expect(mockWorker.on).toHaveBeenCalledWith('ready', expect.any(Function));
    });

    it('should not initialize worker if already exists', () => {
      const mockWorker = {
        on: jest.fn(),
        close: jest.fn(),
      };
      (mockRepo.queue.transaction.createWorker as jest.Mock).mockReturnValue(mockWorker);

      paymentTools.listenForTransaction();
      paymentTools.listenForTransaction(); // Second call should be ignored

      expect(mockRepo.queue.transaction.createWorker).toHaveBeenCalledTimes(1);
    });
  });

  describe('cleanup', () => {
    it('should cleanup resources properly', async () => {
      const mockWorker = {
        on: jest.fn(),
        close: jest.fn(),
      };
      (mockRepo.queue.transaction.createWorker as jest.Mock).mockReturnValue(mockWorker);
      mockWorker.close.mockResolvedValue(undefined);

      paymentTools.listenForTransaction();
      await paymentTools.cleanup();

      expect(mockWorker.close).toHaveBeenCalled();
    });

    it('should handle cleanup errors gracefully', async () => {
      const mockWorker = {
        on: jest.fn(),
        close: jest.fn(),
      };
      (mockRepo.queue.transaction.createWorker as jest.Mock).mockReturnValue(mockWorker);
      mockWorker.close.mockRejectedValue(new Error('Close error'));

      paymentTools.listenForTransaction();
      await paymentTools.cleanup();

      expect(mockWorker.close).toHaveBeenCalled();
    });
  });
});
