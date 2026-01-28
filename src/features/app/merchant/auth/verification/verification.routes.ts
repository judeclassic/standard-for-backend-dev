import { Router } from "express";
import VerificationController from "./verification.controller";
import VerificationService from "./verification.service";
import { IData } from "@/utils/types/types";
import { validateBody } from "../../../../../shared/adapter/middleware/validate";
import {
  PasswordVerificationDTO,
  CodeVerificationDTO
} from "./verification.types";
import { MerchantRole } from "../../../../../shared/adapter/middleware/roles/merchant.role";

const verificationRouter = (data: IData) => {
  const router = Router();
  const controller = new VerificationController(new VerificationService(data.repo, data.model));

  router.post('/password', MerchantRole(data), validateBody(PasswordVerificationDTO), controller.verifyPassword);
  router.post('/email/send', MerchantRole(data), controller.sendVerificationCode);
  router.post('/email/verify', MerchantRole(data), validateBody(CodeVerificationDTO), controller.verifyCode);

  return router;
};

export default verificationRouter;
