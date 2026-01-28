import { Tools } from "@/tools/index";
import { Models } from "../../data/models";
import { Repositories } from "../../data/repositories";

export type IError<FieldType = Record<string, any>> = {
  field?: keyof FieldType;
  message: string;
}

export type ISuccessResponse<Response> = {
  status: true;
  message?: string;
  data: Response;
}

export type IErrorResponse<Error = IError<Record<string, any>>> = {
  status: false;
  message?: string;
  error?: Error[];
}

export type IErrorResponseWithToken<Error = IError<Record<string, any>>> = {
  status: false;
  message?: string;
  no_token?: boolean;
  error: Error[];
}

export type ResponseProps<Response, Error = IError<Record<string, any>>> = 
  ISuccessResponse<Response> | IErrorResponse<Error> | IErrorResponseWithToken<Error>

export type IAuthUser = {
  id: string;
  first_name: string;
  email_address: string;
  created_at: Date;
}

export type IAuthWebhook<IPayload> = {
  payload: IPayload;
  signature: string;
}

export type IAuthResponse = {
  id: string;
  access_token: string;
  refresh_token: string;
  created_at: string;
}

export type IAuthVerificationResponse = {
  id: string;
  web_token: string;
  created_at: string;
}

export type IAuthAPI = {
  account_id: string;
  type: 'production' | 'sandbox';
}


export type IResponse<Response, Error  = IError<Record<string, any>>> = Promise<ResponseProps<Response, Error>>

export type IPaginateOptions = {
  page: number;
  limit: number;
}

export type IPaginateResponse<Response> = {
  total: number;
  list: Response[];
  has_next: boolean;
}

export type IData = {
  model: Models
  repo: Repositories
  tools: Tools
}