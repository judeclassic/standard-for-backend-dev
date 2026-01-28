import { Token } from "@/repositories/encryption";
import { IAuthResponse, IAuthUser, IResponse } from "@/utils/types/types";
import { Repositories } from "@/repositories";
import { Models } from "@/models";
import { ICreateAdmin, ILoginAdmin, ISendConfirmation } from "./auth.types";
import { IAdmin } from "@/models/admin";

export const EMAIL_SENT_MESSAGE = 'If the email exists, a reset link has been sent.';

class AuthService {
    constructor(
        private readonly repo: Repositories,
        private readonly model: Models
    ) {}

    // Step 1: Send Confirmation
    async createAdmin(details: ICreateAdmin[]): Promise<IResponse<IAdmin[]>> {
        try {
            const toAdmins = details.map((detail) => this.model.admin.create(detail));
            const admins = await Promise.all(toAdmins.map(admin => this.model.admin.save(admin) ))

            const data = admins[0] as unknown as IAdmin[]

            if (!data || data.length < 1) return { status: false, message: 'unable to add admins' };

            return { status: true, data: data };
        } catch (err) {
            return { status: false, message: err as string };
        }
    }

    // Step 1: Send Confirmation
    async sendConfirmation({ email_address }: ISendConfirmation): Promise<IResponse<string>> {
        try {
            const admin = await this.model.admin.findOne({ where: { email_address } });
            if (!admin) return { status: true, data: 'If the email exists, a reset link has been sent.' };

            const code = this.repo.encryption.createToken();

            await this.repo.cache.set(`code:${email_address}:${admin.id}`, code, 300); // expires in 5 mins

            // Send email with the token
            const template = this.repo.email.template.generateVerificationCodeEmail(code, admin.name);
            this.repo.email.sendEmail(admin.email_address, template);

            return { status: true, data: EMAIL_SENT_MESSAGE };
        } catch (err) {
            console.log("err: ", err);
            return { status: false, message: err as string };
        }
    }

    login = async (request: ILoginAdmin) : Promise<IResponse<IAuthResponse>> => {
        try {
            const admin = await this.model.admin.findOne({ where: { email_address: request.email_address }});
            if (!admin) return { status: false, error: [{ message: "invalid credentials" }] };

            const storedCode = await this.repo.cache.get( `code:${request.email_address}:${admin.id}`);
            if (!storedCode) return { status: false, error: [{ message: "invalid credentials" }] };
            if (storedCode !== request.code) return { status: false, error: [{ message: "invalid credentials" }] };

            const auth: IAuthUser = {
                id: admin.id,
                first_name: admin.name,
                email_address: admin.email_address,
                created_at: new Date(),
            }

            const accessToken = this.repo.encryption.encryptToken(auth, Token.adminAccessToken);
            const refreshToken = this.repo.encryption.encryptToken(auth, Token.adminRefreshToken);
            await this.repo.cache.delete( `code:${request.email_address}`);

            return { status: true, data: {
                id: auth.id,
                access_token: accessToken,
                refresh_token: refreshToken,
                created_at: (new Date()).toISOString(),
            }};
        } catch (err) {
            console.log("err: ", err);
            return { status: false, message: err as string };
        }
    }
}

export default AuthService;