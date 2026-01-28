import { Request, Response, NextFunction } from 'express';
import { IData } from '../../../utils/types/types';
import { logger, logSuspiciousActivity } from '../../libraries/logger';

/**
 * Webhook Signature Verification Middleware
 * Verifies incoming webhooks using HMAC-SHA256 signatures and timestamp validation
 * Prevents replay attacks and ensures message authenticity
 */
export const verifyWebhookSignature = (data: IData) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const signature = req.headers['x-zypay-signature'] as string;
    const timestamp = req.headers['x-zypay-timestamp'] as string;
    
    // Check for required headers
    if (!signature || !timestamp) {
      logSuspiciousActivity('WEBHOOK_MISSING_HEADERS', {
        ip: req.ip,
        path: req.path,
        missingHeaders: {
          signature: !signature,
          timestamp: !timestamp
        }
      });
      return res.status(400).json({ 
        status: false,
        error: 'Missing signature or timestamp headers' 
      });
    }
    
    // Validate timestamp to prevent replay attacks
    const isValidTimestamp = data.repo.encryption.validateWebhookTimestamp(timestamp);
    if (!isValidTimestamp) {
      logSuspiciousActivity('WEBHOOK_INVALID_TIMESTAMP', {
        ip: req.ip,
        path: req.path,
        timestamp,
        age: (Date.now() - parseInt(timestamp)) / 1000
      });
      return res.status(400).json({ 
        status: false,
        error: 'Invalid or expired timestamp' 
      });
    }
    
    // Get the account to retrieve secret key
    // This assumes the account ID is available from previous middleware (e.g., authentication)
    const accountId = req.apiAuth?.account_id;
    if (!accountId) {
      return res.status(401).json({
        status: false,
        error: 'Authentication required'
      });
    }
    
    const account = await data.model.accounts.findOne({ where: { id: accountId } });
    if (!account) {
      return res.status(403).json({
        status: false,
        error: 'Account not found'
      });
    }
    
    // Determine which secret key to use (sandbox vs production)
    const secretKey = req.apiAuth?.type === 'production' 
      ? account.api_info.secret_key 
      : account.sandbox_info.secret_key;
    
    // Verify the signature
    const payloadString = JSON.stringify(req.body);
    const isValid = data.repo.encryption.verifyWebhookSignature(
      signature, 
      timestamp, 
      payloadString, 
      secretKey
    );
    
    if (!isValid) {
      logSuspiciousActivity('WEBHOOK_INVALID_SIGNATURE', {
        ip: req.ip,
        path: req.path,
        accountId,
        timestamp
      });
      return res.status(400).json({ 
        status: false,
        error: 'Invalid signature' 
      });
    }
    
    // Signature and timestamp are valid, proceed
    next();
    
  } catch (error: any) {
    logger.error('Webhook verification error:', error);
    return res.status(500).json({ 
      status: false,
      error: 'Internal server error' 
    });
  }
};

/**
 * Standalone webhook verification function
 * Can be used for manual verification without Express middleware
 */
export const verifyWebhookManually = (
  signature: string,
  timestamp: string,
  payload: string,
  secretKey: string,
  encryption: any
): { valid: boolean; error?: string } => {
  // Validate timestamp
  if (!encryption.validateWebhookTimestamp(timestamp)) {
    return { valid: false, error: 'Invalid or expired timestamp' };
  }
  
  // Verify signature
  const isValid = encryption.verifyWebhookSignature(signature, timestamp, payload, secretKey);
  if (!isValid) {
    return { valid: false, error: 'Invalid signature' };
  }
  
  return { valid: true };
};
