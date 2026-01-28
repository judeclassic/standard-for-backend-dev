import { config } from 'dotenv';

// Load test environment variables
config({ path: '.env.test' });

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.ENV = 'test';

// Set required environment variables for tests
process.env.ACCESS_TOKEN_SECRET = process.env.TEST_ACCESS_TOKEN_SECRET || 'test-access-secret-key-for-testing-only';
process.env.REFRESH_TOKEN_SECRET = process.env.TEST_REFRESH_TOKEN_SECRET || 'test-refresh-secret-key-for-testing-only';
process.env.ADMIN_ACCESS_TOKEN_SECRET = process.env.TEST_ADMIN_ACCESS_TOKEN_SECRET || 'test-admin-secret-key-for-testing-only';
process.env.WEB_TOKEN_SECRET = process.env.TEST_WEB_TOKEN_SECRET || 'test-web-secret-key-for-testing-only';
process.env.API_ACCESS_TOKEN = process.env.TEST_API_ACCESS_TOKEN || 'test-api-secret-key-for-testing-only';
process.env.API_SANDBOX_ACCESS_TOKEN = process.env.TEST_API_SANDBOX_ACCESS_TOKEN || 'test-sandbox-secret-key-for-testing-only';
process.env.API_PRODUCTION_ACCESS_TOKEN = process.env.TEST_API_PRODUCTION_ACCESS_TOKEN || 'test-production-secret-key-for-testing-only';

// Global test timeout
jest.setTimeout(30000);

// Mock console methods to prevent test output pollution
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};