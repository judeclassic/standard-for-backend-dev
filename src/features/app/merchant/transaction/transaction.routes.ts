import { Router } from "express";
import TransactionController from "./transaction.controller";
import TransactionService from "./transaction.service";
import { GetTransactionDTO, GetTransactionsDTO } from "./transaction.type";
import { IData } from "@/utils/types/types";
import { validateParams, validateQuery } from "../../../../shared/adapter/middleware/validate";
import { MerchantRole } from "../../../../shared/adapter/middleware/roles/merchant.role";

const transactionRouter = (data: IData): Router => {
    const router = Router();
    const transactionController = new TransactionController(new TransactionService(data.model));

    router.get('/:id', MerchantRole(data), validateParams(GetTransactionDTO), transactionController.getTransaction);
    router.get('/', MerchantRole(data), validateQuery(GetTransactionsDTO), transactionController.getTransactions);

    return router
}

export default transactionRouter;