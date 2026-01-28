import { IData } from "@/utils/types/types";
import { Router } from "express";
import HealthController from "./health.controller";
import HealthService from "./health.service";

const healthRouter = (data: IData) => {
  const router = Router();

  const healthController = new HealthController(new HealthService(data.model, data.repo));
  router.get('/', healthController.checkHealth);
  router.get('/detailed', healthController.checkDetailHealth);

  return router;
};

export default healthRouter;