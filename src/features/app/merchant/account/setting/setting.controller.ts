import { Request, Response } from 'express'
import SettingService from './setting.service';
import { IGetAccount, UpdateAccountDTO, UpdateAccountWalletDTO } from './setting.types';

class SettingController {
    constructor(private readonly onboardService: SettingService) {}

    updateAccount = async (req: Request<IGetAccount, {}, UpdateAccountDTO>, res: Response) => {
        const response = await this.onboardService.updateAccount(req.userAuth, req.params.account_id, req.body);
        if (!response.status) return res.status(400).json(response);
        res.json(response);
    }

    updateAccountWallet = async (req: Request<IGetAccount, {}, UpdateAccountWalletDTO>, res: Response) => {
        const response = await this.onboardService.updateAccountWallet(req.userAuth, req.params.account_id, req.body);
        if (!response.status) return res.status(400).json(response);
        res.json(response);
    }
}

export default SettingController;