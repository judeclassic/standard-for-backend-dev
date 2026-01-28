# Payaa Backend Test Suite

This directory contains comprehensive unit tests and integration tests for the Payaa backend application.

## Test Structure

```
test/
├── setup.ts                 # Jest setup configuration
├── test.config.ts          # Test configuration
├── unit/                   # Unit tests
│   ├── shared/
│   │   └── data/
│   │       ├── models/     # Model unit tests
│   │       ├── repositories/ # Repository unit tests
│   │       └── tools/      # Tool unit tests
│   └── features/           # Feature unit tests
│       └── api/
│           └── merchant/
└── integration/            # Integration tests
    ├── api/               # API integration tests
    ├── socket/            # Socket integration tests
    └── app.test.ts        # Application integration tests
```

## Test Categories

### Unit Tests
- **Models**: Test data models, entities, and their methods
- **Repositories**: Test data access layer, encryption, crypto operations
- **Tools**: Test business logic tools (payment processing, transaction handling)
- **Services**: Test business logic services (auth, transaction, profile)
- **Controllers**: Test API controllers and request/response handling

### Integration Tests
- **API Endpoints**: Test complete request/response cycles
- **Socket Events**: Test real-time communication
- **Database Operations**: Test database interactions
- **Queue Processing**: Test background job processing
- **Authentication Flow**: Test complete auth workflows

## Running Tests

### All Tests
```bash
npm test
```

### Unit Tests Only
```bash
npm run test:unit
```

### Integration Tests Only
```bash
npm run test:integration
```

### Watch Mode
```bash
npm run test:watch
```

### Coverage Report
```bash
npm run test:coverage
```

## Test Configuration

### Environment Variables
Create a `.env.test` file in the project root with test-specific configuration:

```bash
# Copy the example file
cp test/.env.test.example .env.test
```

### Test Database
Tests use a separate test database to avoid interfering with development data:

- Database: `test_payaa_database`
- Redis DB: `1` (for caching), `2` (for queues)

### Mocking Strategy
- External services (blockchain, email, SMS) are mocked by default
- Database operations can be mocked or use test database
- Queue processing is mocked to avoid background job execution

## Test Data

### Fixtures
Test data is managed through:
- Inline test data for simple cases
- Factory functions for complex objects
- Database seeders for integration tests

### Cleanup
- Each test cleans up after itself
- Database is reset between test suites
- Temporary files are cleaned up

## Writing Tests

### Unit Test Example
```typescript
describe('AuthService', () => {
  let authService: AuthService;
  let mockRepo: jest.Mocked<Repositories>;
  let mockModel: jest.Mocked<Models>;

  beforeEach(() => {
    // Setup mocks
    mockRepo = {
      encryption: {
        comparePassword: jest.fn(),
        encryptPassword: jest.fn(),
      },
    } as any;

    mockModel = {
      merchant: {
        findOne: jest.fn(),
        save: jest.fn(),
      },
    } as any;

    authService = new AuthService(mockRepo, mockModel);
  });

  it('should login with valid credentials', async () => {
    // Arrange
    const loginData = {
      email_address: 'test@example.com',
      password: 'password123',
    };

    mockModel.merchant.findOne.mockResolvedValue(mockMerchant);
    mockRepo.encryption.comparePassword.mockReturnValue(true);

    // Act
    const result = await authService.login(loginData);

    // Assert
    expect(result.status).toBe(true);
    expect(result.data).toHaveProperty('access_token');
  });
});
```

### Integration Test Example
```typescript
describe('Merchant Auth API', () => {
  let app: express.Application;

  beforeEach(() => {
    app = createTestApp();
  });

  it('should register new merchant', async () => {
    const response = await request(app)
      .post('/api/merchant/auth/sign-up')
      .send({
        first_name: 'John',
        second_name: 'Doe',
        email_address: 'test@example.com',
        password: 'password123',
      })
      .expect(200);

    expect(response.body.status).toBe(true);
    expect(response.body.data).toHaveProperty('access_token');
  });
});
```

## Test Coverage

### Target Coverage
- **Statements**: > 90%
- **Branches**: > 85%
- **Functions**: > 90%
- **Lines**: > 90%

### Coverage Reports
Coverage reports are generated in:
- `coverage/lcov-report/index.html` - HTML report
- `coverage/lcov.info` - LCOV format

## Continuous Integration

### GitHub Actions
Tests run automatically on:
- Pull requests
- Pushes to main branch
- Scheduled runs

### Test Pipeline
1. Install dependencies
2. Setup test database
3. Run linting
4. Run unit tests
5. Run integration tests
6. Generate coverage report
7. Upload coverage to codecov

## Troubleshooting

### Common Issues

#### Database Connection Errors
```bash
# Ensure test database is running
docker-compose -f docker-compose.test.yml up -d

# Check database connection
npm run test:db:check
```

#### Redis Connection Errors
```bash
# Ensure Redis is running
redis-server

# Check Redis connection
npm run test:redis:check
```

#### Test Timeouts
- Increase timeout in `jest.config.js`
- Check for hanging promises
- Ensure proper cleanup in `afterEach`

#### Memory Issues
- Run tests in smaller batches
- Use `--maxWorkers=1` for debugging
- Check for memory leaks in mocks

### Debug Mode
```bash
# Run single test file
npm test -- payment.test.ts

# Run with debug output
DEBUG=* npm test

# Run with verbose output
npm test -- --verbose
```

## Best Practices

### Test Organization
- Group related tests in `describe` blocks
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### Mocking
- Mock external dependencies
- Use realistic mock data
- Verify mock interactions

### Assertions
- Use specific assertions
- Test both success and failure cases
- Verify error messages and codes

### Cleanup
- Clean up resources in `afterEach`
- Reset mocks between tests
- Remove temporary files

### Performance
- Use `beforeAll` for expensive setup
- Parallelize independent tests
- Avoid unnecessary database operations

## Contributing

### Adding New Tests
1. Create test file in appropriate directory
2. Follow naming convention: `*.test.ts` or `*.spec.ts`
3. Add to test suite in `jest.config.js`
4. Update this README if needed

### Test Review Checklist
- [ ] Tests cover happy path and error cases
- [ ] Mocks are properly configured
- [ ] Cleanup is implemented
- [ ] Tests are isolated and independent
- [ ] Assertions are specific and meaningful

