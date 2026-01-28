import { Router } from "express";
import onboardRouter from "./onboard/onboard.routes";
import { IData } from "../../../../shared/utils/types/types";
import settingRouter from "./setting/setting.routes";

const accountRouter = (data: IData) => {
    const router = Router();

    router.use('/onboard', onboardRouter(data));
    router.use('/setting', settingRouter(data));
    return router;
}

export default accountRouter;