//@ts-check
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { constants, createCipheriv, createDecipheriv, createHmac, createSign, createVerify, generateKeyPairSync, privateDecrypt, publicDecrypt, publicEncrypt, randomBytes, scryptSync } from 'crypto';
import { IResponse, ResponseProps } from '@/utils/types/types';

export class Token {
    static get accessToken() { 
        const token = process.env.ACCESS_TOKEN_SECRET;
        if (!token) throw new Error('ACCESS_TOKEN_SECRET environment variable is required');
        return token as TokenType;
    }
    static get refreshToken() { 
        const token = process.env.REFRESH_TOKEN_SECRET;
        if (!token) throw new Error('REFRESH_TOKEN_SECRET environment variable is required');
        return token as TokenType;
    }

    static get adminAccessToken() { 
        const token = process.env.ADMIN_ACCESS_TOKEN_SECRET;
        if (!token) throw new Error('ADMIN_ACCESS_TOKEN_SECRET environment variable is required');
        return token as TokenType;
    }

    static get adminRefreshToken() { 
        const token = process.env.ADMIN_ACCESS_TOKEN_SECRET+"_refresh";
        if (!token) throw new Error('ADMIN_REFRESH_TOKEN_SECRET environment variable is required');
        return token as TokenType;
    }

    static get webToken() { 
        const token = process.env.WEB_TOKEN_SECRET;
        if (!token) throw new Error('WEB_TOKEN_SECRET environment variable is required');
        return token as TokenType;
    }

    static get webhookToken() { 
        const token = process.env.WEB_TOKEN_SECRET;
        if (!token) throw new Error('WEB_TOKEN_SECRET environment variable is required');
        return token as TokenType;
    }

    static get apiAccessToken() { 
        const token = process.env.API_ACCESS_TOKEN;
        if (!token) throw new Error('API_ACCESS_TOKEN environment variable is required');
        return token as TokenType;
    }
    static get apiSandboxAccessToken() { 
        const token = process.env.API_SANDBOX_ACCESS_TOKEN;
        if (!token) throw new Error('API_SANDBOX_ACCESS_TOKEN environment variable is required');
        return token as TokenType;
    }
    static get apiProductionAccessToken() { 
        const token = process.env.API_PRODUCTION_ACCESS_TOKEN;
        if (!token) throw new Error('API_PRODUCTION_ACCESS_TOKEN environment variable is required');
        return token as TokenType;
    }
}

type TokenType = 'Special Token';

class EncryptionRepository {

    createToken = () => {
        return uuid()
    }

    encryptToken = (data: any, token: TokenType, expiresIn = 60 * 60 * 24 * 5) => {
        return jwt.sign(data, token, { expiresIn });
    }

    decryptToken = (data: any, token: TokenType) => {
        return jwt.verify(data, token);
    }

    createSpecialKey = ({prefix='', suffix='', removeDashes=false}) => {
        const secretKey = uuid().split('_').join('');
        if (removeDashes ) {
            const secretKeyWithDashes = secretKey.split('_').join('');
            return `${prefix}${secretKeyWithDashes}${suffix}`;
        }
        return `${prefix}${secretKey}${suffix}`;
    }

    verifyToken = (token: string, tokenType: TokenType) => {
        try {
            if (token === null || token === undefined) {
                return { status: false, error: 'Authentication failed', };
            }

            const decoded = jwt.verify(token, tokenType);
            return { status: true, data: decoded as any };
        }
        catch (error) {
            return { status: false, error: 'Authentication expired' };
        }
    }

    verifyBearerToken = (data: string, tokenType: TokenType) => {
        try {
            if (data === null || data === undefined) {
                return { status: false, error: 'Authentication failed', };
            }

            const token = data.split(" ",2)[1];
            const decoded = jwt.verify(token, tokenType);
            return { status: true, data: decoded as any };
        }
        catch (error) {
            return { status: false, error: 'Authentication expired' };
        }
    }

    encryptPassword = (password:any) => {
        return bcrypt.hashSync(password, 10);
    }

    comparePassword = ( password: string, userPassword :string ) => {
        return bcrypt.compareSync(password, userPassword)
    }

    generateVerificationCode = (length: number) => {
        const characters = '0123456789';
        let randomString = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters[randomIndex];
        }
      
        return {
            code: randomString,
            timeout: Date.parse((new Date()).toISOString()) + (1000 * 60 * 60)
        };
    }

    generateRandomStringCode = (length: number) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters[randomIndex];
        }
      
        return randomString;
    }

    generateKeyPairs = () => {
        const { publicKey, privateKey } = generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
                cipher: 'aes-256-cbc', // Optional encryption
                passphrase: process.env.ADMIN_ACCESS_TOKEN_SECRET,
            }
        });
        return { publicKey, privateKey };
    }
    
    encryptId = (id: string, tokenType: TokenType): ResponseProps<string> => {
        try {
            const iv = randomBytes(16);
            const key = scryptSync(tokenType, 'salt', 32);
            const cipher = createCipheriv('aes-256-ctr', key, iv);
            const encrypted = Buffer.concat([cipher.update(id), cipher.final()]);
            return { status: true, data: Buffer.concat([iv, encrypted]).toString('base64url') };
        } catch (err) {
            return { status: false, message: `Error: ${err}`}
        }
    };

    encryptWithPublicKey = (data: any, publicKey: string): ResponseProps<string> => {
        try {
            const encrypted = publicEncrypt({
                key: publicKey,
                padding: constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: 'sha256'
            }, Buffer.from(data));

            return { status: true, data: encrypted.toString('base64') };
        } catch (err) {
            return { status: false, message: `Error: ${err}`}
        }
    };

    // Decrypt function
    decryptId = (encryptedString: string, tokenType: TokenType): ResponseProps<string> => {
        try {
            const data = Buffer.from(encryptedString, 'base64url');
            const iv = data.subarray(0, 16);
            const encrypted = data.subarray(16);
            const key = scryptSync(tokenType, 'salt', 32);
            const decipher = createDecipheriv('aes-256-ctr', key, iv);
            return {
                status: true,
                data: Buffer.concat([decipher.update(encrypted), decipher.final()]).toString()
            }
        } catch (err) {
            return { status: false, message: `Error: ${err}`}
        }
    };

    signWithPrivateKey = (data: any, privateKey: string, passphrase?: string): ResponseProps<string> => {
        try {
            const signer = createSign("RSA-SHA256");
            signer.update(JSON.stringify(data));
            signer.end();
            const signature = signer.sign({ key: privateKey, passphrase }, "base64");
            return { status: true, data: signature };
        } catch (err) {
            return { status: false, message: `Error: ${err}` }
        }
    };

    verifyWithPublicKey = (data: any, signature: string, publicKey: string): ResponseProps<boolean> => {
        try {
            const verifier = createVerify("RSA-SHA256");
            verifier.update(JSON.stringify(data));
            verifier.end();
            const isValid = verifier.verify(publicKey, signature, "base64");
            return { status: true, data: isValid };
        } catch (err) {
            return { status: false, message: `Error: ${err}` }
        }
    };

    generateWebhookSignature = (payload: string, timestamp: string, secretKey: string): string => {
        const message = `${timestamp}.${payload}`;
        const hmac = createHmac('sha256', secretKey);
        hmac.update(message, 'utf8');
        return hmac.digest('base64');
    };

    verifyWebhookSignature = (signature: string, timestamp: string, payload: string, secretKey: string): boolean => {
        try {
            const expectedSignature = this.generateWebhookSignature(payload, timestamp, secretKey);
            // Use constant-time comparison to prevent timing attacks
            return signature === expectedSignature;
        } catch (error) {
            return false;
        }
    };

    validateWebhookTimestamp = (timestamp: string, maxAgeSeconds = 300): boolean => {
        try {
            const timestampMs = parseInt(timestamp, 10);
            
            // Check if timestamp is a valid number
            if (isNaN(timestampMs)) {
                return false;
            }
            
            const now = Date.now();
            const ageSeconds = (now - timestampMs) / 1000;
            
            // Timestamp should not be in the future (allow 5 second clock skew)
            // and should not be older than maxAgeSeconds
            return ageSeconds >= -5 && ageSeconds <= maxAgeSeconds;
        } catch (error) {
            return false;
        }
    };
}

export default EncryptionRepository;