// shared/middleware/validate.ts
import { RequestHandler } from 'express';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { IResponse } from '@/utils/types/types';
import { logger, userLogger } from '../../libraries/logger';

type ValidationTarget = 'body' | 'query' | 'params';

export const validatorHandler = async <T extends object>(dtoClass: ClassConstructor<T>, data: object): IResponse<T> => {
  const dto = plainToInstance(dtoClass, data);
  const errors = await validate(dto, {
    whitelist: true,
    forbidNonWhitelisted: true,
  });

  if (errors.length > 0) {
    const formattedErrors = errors.map((error) => {
      userLogger.info("error: ", error );
      return {
        field: error.property,
        message: Object.values(error.constraints || {})[0] || 'Invalid field',
      }
    });

    return {
      status: false,
      message: 'Validation failed',
      error: formattedErrors,
    };
  }

  return { status: true, data: Object.assign({}, dto) }
}

const createExpressValidator = <T extends object>(
  dtoClass: ClassConstructor<T>,
  target: ValidationTarget
): RequestHandler => {
  return async (req, res, next) => {
    const data = req[target];
    const response = await validatorHandler(dtoClass, data);

    if (!response.status) return res.status(400).json(response);
    req[target] = response.data;
    next();
  };
};

// Body validation
export const validateBody = <T extends object>(dtoClass: ClassConstructor<T>) =>
  createExpressValidator(dtoClass, 'body');

// Query validation
export const validateQuery = <T extends object>(dtoClass: ClassConstructor<T>) =>
  createExpressValidator(dtoClass, 'query');

// Params validation
export const validateParams = <T extends object>(dtoClass: ClassConstructor<T>) =>
  createExpressValidator(dtoClass, 'params');

export const validateWebhookPayload = <T extends object>(dtoClass: ClassConstructor<T>): RequestHandler => {
  return async (req, res, next) => {
    const data = req['webhookAuth']['payload'];
    const response = await validatorHandler(dtoClass, data);

    if (!response.status) return res.status(400).json(response);
    req['webhookAuth']['payload'] = response.data;
    next();
  };
}