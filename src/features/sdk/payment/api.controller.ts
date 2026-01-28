import { Request, Response } from 'express'
import { IPaginateResponse, ResponseProps } from '@/utils/types/types';
import { ISecureMerchant } from '@/models/merchant/types';
import PaymentService from './payment.service';
import { IGeneralTransaction } from '@/models/transaction/type';
import { IPackageResponse, ISelectBlockchain, IVerifyTransaction } from './payment.types';

class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    getOptions = async (req: Request<{}>, res: Response<ResponseProps<IPackageResponse>>) => {
        const response = await this.paymentService.getOptions(req.apiAuth.account_id);
        res.status(response.status ? 200 : 400).json(response);
    }

    getRecentTransaction = async (req: Request<{}, any, any, { email: string }>, res: Response<ResponseProps<IPaginateResponse<IGeneralTransaction>>>) => {
        const response = await this.paymentService.getRecentTransaction(req.query.email, req.apiAuth);
        res.status(response.status ? 200 : 400).json(response);
    }

    processTransaction = async (req: Request<{}, any, { email: string } & ISelectBlockchain>, res: Response<ResponseProps<IGeneralTransaction>>) => {
        const response = await this.paymentService.processTransaction(req.body.email, req.apiAuth, req.body);
        res.status(response.status ? 200 : 400).json(response);
    }
}

export default PaymentController;