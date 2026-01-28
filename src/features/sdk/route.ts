import { IData } from "@/utils/types/types";
import paymentSocket from "./payment/payment.route";
import { NewSocketConnector } from "../../shared/adapter/libraries/socket";
import { Router } from "express";
import healthRouter from "./health/health.routes";

const sdkRouter = (data: IData) => {
    const paymentRouter = paymentSocket(data);

    const socket = NewSocketConnector(data.repo.encryption);
    socket.extendsRoutes(paymentRouter.socket)

    const router = Router();
    router.use('/health', healthRouter(data));
    router.use('/payments', paymentRouter.router)

    return { socket, router };
}

export default sdkRouter;