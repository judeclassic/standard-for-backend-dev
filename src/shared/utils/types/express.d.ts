import { IAuthAPI, IAuthApp, IAuthUser, IAuthWebhook } from "./types";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_EMAIL: string;
      ADMIN_EMAIL2: string;
      // You can add more env vars here as needed
    }
  }
  namespace Express {
    interface Request<
      P = core.ParamsDictionary,
      ResBody = any,
      ReqBody = any,
      ReqQuery = qs.ParsedQs,
      Locals extends Record<string, any> = Record<string, any>,
      IPayload = any
    > {
      userAuth: IAuthUser;
      webhookAuth: IAuthWebhook<IPayload>;
      apiAuth: IAuthAPI;
    }
  }
}