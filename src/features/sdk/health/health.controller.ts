import HealthService, { HealthCheck } from "./health.service";
import { ResponseProps } from "@/utils/types/types";
import { Request, Response } from "express";

class HealthController {
  constructor(private readonly healthService: HealthService) {}

  checkHealth = async (req: Request, res: Response<ResponseProps<HealthCheck>>) => {
    const response = await this.healthService.checkHealth();
    res.status(response.status ? 200 : 400).json(response);
  }

  checkDetailHealth = async (req: Request, res: Response<ResponseProps<HealthCheck>>) => {
    const response = await this.healthService.checkDetailHealth();
    res.status(response.status ? 200 : 400).json(response);
  }
}

export default HealthController;