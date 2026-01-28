import { Request, Response } from 'express';
import VerificationService from './verification.service';
import {
  PasswordVerificationDTO,
  CodeVerificationDTO,
} from './verification.types';

class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  verifyPassword = async ( req: Request<any, any, PasswordVerificationDTO>, res: Response ) => {
    const response = await this.verificationService.verifyPassword(req.userAuth, req.body);
    if (!response.status) return res.status(400).json(response);
    res.json(response);
  };

  sendVerificationCode = async ( req: Request, res: Response ) => {
    const response = await this.verificationService.sendVerificationCode(req.userAuth);
    if (!response.status) return res.status(400).json(response);
    res.json(response);
  };

  verifyCode = async ( req: Request<any, any, CodeVerificationDTO>, res: Response ) => {
    const response = await this.verificationService.verifyCode(req.userAuth, req.body);
    if (!response.status) return res.status(400).json(response);
    res.json(response);
  };
}

export default VerificationController;
