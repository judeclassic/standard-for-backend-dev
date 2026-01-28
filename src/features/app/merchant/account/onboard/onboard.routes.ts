import express from "express";
import OnboardController from "./onboard.controller";
import { MerchantRole } from "../../../../../shared/adapter/middleware/roles/merchant.role";
import OnboardService from "./onboard.service";
import { validateBody, validateParams } from "../../../../../shared/adapter/middleware/validate";
import { CreateAccountDTO, GetAccountParams } from "./onboard.types";
import { IData } from "@/utils/types/types";

const onboardRouter = (data: IData) => {
    const router = express.Router();
    const onboardController = new OnboardController(new OnboardService(data.repo, data.model));

    router.post('/', MerchantRole(data), validateBody(CreateAccountDTO), onboardController.createAccount);
    router.get('/:account_id', MerchantRole(data), validateParams(GetAccountParams), onboardController.getAccount);

    return router;
}

export default onboardRouter;