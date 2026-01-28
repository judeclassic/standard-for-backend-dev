import { Token } from "@/repositories/encryption";
import { IAuthResponse, IAuthUser, IError, IResponse } from "@/utils/types/types";
import { Repositories } from "@/repositories";
import { Models } from "@/models";

export type ISignIn = {
  email_address: string;
  password: string;
};

export type ISignUp = {
  first_name: string;
  second_name: string;
  email_address: string;
  password: string;
};

class AuthService {
  constructor(
    private readonly repo: Repositories,
    private readonly model: Models
  ) {}

  login = async (request: ISignIn): Promise<IResponse<IAuthResponse, IError<ISignIn>>> => {
    try {
      const merchant = await this.model.merchant.findOne({
        where: { personal: { email_address: request.email_address } },
        relations: ["personal"],
      });
      if (!merchant) return { status: false, error: [{ field: 'password', message: "invalid credentials" }] };

      const isUserValid = this.repo.encryption.comparePassword(request.password, merchant.password);
      if (!isUserValid) {
        return { status: false, error: [{ message: "invalid credentials" }] };
      }

      const auth: IAuthUser = {
        id: merchant.id,
        first_name: merchant.personal.first_name,
        email_address: merchant.personal.email_address,
        created_at: new Date(),
      };

      const accessToken = this.repo.encryption.encryptToken(auth, Token.accessToken);
      const refreshToken = this.repo.encryption.encryptToken(auth, Token.refreshToken);

      return {
        status: true,
        data: {
          id: auth.id,
          access_token: accessToken,
          refresh_token: refreshToken,
          created_at: new Date().toISOString(),
        },
      };
    } catch (err) {
      console.error("Error in login:", err);
      return { status: false, message: (err as Error).message };
    }
  };

  register = async (request: ISignUp): Promise<IResponse<IAuthResponse, IError<ISignUp>>> => {
    try {
      // Check if merchant already exists
      const existing = await this.model.merchant.findOne({
        where: { personal: { email_address: request.email_address } },
        relations: ["personal"],
      });
      if (existing) {
        return { status: false, error: [{ field: 'email_address', message: "merchant already exists" }] };
      }

      // Encrypt password
      const hashed = this.repo.encryption.encryptPassword(request.password);

      // Create new merchant (assuming cascade insert on personal & settings)
      const toCreate = this.model.merchant.create({
        personal: {
          first_name: request.first_name,
          surname: request.second_name,
          email_address: request.email_address,
        },
        password: hashed,
        setting: {
          subscription: {
            package: "Pro",
            status: 'active',
            start_date: new Date(),
            end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          },
        },
      });

      const merchant = await this.model.merchant.save(toCreate);

      // Build auth payload
      const auth: IAuthUser = {
        id: merchant.id,
        first_name: merchant.personal.first_name,
        email_address: merchant.personal.email_address,
        created_at: new Date(),
      };

      // Generate tokens
      const accessToken = this.repo.encryption.encryptToken(auth, Token.accessToken);
      const refreshToken = this.repo.encryption.encryptToken(auth, Token.refreshToken);

      return {
        status: true,
        data: {
          id: auth.id,
          access_token: accessToken,
          refresh_token: refreshToken,
          created_at: new Date().toISOString(),
        },
      };
    } catch (err) {
      console.error("Error in register:", err);
      return { status: false, message: (err as Error).message };
    }
  };
}

export default AuthService;
