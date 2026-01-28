import { createWriteStream, createReadStream, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import { logger } from '../logger';

interface LogRotationConfig {
  maxSize: number; // in bytes
  maxFiles: number;
  logDirectory: string;
  logFileName: string;
}

class LogRotationManager {
  private config: LogRotationConfig;
  private currentLogSize: number = 0;
  private checkInterval: NodeJS.Timeout | null = null;

  constructor(config: LogRotationConfig) {
    this.config = config;
    this.initializeLogRotation();
  }

  private initializeLogRotation() {
    // Check log size every 5 minutes
    this.checkInterval = setInterval(() => {
      this.checkAndRotateLogs();
    }, 5 * 60 * 1000);

    // Initial check
    this.checkAndRotateLogs();
  }

  private checkAndRotateLogs() {
    try {
      const logPath = join(this.config.logDirectory, this.config.logFileName);
      
      // Check if log file exists and get its size
      if (this.fileExists(logPath)) {
        const stats = statSync(logPath);
        this.currentLogSize = stats.size;

        // If log file exceeds max size, rotate it
        if (this.currentLogSize > this.config.maxSize) {
          this.rotateLogFile(logPath);
        }
      }
    } catch (error: any) {
      logger.error('Error checking log rotation:', { error: error && error.message ? error.message : String(error) });
    }
  }

  private fileExists(filePath: string): boolean {
    try {
      statSync(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private rotateLogFile(currentLogPath: string) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const rotatedLogPath = `${currentLogPath}.${timestamp}`;

      // Move current log to rotated file
      createReadStream(currentLogPath).pipe(createWriteStream(rotatedLogPath));
      
      // Clear current log file
      createWriteStream(currentLogPath, { flags: 'w' }).end();

      logger.info('Log file rotated', {
        originalFile: currentLogPath,
        rotatedFile: rotatedLogPath,
        size: this.currentLogSize
      });

      // Clean up old rotated files
      this.cleanupOldLogs(currentLogPath);

    } catch (error: any) {
      logger.error('Error rotating log file:', { error: error?.message ?? String(error) });
    }
  }

  private cleanupOldLogs(baseLogPath: string) {
    try {
      const fs = require('fs');
      const files = fs.readdirSync(this.config.logDirectory);
      
      // Find all rotated log files for this base log
      const rotatedFiles = files
        .filter((file: string) => file.startsWith(this.config.logFileName))
        .filter((file: string) => file !== this.config.logFileName)
        .map((file: string) => ({
          name: file,
          path: join(this.config.logDirectory, file),
          stats: statSync(join(this.config.logDirectory, file))
        }))
        .sort((a: any, b: any) => b.stats.mtime - a.stats.mtime); // Sort by modification time, newest first

      // Keep only the most recent files up to maxFiles
      const filesToDelete = rotatedFiles.slice(this.config.maxFiles);
      
      filesToDelete.forEach((file: any) => {
        try {
          unlinkSync(file.path);
          logger.info('Old log file deleted', { file: file.name });
        } catch (error) {
          logger.error('Error deleting old log file:', { 
            file: file.name, 
            error: error instanceof Error ? error.message : String(error)
          });
        }
      });

    } catch (error) {
      logger.error('Error cleaning up old logs:', { error: error instanceof Error ? error.message : String(error) });
    }
  }

  public getLogStats() {
    try {
      const logPath = join(this.config.logDirectory, this.config.logFileName);
      
      if (this.fileExists(logPath)) {
        const stats = statSync(logPath);
        return {
          currentSize: stats.size,
          maxSize: this.config.maxSize,
          sizePercentage: (stats.size / this.config.maxSize) * 100,
          lastModified: stats.mtime,
          needsRotation: stats.size > this.config.maxSize
        };
      }
      
      return null;
    } catch (error: any) {
      logger.error('Error getting log stats:', { error: error?.message ?? String(error) });
      return null;
    }
  }

  public forceRotation() {
    const logPath = join(this.config.logDirectory, this.config.logFileName);
    if (this.fileExists(logPath)) {
      this.rotateLogFile(logPath);
    }
  }

  public stop() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }
}

// Default configuration
const defaultConfig: LogRotationConfig = {
  maxSize: 10 * 1024 * 1024, // 10MB
  maxFiles: 5,
  logDirectory: 'logs',
  logFileName: 'combined.log'
};

// Create log rotation manager instance
export const logRotationManager = new LogRotationManager(defaultConfig);

// Log volume monitoring
class LogVolumeMonitor {
  private volumeCheckInterval: NodeJS.Timeout | null = null;
  private lastLogCount: number = 0;
  private alertThreshold: number = 1000; // logs per minute

  constructor() {
    this.startVolumeMonitoring();
  }

  private startVolumeMonitoring() {
    // Check log volume every minute
    this.volumeCheckInterval = setInterval(() => {
      this.checkLogVolume();
    }, 60 * 1000);
  }

  private checkLogVolume() {
    try {
      // This would typically query your logging system for current log count
      // For now, we'll simulate with a simple counter
      const currentLogCount = this.getCurrentLogCount();
      const logRate = currentLogCount - this.lastLogCount;
      
      logger.info('Log volume check', {
        currentLogCount,
        logRate,
        threshold: this.alertThreshold
      });

      // Alert if log rate exceeds threshold
      if (logRate > this.alertThreshold) {
        logger.warn('High log volume detected', {
          logRate,
          threshold: this.alertThreshold,
          severity: 'HIGH'
        });
      }

      this.lastLogCount = currentLogCount;
    } catch (error) {
      logger.error('Error checking log volume:', { error: error instanceof Error ? error.message : String(error) });
    }
  }

  private getCurrentLogCount(): number {
    // This is a placeholder - in a real implementation, you would:
    // 1. Query your logging system (Datadog, ELK, etc.)
    // 2. Count logs from the last minute
    // 3. Return the actual count
    
    // For now, return a random number for demonstration
    return Math.floor(Math.random() * 2000);
  }

  public stop() {
    if (this.volumeCheckInterval) {
      clearInterval(this.volumeCheckInterval);
      this.volumeCheckInterval = null;
    }
  }
}

// Create log volume monitor instance
export const logVolumeMonitor = new LogVolumeMonitor();

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('Shutting down log management...');
  logRotationManager.stop();
  logVolumeMonitor.stop();
});

process.on('SIGINT', () => {
  logger.info('Shutting down log management...');
  logRotationManager.stop();
  logVolumeMonitor.stop();
});

export { LogRotationManager, LogVolumeMonitor };
