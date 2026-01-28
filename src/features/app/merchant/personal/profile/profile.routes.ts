import { Router } from "express";
import ProfileController from "./profile.controller";
import ProfileService from "./profile.service";
import { UpdateNotificationDTO, UpdateUserDTO } from "./profile.type";
import { IData } from "@/utils/types/types";
import { validateBody } from "../../../../../shared/adapter/middleware/validate";
import { MerchantRole } from "../../../../../shared/adapter/middleware/roles/merchant.role";
import { universalUpload } from "../../../../../shared/adapter/middleware/files";

const profileRouter = (data: IData): Router => {
    const router = Router();
    const profileController = new ProfileController(new ProfileService(data.model));

    router.get('/', MerchantRole(data), profileController.getProfile);
    router.put('/', MerchantRole(data), validateBody(UpdateUserDTO), profileController.updateProfile);
    router.put('/notification', MerchantRole(data), validateBody(UpdateNotificationDTO), profileController.updateNotification);
    router.put('/image', MerchantRole(data), universalUpload(data.repo.file), profileController.updateProfile);
    router.put('/emails', MerchantRole(data), universalUpload(data.repo.file), profileController.updateProfile);

    return router
}

export default profileRouter;