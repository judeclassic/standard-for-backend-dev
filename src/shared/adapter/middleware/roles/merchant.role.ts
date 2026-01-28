import { Request, Response } from "express";
import { Token } from "../../../data/repositories/encryption";
import { IData } from "../../../utils/types/types";
import { logAuthenticationFailure } from "@/libraries/logger";

export const MerchantRole = (data: IData) => {
    const MerchantRole = (req: Request, res: Response, next: () => any) => {
        try {
            if (!req.headers['authorization']) {
                logAuthenticationFailure(
                    req.ip || 'unknown', 
                    'Missing authorization header',
                    req.headers['user-agent']
                );
                res.status(500).json({ status: false, no_token: true, message: "missing auth key" });
                return;
            }
            const response = data.repo.encryption.verifyBearerToken(req.headers['authorization'], Token.accessToken);
            if ( !response.status ) {
                logAuthenticationFailure(
                    req.ip || 'unknown', 
                    'Invalid access token',
                    req.headers['user-agent']
                );
                return res.status(403).json({
                    status: response.status,
                    message: response.error,
                    no_token: true,
                    error: [{ message: response.error }]
                });
            }
            req.userAuth = response.data;
            return next();
        } catch (error) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Unable to authenticate admin',
                req.headers['user-agent']
            );
            res.status(500).json({ status: false, no_token: true, message: "unable to authenticate admin" });
        }
    }
    return MerchantRole;
}

export const RefreshMerchantRole = (data: IData) => {
    const MerchantRole = (req: Request, res: Response, next: () => any) => {
        try {
            if (!req.headers['authorization']) {
                logAuthenticationFailure(
                    req.ip || 'unknown', 
                    'Missing authorization header',
                    req.headers['user-agent']
                );
                res.status(500).json({ status: false, no_token: true, message: "missing auth key" });
                return;
            }
            const response = data.repo.encryption.verifyBearerToken(req.headers['authorization'], Token.refreshToken);
            if ( !response.status ) {
                logAuthenticationFailure(
                    req.ip || 'unknown', 
                    'Invalid access token',
                    req.headers['user-agent']
                );
                return res.status(403).json({
                    status: response.status,
                    message: response.error,
                    no_token: true,
                    error: [{ message: response.error }]
                });
            }
            req.userAuth = response.data;
            return next();
        } catch (error) {
            logAuthenticationFailure(
                req.ip || 'unknown', 
                'Unable to authenticate admin',
                req.headers['user-agent']
            );
            res.status(500).json({ status: false, no_token: true, message: "unable to authenticate admin" });
        }
    }
    return MerchantRole;
}