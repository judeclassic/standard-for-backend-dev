import { Models } from "@/models/index";
import { Repositories } from "@/repositories/index";
import { ResponseProps } from "@/utils/types/types";

export interface HealthCheck {
  /** Service status */
  status: 'healthy' | 'unhealthy' | 'degraded';
  /** Service version */
  version: string;
  /** Timestamp of health check */
  timestamp: string;
  /** Additional health information */
  details?: {
    database?: 'connected' | 'disconnected';
    blockchain?: Record<string, 'connected' | 'disconnected'>;
    api?: 'operational' | 'degraded' | 'down';
  };
}


class HealthService {
  constructor(
    private readonly model: Models, // ORM models
    private readonly repo: Repositories   // repositories (wallets, encryption, etc.)
  ) {}

  checkHealth = async (): Promise<ResponseProps<HealthCheck>> => {
    return {
      status: true,
      message: 'Health check successful',
      data: {
        status: 'healthy',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
    };
  }

  checkDetailHealth = async (): Promise<ResponseProps<HealthCheck>> => {
    const bscActive = await this.repo.crypto.getBlock.BSC.isActive;
    const tonActive = await this.repo.crypto.getBlock.Ton.isActive;

    return {
      status: true,
      message: 'Health check successful',
      data: {
        status: 'healthy',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        details: {
          database: this.model.dataSource.isInitialized ? 'connected' : 'disconnected',
          blockchain: {
            BSC: bscActive ? 'connected' : 'disconnected',
            Ton: tonActive ? 'connected' : 'disconnected',
          },
          api: 'operational',
        },
      },
    };
  }
}

export default HealthService;
