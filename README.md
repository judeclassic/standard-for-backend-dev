# Payment Processing Backend

A robust, scalable payment processing backend supporting cryptocurrency transactions on BSC and TON networks with real-time WebSocket communication.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Reference](#api-reference)
- [WebSocket Events](#websocket-events)
- [Testing](#testing)
- [Docker Deployment](#docker-deployment)
- [Architecture Deep Dive](#architecture-deep-dive)

---

## Features

- **Multi-Tenant Payment Processing** - Support for multiple merchants with isolated accounts
- **Blockchain Integration** - BSC (Binance Smart Chain) and TON network support
- **Real-Time Updates** - WebSocket-powered live transaction notifications
- **Background Workers** - Scalable worker processes for payment monitoring and webhooks
- **Rate Limiting & DDoS Protection** - Built-in security middleware
- **Admin Dashboard API** - Dedicated admin authentication and management
- **Comprehensive Testing** - Unit and integration test suites

---

## Architecture

```mermaid
graph TB
    subgraph Clients
        SDK[SDK Clients]
        Admin[Admin Dashboard]
        Merchant[Merchant Apps]
    end
    
    subgraph "Main App (HTTP Server)"
        Express[Express Server]
        Socket[Socket.io]
        Routes[API Routes]
    end
    
    subgraph "Worker Process"
        PaymentListener[Payment Listener]
        WebhookProcessor[Webhook Processor]
    end
    
    subgraph "Data Layer"
        Postgres[(PostgreSQL)]
        Redis[(Redis)]
    end
    
    subgraph "External Services"
        BSC[BSC Network]
        TON[TON Network]
    end
    
    SDK --> Socket
    SDK --> Express
    Admin --> Express
    Merchant --> Express
    
    Express --> Routes
    Routes --> Postgres
    Routes --> Redis
    
    PaymentListener --> BSC
    PaymentListener --> TON
    PaymentListener --> Postgres
    PaymentListener --> Redis
    
    WebhookProcessor --> Redis
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Express.js** | HTTP server and REST API |
| **Socket.io** | Real-time WebSocket communication |
| **TypeORM** | PostgreSQL ORM |
| **PostgreSQL** | Primary database |
| **Redis** | Caching, sessions, and job queues |
| **BullMQ** | Background job processing |
| **Web3.js** | BSC blockchain integration |
| **TonWeb** | TON blockchain integration |
| **Jest** | Testing framework |
| **PM2** | Process manager for production |
| **Docker** | Containerization |

---

## Project Structure

```
├── src/
│   ├── index.ts                    # Main app entry point
│   ├── worker.ts                   # Background worker entry point
│   │
│   ├── features/                   # Feature modules
│   │   ├── routes.ts               # Main route aggregator
│   │   │
│   │   ├── app/                    # App APIs
│   │   │   ├── admin/              # Admin authentication
│   │   │   │   └── auth/           # Admin login/logout
│   │   │   │
│   │   │   └── merchant/           # Merchant APIs
│   │   │       ├── auth/           # Merchant sign up/login
│   │   │       ├── personal/       # Profile management
│   │   │       ├── account/        # Payment account management
│   │   │       └── transaction/    # Transaction history
│   │   │
│   │   └── sdk/                    # SDK APIs (for integrations)
│   │       ├── health/             # Health check endpoints
│   │       └── payment/            # Payment processing (REST + WebSocket)
│   │
│   └── shared/                     # Shared utilities
│       ├── adapter/
│       │   ├── libraries/          # Core libraries
│       │   │   ├── logger/         # Winston logger
│       │   │   ├── postgres/       # Database connection
│       │   │   ├── redis.ts        # Redis client
│       │   │   └── socket.ts       # Socket.io setup
│       │   │
│       │   └── middleware/         # Express middleware
│       │       ├── limiter/        # Rate limiting & DDoS protection
│       │       ├── roles/          # API & merchant authentication
│       │       ├── validate/       # Request validation
│       │       └── webhook/        # Webhook handling
│       │
│       ├── data/
│       │   ├── models/             # TypeORM entities
│       │   │   ├── admin/          # Admin entity
│       │   │   ├── merchant/       # Merchant entity
│       │   │   ├── user/           # User & UserWallet entities
│       │   │   ├── account/        # PaymentAccount, AccountWallet, ApiInfo
│       │   │   ├── transaction/    # Transaction entity
│       │   │   ├── wallet/         # Wallet entity
│       │   │   ├── payout/         # Payout entity
│       │   │   └── analytics/      # Analytics entities
│       │   │
│       │   ├── repositories/       # Data access & external services
│       │   │   ├── crypto/         # Blockchain integrations (BSC, TON)
│       │   │   ├── encryption/     # Password hashing, JWT
│       │   │   ├── email/          # Email service
│       │   │   ├── queue/          # BullMQ job queues
│       │   │   ├── cache/          # Redis caching
│       │   │   ├── socket/         # Socket event helpers
│       │   │   └── files/          # File upload handling
│       │   │
│       │   └── tools/              # Business logic
│       │       ├── payment/        # Payment processing tools
│       │       └── webhook/        # Webhook dispatch tools
│       │
│       └── utils/                  # Utility functions
│
├── test/                           # Test suites
│   ├── unit/                       # Unit tests
│   ├── integration/                # Integration tests
│   └── README.md                   # Detailed test documentation
│
├── docker-compose.yml              # Docker services
├── Dockerfile.master               # Master app Dockerfile
├── Dockerfile.worker               # Worker Dockerfile
├── Dockerfile.render               # Render.com deployment
├── ecosystem.config.cjs            # PM2 configuration
└── render.yaml                     # Render.com config
```

---

## Prerequisites

- **Node.js** >= 18.x
- **PostgreSQL** >= 14.x
- **Redis** >= 6.x
- **npm** or **yarn** or **bun**

---

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend-opensource
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Configure environment**
   ```bash
   cp .env.template .env
   # Edit .env with your configuration
   ```

4. **Set up database**
   - Create a PostgreSQL database
   - Update database connection in `.env`
   - Tables will be auto-created via TypeORM synchronization

---

## Environment Configuration

Create a `.env` file based on `.env.template`:

```env
# Application
APP_NAME=PaymentBackend
PORT=8080

# Database
POSTGRES_URL=postgresql://user:password@localhost:5432/payment_db
MONGODB_URL=           # Optional, if MongoDB is used

# Redis
REDIS_URL=redis://localhost:6379

# JWT Secrets
ACCESS_TOKEN_SECRET=your-access-token-secret
REFRESH_TOKEN_SECRET=your-refresh-token-secret
ADMIN_ACCESS_TOKEN_SECRET=your-admin-secret
WEB_TOKEN_SECRET=your-web-token-secret
API_ACCESS_TOKEN=your-api-access-token

# Blockchain - TON
TON_USDT_CONTRACT_ADDRESS=
TON_RPC_NODE_URL=
TON_RPC_API_KEY=

# Blockchain - BSC
BSC_USDT_CONTRACT_ADDRESS=
BSC_WEBSOCKET_URL=
BSC_RPC_URL=

# Monitoring (Optional)
DATADOG_CLOUD_API_KEY=
```

---

## Running the Application

### Development Mode

**Start the main app:**
```bash
npm run dev
```

**Start the worker (separate terminal):**
```bash
npm run dev-worker
```

### Production Mode

**Build the application:**
```bash
npm run build
```

**Start the main app:**
```bash
npm start
```

**Start the worker:**
```bash
npm run start-worker
```

### Using PM2 (Recommended for Production)

```bash
pm2 start ecosystem.config.cjs
```

This starts:
- `app` - Main HTTP server (1 instance)
- `worker` - Background workers (max instances, clustered)

---

## API Reference

### Admin Routes (`/api/admin`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | Admin login |
| POST | `/auth/logout` | Admin logout |

> **Note:** Admin routes have stricter rate limiting (50 req/15min) and are logged for security.

### Merchant Routes (`/api/merchant`)

#### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/sign-up` | Register new merchant |
| POST | `/auth/login` | Merchant login |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/logout` | Merchant logout |

#### Personal
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/personal/profile` | Get merchant profile |
| PUT | `/personal/profile` | Update profile |

#### Account
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/account` | List payment accounts |
| POST | `/account` | Create payment account |
| GET | `/account/:id` | Get account details |
| DELETE | `/account/:id` | Delete account |

#### Transaction
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/transaction` | List transactions |
| GET | `/transaction/:id` | Get transaction details |

### SDK Routes (`/sdk-api`)

#### Health
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Basic health check |
| GET | `/health/detailed` | Detailed health status |

#### Payment
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/payments/options` | Get payment options |
| GET | `/payments/recent` | Get recent transactions |
| POST | `/payments/process` | Process a payment |

---

## WebSocket Events

Connect to the server via Socket.io for real-time updates.

### SDK Payment Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `get_options` | Client → Server | Request payment options |
| `get_recent_transactions` | Client → Server | Get recent transactions |
| `process_transaction` | Client → Server | Initiate payment |
| `transaction_update` | Server → Client | Transaction status update |

### Connection Example

```javascript
import { io } from 'socket.io-client';

const socket = io('http://localhost:8080', {
  path: '/sdk-api/socket.io'
});

socket.on('connect', () => {
  socket.emit('get_options', { account_id: 'xxx' });
});

socket.on('transaction_update', (data) => {
  console.log('Transaction updated:', data);
});
```

---

## Testing

The project includes comprehensive unit and integration tests.

### Quick Commands

```bash
# Run all tests
npm test

# Unit tests only
npm run test:unit

# Integration tests only
npm run test:integration

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Test Structure

```
test/
├── setup.ts              # Jest configuration
├── test.config.ts        # Test environment config
├── unit/                 # Unit tests
│   ├── shared/data/      # Model, repo, tool tests
│   └── features/         # Feature tests
└── integration/          # Integration tests
    ├── api/              # API endpoint tests
    └── socket/           # Socket event tests
```

> **📖 See [test/README.md](test/README.md) for detailed testing documentation.**

---

## Docker Deployment

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**Services included:**
- `app` - Main application (1 replica)
- `worker` - Background workers (4 replicas)
- `redis` - Redis server

### Individual Dockerfiles

| Dockerfile | Purpose |
|------------|---------|
| `Dockerfile.master` | Main app container |
| `Dockerfile.worker` | Worker container |
| `Dockerfile.render` | Render.com deployment |

### Render.com Deployment

The project includes `render.yaml` for easy Render.com deployment.

---

## Architecture Deep Dive

### Data Layer

#### Models
TypeORM entities representing database tables:
- `Admin` - System administrators
- `Merchant` - Registered merchants
- `User` / `UserWallet` - End users and their wallets
- `PaymentAccount` / `AccountWallet` - Merchant payment accounts
- `Transaction` - Payment transactions
- `Wallet` - Blockchain wallets
- `Analytics` - Merchant and admin analytics

#### Repositories
Data access and external service integrations:
- **CryptoRepository** - BSC and TON blockchain operations
- **EncryptionRepository** - Password hashing, JWT tokens
- **QueueRepository** - BullMQ job queues
- **CacheRepository** - Redis caching layer
- **EmailRepository** - Email sending
- **SocketRepository** - WebSocket event helpers

#### Tools
Business logic processors:
- **PaymentTools** - Listen for blockchain transactions, process payments
- **WebhookTools** - Dispatch webhooks to merchant URLs

### Security

- **Rate Limiting** - Configurable per-route limits
- **DDoS Protection** - Burst detection middleware
- **Admin Security** - Stricter limits + access logging
- **API Authentication** - JWT-based auth for SDK access
- **Merchant Authentication** - Session-based merchant auth

### Worker Process

The worker (`src/worker.ts`) runs independently to:
1. **Listen for blockchain transactions** - Monitors BSC/TON networks
2. **Process webhooks** - Delivers payment notifications to merchants

Workers scale horizontally via PM2 cluster mode.

---

## License

This project is private and proprietary.

---

## Support

For questions or issues, please contact the development team.
