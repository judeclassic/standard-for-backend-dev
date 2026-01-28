import { Router } from "express";
import { getApiRequests } from "../shared/adapter/libraries/logger";
import { IData } from "@/utils/types/types";
import { NewSocketConnector } from "../shared/adapter/libraries/socket";
import sdkRouter from "./sdk/route";
import merchantRouter from "./app/merchant/merchant.routes";
import adminRouter from "./app/admin/admin.routes";
import healthRouter from "./sdk/health/health.routes";
import { adminRateLimit, isAdminRequest } from "@/middleware/limiter";

const router = (data: IData) => {
    const router = {
        router: Router(),
        socket: NewSocketConnector(data.repo.encryption),
    }

    const _adminRouter = adminRouter(data);
    const _merchantRouter = merchantRouter(data);
    const _sdkRouter = sdkRouter(data);

    router.router.use(getApiRequests());

    // Admin routes with special security middleware
    // - adminRateLimit: Stricter rate limiting (50 req/15min)
    // - isAdminRequest: Logs all admin access for security monitoring
    router.router.use('/api/admin', adminRateLimit, isAdminRequest, _adminRouter);

    router.router.use('/api/merchant', _merchantRouter);
    router.router.use('/sdk-api', _sdkRouter.router);

    router.socket.extendsRoutes(_sdkRouter.socket)

    return router;
}

export default router;