import PaymentService from "./payment.service";
import { ISocketRequest, ISocketResponse } from "../../../shared/adapter/libraries/socket";
import { IGeneralTransaction } from "@/models/transaction/type";
import { IPackageResponse, ISelectBlockchain, IVerifyTransaction, SelectBlockchainDto, VerifyTransactionDto } from "./payment.types";
import { validatorHandler } from "../../../shared/adapter/middleware/validate";
import { IPaginateResponse } from "@/utils/types/types";

class PaymentSocketController {
    constructor(private readonly paymentService: PaymentService) {}

    getOptions = async (req: ISocketRequest<{}>, res: ISocketResponse<IPackageResponse>) => {
        const response = await this.paymentService.getOptions(req.auth.account_id);
        res.callBack(response)
    }

    getRecentTransaction = async (req: ISocketRequest<{}>, res: ISocketResponse<IPaginateResponse<IGeneralTransaction>>) => {
        const response = await this.paymentService.getRecentTransaction(req.user_id, req.auth);
        res.callBack(response)
    }

    processTransaction = async (req: ISocketRequest<ISelectBlockchain>, res: ISocketResponse<IGeneralTransaction>) => {
        const validatedResult = await validatorHandler(SelectBlockchainDto, req.message)
        if (!validatedResult.status) return validatedResult;
        
        const response = await this.paymentService.processTransaction(req.user_id, req.auth, validatedResult.data);
        res.callBack(response)
    }

    reverifyTransaction = async (req: ISocketRequest<IVerifyTransaction>, res: ISocketResponse<IGeneralTransaction>) => {
        const validatedResult = await validatorHandler(VerifyTransactionDto, req.message)
        if (!validatedResult.status) return validatedResult;
        
        res.callBack(await this.paymentService.reverifyTransaction(req.user_id, req.auth, validatedResult.data));
    }
}

export default PaymentSocketController;