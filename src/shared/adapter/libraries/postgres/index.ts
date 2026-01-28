import { logger } from '../logger';
import { AppDataSource } from './repo';
import { Models } from '@/models/index';

class DBConnection {
  private static dataSource: AppDataSource;

  static async connect(): Promise<AppDataSource> {
    try {
      let dbUrl = process.env.POSTGRES_URL;

      if (!dbUrl) {
        throw new Error('POSTGRES_URL is not set');
      }


      // Security: Never log database URLs as they contain credentials
      logger.info('Database connection initialized');

      this.dataSource = new AppDataSource({
        type: 'postgres',
        url: dbUrl,
        entities: Models.getEntities,
        // synchronize: true,
        // dropSchema: true,
      });

      await this.dataSource.initialize();
      logger.info('Database connected successfully');
      return this.dataSource;
    } catch (err) {
      logger.error(`Database connection error: ${err}`);
      setTimeout(() => {
        logger.error('Retrying database connection...');
        this.connect();
      }, 5000);
      throw err;
    }
  }

  static async close(): Promise<void> {
    try {
      if (this.dataSource && this.dataSource.isInitialized) {
        await this.dataSource.destroy();
      }
    } catch (err) {
      logger.error(`Error during database disconnection: ${err}`);
      process.exit(1);
    }
  }
}

export default DBConnection;
