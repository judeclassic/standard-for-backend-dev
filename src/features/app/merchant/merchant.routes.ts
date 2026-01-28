import { Router } from "express";
import { IData } from "@/utils/types/types";
import authRouter from "./auth/auth.routes";
import personalRouter from "./personal/personal.routes";
import accountRouter from "./account/account.routes";
import transactionRouter from "./transaction/transaction.routes";

const merchantRouter = (data: IData): Router => {
    const router = Router();

    router.use('/auth', authRouter(data));
    router.use('/personal', personalRouter(data));
    router.use('/account', accountRouter(data));
    router.use('/transaction', transactionRouter(data));

    return router;
}

export default merchantRouter;