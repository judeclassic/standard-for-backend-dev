import { Server } from 'socket.io';
import { createServer } from 'http';
import { NewSocketConnector } from '../../src/shared/adapter/libraries/socket';
import socketRoutes from "@/features/sdk/route"

describe('Socket Integration Tests', () => {
  let httpServer: any;

  beforeEach(() => {
    httpServer = createServer();
  });

  afterEach(() => {
    jest.clearAllMocks();
    if (httpServer) {
      httpServer.close();
    }
  });

  describe('Socket connection and authentication', () => {
    it('should handle successful socket connection', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'valid-token',
          },
        },
        join: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
      };

      const mockAuthUser = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
      };

      // Create mock encryption repository
      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: true,
          data: mockAuthUser,
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      // Create mock socket instance
      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
      };

      // Mock Server constructor
      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {} as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockEncryptionRepo.verifyBearerToken).toHaveBeenCalledWith('valid-token', expect.any(String));
      expect(mockSocket.join).toHaveBeenCalledWith('merchant-id');
    });

    it('should handle socket connection with invalid token', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'invalid-token',
          },
        },
        disconnect: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: false,
          error: 'Invalid token',
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {} as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocket.disconnect).toHaveBeenCalled();
      expect(mockSocket.emit).toHaveBeenCalledWith('error', expect.any(Object));
    });

    it('should handle socket connection without token', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {  
          auth: {},
        },
        disconnect: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn(),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {} as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocket.disconnect).toHaveBeenCalled();
      expect(mockSocket.emit).toHaveBeenCalledWith('error', expect.any(Object));
    });
  });

  describe('Payment transaction events', () => {
    it('should handle payment status update events', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'valid-token',
          },
        },
        join: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
        to: jest.fn(() => ({
          emit: jest.fn(),
        })),
      };

      const mockAuthUser = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: true,
          data: mockAuthUser,
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockTransaction = {
        id: 'tx-123',
        status: 'success',
        package: { subscription_fee: 100 },
        to: {
          account_wallet: {
            account: {
              id: 'merchant-id',
            },
          },
        },
      };

      const mockModels = {
        transactions: {
          findOne: jest.fn().mockResolvedValue(mockTransaction),
        },
      };

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
        to: jest.fn(() => ({
          emit: jest.fn(),
        })),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {
          dataSource: jest.fn(),
          admin: jest.fn(),
          merchant: jest.fn(),
          user: jest.fn(),
          account: jest.fn(),
          transaction: jest.fn(),
          wallet: jest.fn(),
          subscription: jest.fn(),
          webhook: jest.fn(),
          accounts: jest.fn(),
          ...mockModels
        } as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocket.to).toHaveBeenCalledWith('merchant-id');
    });

    it('should handle transaction completion events', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'valid-token',
          },
        },
        join: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
        to: jest.fn(() => ({
          emit: jest.fn(),
        })),
      };

      const mockAuthUser = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: true,
          data: mockAuthUser,
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockTransaction = {
        id: 'tx-123',
        status: 'completed',
        package: { subscription_fee: 100 },
        to: {
          account_wallet: {
            account: {
              id: 'merchant-id',
            },
          },
        },
      };

      const mockModels = {
        transactions: {
          findOne: jest.fn().mockResolvedValue(mockTransaction),
        },
      };

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
        to: jest.fn(() => ({
          emit: jest.fn(),
        })),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {
          dataSource: jest.fn(),
          admin: jest.fn(),
          merchant: jest.fn(),
          user: jest.fn(),
          account: jest.fn(),
          transaction: jest.fn(),
          wallet: jest.fn(),
          subscription: jest.fn(),
          webhook: jest.fn(),
          accounts: jest.fn(),
          ...mockModels
        } as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocket.to).toHaveBeenCalledWith('merchant-id');
    });
  });

  describe('Socket room management', () => {
    it('should join user to appropriate room on connection', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'valid-token',
          },
        },
        join: jest.fn(),
        leave: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
      };

      const mockAuthUser = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: true,
          data: mockAuthUser,
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {} as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocket.join).toHaveBeenCalledWith('merchant-id');
    });

    it('should handle room-specific broadcasts', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'valid-token',
          },
        },
        join: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
      };

      const mockAuthUser = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: true,
          data: mockAuthUser,
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
        to: jest.fn(() => ({
          emit: jest.fn(),
        })),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {} as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocketInstance.to).toHaveBeenCalledWith('merchant-id');
    });
  });

  describe('Error handling and reconnection', () => {
    it('should handle socket disconnection', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'valid-token',
          },
        },
        join: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
        disconnect: jest.fn(),
      };

      const mockAuthUser = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: true,
          data: mockAuthUser,
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {} as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocket.on).toHaveBeenCalledWith('disconnect', expect.any(Function));
    });

    it('should handle socket errors', async () => {
      const mockSocket = {
        id: 'socket-id',
        handshake: {
          auth: {
            token: 'valid-token',
          },
        },
        join: jest.fn(),
        emit: jest.fn(),
        on: jest.fn(),
      };

      const mockAuthUser = {
        id: 'merchant-id',
        first_name: 'John',
        email_address: 'test@example.com',
      };

      const mockEncryptionRepo = {
        verifyBearerToken: jest.fn().mockReturnValue({
          status: true,
          data: mockAuthUser,
        }),
        encryptToken: jest.fn(),
        decryptToken: jest.fn(),
        createSpecialKey: jest.fn(),
        verifyToken: jest.fn(),
        encryptPassword: jest.fn(),
        comparePassword: jest.fn(),
        generateAccessToken: jest.fn(),
        generateRefreshToken: jest.fn(),
        generateAdminToken: jest.fn(),
        generateWebToken: jest.fn(),
        generateApiToken: jest.fn(),
        generateSandboxToken: jest.fn(),
        generateProductionToken: jest.fn(),
      } as any;

      const mockSocketInstance = {
        on: jest.fn((event, callback) => {
          if (event === 'connection') {
            callback(mockSocket);
          }
        }),
        emit: jest.fn(),
      };

      const MockServer = jest.fn().mockImplementation(() => mockSocketInstance);
      (Server as any) = MockServer;

      const socketConnector = NewSocketConnector(mockEncryptionRepo);
      socketConnector.runServer(httpServer);
      
      const mockData = { 
        model: {} as any, 
        repo: {} as any,
        tools: {} as any
      };
      socketConnector.extendsRoutes(socketRoutes(mockData).socket);

      expect(mockSocket.on).toHaveBeenCalledWith('error', expect.any(Function));
    });
  });
});

