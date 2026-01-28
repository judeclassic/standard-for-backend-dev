import express from "express";
import SettingController from "./setting.controller";
import { MerchantRole } from "../../../../../shared/adapter/middleware/roles/merchant.role";
import SettingService from "./setting.service";
import { validateBody, validateParams } from "../../../../../shared/adapter/middleware/validate";
import { IData } from "@/utils/types/types";
import { UpdateAccountDTO, UpdateAccountWalletDTO } from "./setting.types";
import { GetAccountParams } from "../onboard/onboard.types";

const settingRouter = (data: IData) => {
    const router = express.Router();
    const settingController = new SettingController(new SettingService(data.repo, data.model))

    router.put('/:account_id', MerchantRole(data), validateParams(GetAccountParams), validateBody(UpdateAccountDTO), settingController.updateAccount);
    router.put('/wallet/:account_id', MerchantRole(data), validateParams(GetAccountParams), validateBody(UpdateAccountWalletDTO), settingController.updateAccountWallet);

    return router;
}

export default settingRouter