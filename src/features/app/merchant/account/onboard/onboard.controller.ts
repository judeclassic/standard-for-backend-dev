import { Request, Response } from 'express'
import OnboardService from './onboard.service';
import { CreateAccountDTO, IGetAccount } from './onboard.types';

class OnboardController {
    constructor(private readonly onboardService: OnboardService) {}

    getAccount = async (req: Request<IGetAccount>, res: Response) => {
        const response = await this.onboardService.getAccount(req.userAuth, req.params);
        if (!response.status) return res.status(400).json(response);
        res.json(response);
    }

    createAccount = async (req: Request<any, any, CreateAccountDTO>, res: Response) => {
        const response = await this.onboardService.createAccount(req.userAuth, req.body);
        if (!response.status) return res.status(400).json(response);
        res.json(response);
    }
}

export default OnboardController;