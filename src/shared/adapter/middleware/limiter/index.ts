import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { addToBlocklist, incrementSuspiciousAttempts } from './ipBlocklist';
import { createRedisStore } from './rateLimiter';
import { getIpAddress } from './ipBlocker';
import redisClient, { REDIS_KEYS } from '../../libraries/redis';
import { logger, logSuspiciousActivity } from '../../libraries/logger';

const WINDOW_MS = 60 * 1000;       // 1 minute
const MAX_REQUESTS = 100;          // Max requests per window
const BURST_THRESHOLD = 30;        // Max requests per second

// -----------------------------
// Track request burst per IP
// -----------------------------
async function trackRequestBurst(ip: string): Promise<{ count: number; timestamp: number }> {
  const key = `${REDIS_KEYS.REQUEST_TRACKER}:${ip}`;
  const now = Date.now();

  try {
    const raw = await redisClient.get(key);
    const tracker = raw ? JSON.parse(raw) : { count: 0, timestamp: now };

    if (now - tracker.timestamp > 1000) {
      tracker.count = 1;
      tracker.timestamp = now;
    } else {
      tracker.count++;
    }

    await redisClient.setex(key, 60, JSON.stringify(tracker));
    return tracker;
  } catch (error) {
    logger.error(`Request burst tracking failed for IP ${ip}:`, error);
    return { count: 1, timestamp: now };
  }
}

// -----------------------------
// DDoS Protection (Rate Limiting)
// -----------------------------
export const ddosProtection = rateLimit({
  store: createRedisStore(),
  windowMs: WINDOW_MS,
  max: MAX_REQUESTS,
  skip: (req: Request) => ['/api/status', '/health-check'].includes(req.path),
  handler: async (req: Request, res: Response) => {
    const ip = getIpAddress(req);
    logger.warn(`Rate limit exceeded for IP: ${ip}`, { path: req.path });

    // Log suspicious activity
    logSuspiciousActivity('RATE_LIMIT_EXCEEDED', {
      ip,
      path: req.path,
      method: req.method,
      userAgent: req.headers['user-agent']
    });

    try {
      await addToBlocklist(ip, 'DDoS attempt detected', true);
      await incrementSuspiciousAttempts(ip);

      return res.status(429).json({
        error: 'Too many requests, IP has been blocked.',
      });
    } catch (err) {
      logger.error('Error handling DDoS limit:', err);
      return res.status(500).send('Internal Server Error');
    }
  },
});

// -----------------------------
// Burst Detection Middleware
// -----------------------------
export async function burstDetection(req: Request, res: Response, next: NextFunction) {
  const ip = getIpAddress(req);

  try {
    const tracker = await trackRequestBurst(ip);

    if (tracker.count > BURST_THRESHOLD) {
      logger.warn(`Burst request limit exceeded for IP: ${ip}`, { count: tracker.count });

      await addToBlocklist(ip, 'Burst request threshold exceeded', true);
      return res.status(429).json({
        error: 'Request burst detected. IP has been blocked.',
      });
    }

    return next();
  } catch (err) {
    logger.error('Burst detection error:', err);
    return next(); // fail-safe to continue
  }
}


const ipBoundRequest = (req: Request, res: Response, next: NextFunction) => {
  const ip = getIpAddress(req);
  if(!ip || ip === "Unknown") {
    return res.status(403).json({ message: 'Invalid access' });
  }
  next();
}

/**
 * Admin Request Monitor
 * - Logs all admin route access for security monitoring
 * - Applies stricter rate limiting for admin endpoints
 * - Does NOT block based on IP (relies on JWT authentication instead)
 */
export const isAdminRequest = (req: Request, res: Response, next: NextFunction) => {
  const ip = getIpAddress(req);
  
  // Log admin access for security monitoring
  if (req.path.includes('/admin')) {
    logger.info('Admin route accessed', {
      ip,
      path: req.path,
      method: req.method,
      userAgent: req.headers['user-agent'],
      timestamp: new Date().toISOString()
    });

    // Optional: Log if accessing from unusual IP (for monitoring, not blocking)
    if (process.env.ADMIN_IP && ip !== process.env.ADMIN_IP) {
      logger.warn('Admin access from non-standard IP', {
        ip,
        expectedIp: process.env.ADMIN_IP,
        path: req.path,
        note: 'This is logged for monitoring only - access is controlled by JWT authentication'
      });
    }
  }
  
  next();
}

/**
 * Stricter rate limiting for admin routes
 * Prevents brute force attacks on admin endpoints
 */
export const adminRateLimit = rateLimit({
  store: createRedisStore(),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Stricter limit for admin routes
  skipSuccessfulRequests: false,
  handler: async (req: Request, res: Response) => {
    const ip = getIpAddress(req);
    
    logSuspiciousActivity('ADMIN_RATE_LIMIT_EXCEEDED', {
      ip,
      path: req.path,
      method: req.method,
      userAgent: req.headers['user-agent']
    });

    logger.warn(`Admin rate limit exceeded for IP: ${ip}`, { path: req.path });

    try {
      await incrementSuspiciousAttempts(ip);
      
      // Block IP after multiple violations
      const attempts = await redisClient.get(`${REDIS_KEYS.SUSPICIOUS_ATTEMPTS}:${ip}`);
      if (attempts && parseInt(attempts) > 5) {
        await addToBlocklist(ip, 'Multiple admin rate limit violations', true);
      }

      return res.status(429).json({
        error: 'Too many requests to admin endpoints. Please try again later.',
      });
    } catch (err) {
      logger.error('Error handling admin rate limit:', err);
      return res.status(429).json({
        error: 'Too many requests. Please try again later.',
      });
    }
  },
});