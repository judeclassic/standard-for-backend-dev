import redisClient from "../../../adapter/libraries/redis";
import Redis from "ioredis"

export class CacheRepository {
  static async new (): Promise<CacheRepository> {
    return new CacheRepository( redisClient );
  }

  constructor(
    private readonly redis: Redis
  ) {}

  async set(key: string, value: string, ttlSeconds: number): Promise<void> {
    await this.redis.set(key, value, 'EX', ttlSeconds);
  }

  async get(key: string): Promise<string | null> {
    const result = await this.redis.get(key);
    return result ?? null;
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }

  async exists(key: string): Promise<boolean> {
    const result = await this.redis.exists(key);
    return result === 1;
  }
}
  