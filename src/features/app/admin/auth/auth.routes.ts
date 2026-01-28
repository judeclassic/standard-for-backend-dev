import { Router } from "express";
import AuthService from "./auth.service";
import { IData } from "@/utils/types/types";
import { SendConfirmationDTO, LoginAdminDTO } from "./auth.types";
import { validateBody } from "@/middleware/validate";
import AuthController from "./auth.controller";

const authRouter = (data: IData) => {
    const router = Router();
    const authController = new AuthController(new AuthService(data.repo, data.model));

    authController.createAdmin([
        { name: "Payment", email_address: process.env.ADMIN_EMAIL },
    ])

    router.post('/send-code', validateBody(SendConfirmationDTO), authController.sendConfirmation);
    router.post('/verify-code', validateBody(LoginAdminDTO), authController.login);

    return router
}
export default authRouter;