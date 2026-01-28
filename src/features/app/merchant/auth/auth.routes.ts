import { Router } from "express";
import AuthController from "./auth.controller";
import AuthService from "./auth.service";
import { IData } from "@/utils/types/types";
import { validateBody } from "../../../../shared/adapter/middleware/validate";
import { LoginDTO, RegisterDTO } from "./auth.types"
import verificationRouter from "./verification/verification.routes";

const authRouter = (data: IData) => {
    const router = Router();
    const authController = new AuthController(new AuthService(data.repo, data.model));

    router.post('/sign-up', validateBody(RegisterDTO), authController.register);
    router.post('/sign-in', validateBody(LoginDTO), authController.login);

    router.use('/verify', verificationRouter(data));

    return router
}

export default authRouter;