import { Token } from "@/repositories/encryption";
import {
  IAuthUser,
  IAuthVerificationResponse,
  IError,
  IResponse,
} from "@/utils/types/types";
import { Repositories } from "@/repositories";
import { Models } from "@/models";
import {
  CodeVerificationDTO,
  PasswordVerificationDTO,
} from "./verification.types";

class VerificationService {
  constructor(
    private readonly repo: Repositories,
    private readonly model: Models
  ) {}

  verifyPassword = async (
    auth: IAuthUser, request: PasswordVerificationDTO
  ): Promise<IResponse<IAuthVerificationResponse, IError<PasswordVerificationDTO>>> => {
    try {
      const merchant = await this.model.merchant.findOne({
        where: { personal: { email_address: auth.email_address } },
        relations: ["personal"],
      });

      if (!merchant) {
        return {
          status: false,
          error: [{ field: "password", message: "Invalid credentials" }],
        };
      }

      const isValid = this.repo.encryption.comparePassword(
        request.password,
        merchant.password
      );

      if (!isValid) {
        return {
          status: false,
          error: [{ field: "password", message: "Invalid credentials" }],
        };
      }

      const authToken: IAuthUser = {
        id: merchant.id,
        first_name: merchant.personal.first_name,
        email_address: merchant.personal.email_address,
        created_at: new Date(),
      };

      return {
        status: true,
        data: {
          id: auth.id,
          web_token: this.repo.encryption.encryptToken(authToken, Token.webToken),
          created_at: new Date().toISOString(),
        },
      };
    } catch (err) {
      console.error("Error in verifyPassword:", err);
      return { status: false, message: (err as Error).message };
    }
  };

  sendVerificationCode = async (
    auth: IAuthUser
  ): Promise<IResponse<null, IError>> => {
    try {
      const merchant = await this.model.merchant.findOne({
        where: { personal: { email_address: auth.email_address } },
        relations: ["personal"],
      });

      if (!merchant) {
        return {
          status: false,
          error: [{ field: "email_address", message: "Email not found" }],
        };
      }

      const code = this.repo.encryption.generateVerificationCode(6);
      await this.repo.cache.set(
        `code:${auth.email_address}`,
        code.code,
        300
      ); // expires in 5 mins

      const template =
        this.repo.notification.template.generateVerificationCodeEmail(
          code.code,
          merchant.personal.first_name
        );

      await this.repo.notification.sendEmail(
        auth.email_address,
        template
      );

      return { status: true, data: null };
    } catch (err) {
      console.error("Error in sendVerificationCode:", err);
      return { status: false, message: (err as Error).message };
    }
  };

  verifyCode = async (
    auth: IAuthUser, request: CodeVerificationDTO
  ): Promise<IResponse<IAuthVerificationResponse, IError<CodeVerificationDTO>>> => {
    try {
      const merchant = await this.model.merchant.findOne({
        where: { personal: { email_address: auth.email_address } },
        relations: ["personal"],
      });

      if (!merchant) {
        return {
          status: false,
          error: [{ field: "email_address", message: "Email not found" }],
        };
      }

      const storedCode = await this.repo.cache.get( `code:${request.email_address}`);

      if (!storedCode || storedCode !== request.code) {
        return {
          status: false,
          error: [{ field: "code", message: "Invalid or expired code" }],
        };
      }

      const authToken: IAuthUser = {
        id: merchant.id,
        first_name: merchant.personal.first_name,
        email_address: merchant.personal.email_address,
        created_at: new Date(),
      };

      return {
        status: true,
        data: {
          id: auth.id,
          web_token: this.repo.encryption.encryptToken(authToken, Token.webToken),
          created_at: new Date().toISOString(),
        },
      };
    } catch (err) {
      console.error("Error in verifyCode:", err);
      return { status: false, message: (err as Error).message };
    }
  };
}

export default VerificationService;
