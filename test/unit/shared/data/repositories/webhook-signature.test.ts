import EncryptionRepository from '../../../../../src/shared/data/repositories/encryption';

describe('Webhook Signature Verification', () => {
  let encryptionRepo: EncryptionRepository;
  const testSecretKey = 'test-secret-key-for-webhooks';
  const testPayload = JSON.stringify({ event: 'payment.completed', amount: 100 });
  
  beforeEach(() => {
    encryptionRepo = new EncryptionRepository();
  });

  describe('generateWebhookSignature', () => {
    it('should generate a valid base64 signature', () => {
      const timestamp = Date.now().toString();
      const signature = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      
      expect(signature).toBeDefined();
      expect(typeof signature).toBe('string');
      expect(signature.length).toBeGreaterThan(0);
      // Base64 signature should match the pattern
      expect(signature).toMatch(/^[A-Za-z0-9+/]+=*$/);
    });

    it('should generate different signatures for different payloads', () => {
      const timestamp = Date.now().toString();
      const signature1 = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      const signature2 = encryptionRepo.generateWebhookSignature('different payload', timestamp, testSecretKey);
      
      expect(signature1).not.toBe(signature2);
    });

    it('should generate different signatures for different timestamps', () => {
      const timestamp1 = Date.now().toString();
      const timestamp2 = (Date.now() + 1000).toString();
      const signature1 = encryptionRepo.generateWebhookSignature(testPayload, timestamp1, testSecretKey);
      const signature2 = encryptionRepo.generateWebhookSignature(testPayload, timestamp2, testSecretKey);
      
      expect(signature1).not.toBe(signature2);
    });

    it('should generate different signatures for different secret keys', () => {
      const timestamp = Date.now().toString();
      const signature1 = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      const signature2 = encryptionRepo.generateWebhookSignature(testPayload, timestamp, 'different-secret-key');
      
      expect(signature1).not.toBe(signature2);
    });

    it('should generate consistent signatures for same inputs', () => {
      const timestamp = Date.now().toString();
      const signature1 = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      const signature2 = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      
      expect(signature1).toBe(signature2);
    });
  });

  describe('verifyWebhookSignature', () => {
    it('should verify a valid signature', () => {
      const timestamp = Date.now().toString();
      const signature = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      
      const isValid = encryptionRepo.verifyWebhookSignature(signature, timestamp, testPayload, testSecretKey);
      
      expect(isValid).toBe(true);
    });

    it('should reject an invalid signature', () => {
      const timestamp = Date.now().toString();
      const invalidSignature = 'invalid-signature-base64==';
      
      const isValid = encryptionRepo.verifyWebhookSignature(invalidSignature, timestamp, testPayload, testSecretKey);
      
      expect(isValid).toBe(false);
    });

    it('should reject signature with tampered payload', () => {
      const timestamp = Date.now().toString();
      const signature = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      const tamperedPayload = JSON.stringify({ event: 'payment.completed', amount: 1000 }); // Changed amount
      
      const isValid = encryptionRepo.verifyWebhookSignature(signature, timestamp, tamperedPayload, testSecretKey);
      
      expect(isValid).toBe(false);
    });

    it('should reject signature with different timestamp', () => {
      const timestamp1 = Date.now().toString();
      const timestamp2 = (Date.now() + 1000).toString();
      const signature = encryptionRepo.generateWebhookSignature(testPayload, timestamp1, testSecretKey);
      
      const isValid = encryptionRepo.verifyWebhookSignature(signature, timestamp2, testPayload, testSecretKey);
      
      expect(isValid).toBe(false);
    });

    it('should reject signature with wrong secret key', () => {
      const timestamp = Date.now().toString();
      const signature = encryptionRepo.generateWebhookSignature(testPayload, timestamp, testSecretKey);
      
      const isValid = encryptionRepo.verifyWebhookSignature(signature, timestamp, testPayload, 'wrong-secret-key');
      
      expect(isValid).toBe(false);
    });

    it('should handle malformed signatures gracefully', () => {
      const timestamp = Date.now().toString();
      const malformedSignature = 'not-a-valid-base64!@#$';
      
      const isValid = encryptionRepo.verifyWebhookSignature(malformedSignature, timestamp, testPayload, testSecretKey);
      
      expect(isValid).toBe(false);
    });
  });

  describe('validateWebhookTimestamp', () => {
    it('should validate a fresh timestamp', () => {
      const timestamp = Date.now().toString();
      
      const isValid = encryptionRepo.validateWebhookTimestamp(timestamp);
      
      expect(isValid).toBe(true);
    });

    it('should reject an expired timestamp (older than 5 minutes)', () => {
      const sixMinutesAgo = (Date.now() - 6 * 60 * 1000).toString();
      
      const isValid = encryptionRepo.validateWebhookTimestamp(sixMinutesAgo);
      
      expect(isValid).toBe(false);
    });

    it('should accept timestamp within custom time window', () => {
      const oneMinuteAgo = (Date.now() - 60 * 1000).toString();
      
      const isValid = encryptionRepo.validateWebhookTimestamp(oneMinuteAgo, 120); // 2 minutes window
      
      expect(isValid).toBe(true);
    });

    it('should reject timestamp older than custom time window', () => {
      const twoMinutesAgo = (Date.now() - 2 * 60 * 1000).toString();
      
      const isValid = encryptionRepo.validateWebhookTimestamp(twoMinutesAgo, 60); // 1 minute window
      
      expect(isValid).toBe(false);
    });

    it('should reject timestamp from the future (clock skew attack)', () => {
      const tenSecondsInFuture = (Date.now() + 10 * 1000).toString();
      
      const isValid = encryptionRepo.validateWebhookTimestamp(tenSecondsInFuture);
      
      expect(isValid).toBe(false);
    });

    it('should allow small clock skew (5 seconds)', () => {
      const threeSecondsInFuture = (Date.now() + 3 * 1000).toString();
      
      const isValid = encryptionRepo.validateWebhookTimestamp(threeSecondsInFuture);
      
      expect(isValid).toBe(true);
    });

    it('should reject invalid timestamp format', () => {
      const invalidTimestamp = 'not-a-number';
      
      const isValid = encryptionRepo.validateWebhookTimestamp(invalidTimestamp);
      
      expect(isValid).toBe(false);
    });

    it('should reject empty timestamp', () => {
      const isValid = encryptionRepo.validateWebhookTimestamp('');
      
      expect(isValid).toBe(false);
    });

    it('should reject negative timestamp', () => {
      const isValid = encryptionRepo.validateWebhookTimestamp('-1000');
      
      expect(isValid).toBe(false);
    });
  });

  describe('Replay Attack Prevention', () => {
    it('should prevent replay of old webhook', () => {
      const oldTimestamp = (Date.now() - 10 * 60 * 1000).toString(); // 10 minutes old
      const signature = encryptionRepo.generateWebhookSignature(testPayload, oldTimestamp, testSecretKey);
      
      // Timestamp validation should fail
      const isTimestampValid = encryptionRepo.validateWebhookTimestamp(oldTimestamp);
      expect(isTimestampValid).toBe(false);
      
      // Even though signature is technically correct, timestamp is expired
      const isSignatureValid = encryptionRepo.verifyWebhookSignature(signature, oldTimestamp, testPayload, testSecretKey);
      expect(isSignatureValid).toBe(true); // Signature is valid
      
      // But the webhook should be rejected due to timestamp
      expect(isTimestampValid).toBe(false);
    });

    it('should allow same payload with different timestamps', () => {
      const timestamp1 = Date.now().toString();
      const timestamp2 = (Date.now() + 1000).toString();
      
      const signature1 = encryptionRepo.generateWebhookSignature(testPayload, timestamp1, testSecretKey);
      const signature2 = encryptionRepo.generateWebhookSignature(testPayload, timestamp2, testSecretKey);
      
      // Different signatures for same payload but different timestamps
      expect(signature1).not.toBe(signature2);
      
      // Both should be independently valid
      expect(encryptionRepo.verifyWebhookSignature(signature1, timestamp1, testPayload, testSecretKey)).toBe(true);
      expect(encryptionRepo.verifyWebhookSignature(signature2, timestamp2, testPayload, testSecretKey)).toBe(true);
      
      // Cross-verification should fail
      expect(encryptionRepo.verifyWebhookSignature(signature1, timestamp2, testPayload, testSecretKey)).toBe(false);
      expect(encryptionRepo.verifyWebhookSignature(signature2, timestamp1, testPayload, testSecretKey)).toBe(false);
    });
  });

  describe('Integration Test', () => {
    it('should complete full webhook verification flow', () => {
      // Simulate webhook sender
      const timestamp = Date.now().toString();
      const payload = JSON.stringify({
        event: 'payment.completed',
        transactionId: 'tx-12345',
        amount: 250.00,
        currency: 'USDT'
      });
      
      // Generate signature (what sender does)
      const signature = encryptionRepo.generateWebhookSignature(payload, timestamp, testSecretKey);
      
      // Verify timestamp (what receiver does)
      const isTimestampValid = encryptionRepo.validateWebhookTimestamp(timestamp);
      expect(isTimestampValid).toBe(true);
      
      // Verify signature (what receiver does)
      const isSignatureValid = encryptionRepo.verifyWebhookSignature(signature, timestamp, payload, testSecretKey);
      expect(isSignatureValid).toBe(true);
    });
  });
});
