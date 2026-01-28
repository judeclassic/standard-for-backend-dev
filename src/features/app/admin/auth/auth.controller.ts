import { Request, Response } from 'express';
import AuthService from './auth.service';
import { ICreateAdmin, ILoginAdmin, ISendConfirmation } from './auth.types';
import { IAuthResponse, ResponseProps } from '@/utils/types/types';

export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  createAdmin = async (emails: ICreateAdmin[]): Promise<void> => {
    const result = await this.authService.createAdmin(emails);
    if (result.status) console.log("created admin: ", [result.data])
  };

  sendConfirmation = async (req: Request<{}, any, ISendConfirmation>,  res: Response<ResponseProps<string>> ): Promise<void> => {
    const result = await this.authService.sendConfirmation(req.body);
    res.status(result.status ? 200 : 400).json(result);
  };

  login = async (req: Request<{}, any, ILoginAdmin>, res: Response<ResponseProps<IAuthResponse>>): Promise<void> => {
    const result = await this.authService.login(req.body);
    res.status(result.status ? 200 : 400).json(result);
  };
}
