import { Request, Response } from "express";
import { IAuthAPI, IData } from "../../../utils/types/types";
import { Token } from "../../../data/repositories/encryption";
import { logAuthenticationFailure, logDataAccess } from "../../libraries/logger";

export const APIAuthRole = (data: IData) =>  (req: Request, res: Response, next: () => any) => {
    try {
        if (!req.headers['authorization']) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Missing authorization header',
                req.headers['user-agent']
            );
            res.status(403).json({ status: false, noToken: true, message: "missing auth key" });
            return;
        }
        const [ ,token ] = req.headers['authorization'].split(' ');
        const stringifiedAccount = data.repo.encryption.decryptId(token, Token.apiAccessToken as "Special Token");
        if (!stringifiedAccount.status) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Invalid access token',
                req.headers['user-agent']
            );
            return res.status(403).json({ status: false, code: 403, noToken: true, message: 'Invalid access-token' });
        }

        const account: IAuthAPI = JSON.parse(stringifiedAccount.data);
        if (!account.account_id) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Missing account_id in token',
                req.headers['user-agent']
            );
            return res.status(403).json({ status: false, code: 403, noToken: true, message: 'Invalid access-token' });
        }
        
        // Log successful authentication
        logDataAccess(account.account_id, 'API', 'authenticate', req.ip || 'unknown');
        
        req.apiAuth = { 
            account_id: account.account_id,
            type: account.type
        };
        return next();
    } catch (error) {
        logAuthenticationFailure(
            req.ip || 'unknown', 
            'Authentication error: ' + (error as Error).message,
            req.headers['user-agent']
        );
        res.status(500).json({ status: false, noToken: true, message: "unable to authenticate api" });
    }
}


export const WebhookAuthRole = (data: IData) =>  async (req: Request, res: Response, next: () => any) => {
    try {
        if (!req.headers['access-token']) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Missing webhook access token',
                req.headers['user-agent']
            );
            res.status(500).json({ status: false, noToken: true, message: "missing auth key" });
            return;
        }
        const token = req.headers['access-token'] as string;
        const stringifiedAccount = data.repo.encryption.decryptId(token, Token.apiAccessToken as "Special Token");
        if (!stringifiedAccount.status) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Invalid webhook access token',
                req.headers['user-agent']
            );
            return res.status(403).json({ status: false, code: 403, noToken: true, message: 'Invalid access-token' });
        }

        const decoded = JSON.parse(stringifiedAccount.data);
        if (!decoded.id) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Missing account ID in webhook token',
                req.headers['user-agent']
            );
            return res.status(403).json({ status: false, code: 403, noToken: true, message: 'Invalid access-token' });
        }

        const account = await data.model.accounts.findOne({ where: { id: decoded.id } });
        if (!account) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Account not found for webhook token',
                req.headers['user-agent']
            );
            return res.status(403).json({ status: false, code: 403, noToken: true, message: 'Invalid access-token' });
        }

        const { payload, signature } = req.body;
        const isValid = data.repo.encryption.verifyWithPublicKey(
            payload,
            signature,
            decoded.type === 'production' ? account.api_info.secret_key : account.sandbox_info.secret_key,
        );

        if (!isValid.status) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Invalid webhook signature',
                req.headers['user-agent']
            );
            throw new Error("Invalid signature 🚨");
        }

        // Log successful webhook authentication
        logDataAccess(decoded.id, 'WEBHOOK', 'authenticate', req.ip || 'unknown');

        req.apiAuth = { account_id: account.id, type: decoded.type };
        req.webhookAuth = { payload, signature };

        return next();
    } catch (error) {
        logAuthenticationFailure(
            req.ip || 'unknown', 
            'Webhook authentication error: ' + (error as Error).message,
            req.headers['user-agent']
        );
        res.status(500).json({ status: false, noToken: true, message: "unable to authenticate webhook" });
    }
}