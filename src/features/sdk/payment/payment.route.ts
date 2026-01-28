import { NewSocketConnector } from "../../../shared/adapter/libraries/socket";
import { IData } from "@/utils/types/types";
import PaymentService from "./payment.service";
import { Router } from "express";
import PaymentSocketController from "./socket.controller";
import PaymentApiController from "./api.controller";
import { APIAuthRole } from "@/middleware/roles/api.role";

const paymentSocket = (data: IData) => {
    const paymentService = new PaymentService(data.model, data.repo);

    const socket = NewSocketConnector(data.repo.encryption);
    const socketController = new PaymentSocketController(paymentService);

    socket.route("get_options", socketController.getOptions);
    socket.route("get_recent_transactions", socketController.getRecentTransaction);
    socket.route("process_transaction", socketController.processTransaction);

    const router = Router();
    const apiController = new PaymentApiController(paymentService);

    router.get('/options', APIAuthRole(data), apiController.getOptions);
    router.get('/recent', APIAuthRole(data), apiController.getRecentTransaction);
    router.post('/process', APIAuthRole(data), apiController.processTransaction);

    return { router, socket };
}

export default paymentSocket;