import { Models } from "@/models";
import { IAuthUser, IResponse } from "@/utils/types/types";
import { IUpdateNotification, IUpdateProfile, IUpdateProfileEmails, IUpdateProfileImage } from "./profile.type";
import { ISecureMerchant } from "@/models/merchant/types";

class ProfileService {
  constructor(private readonly models: Models) {}

  getProfile = async (auth: IAuthUser): Promise<IResponse<ISecureMerchant>> => {
    try {
      const merchant = await this.models.merchant.findOne({
        where: { id: auth.id },
        relations: { setting: { accounts: true } }
      });
      if (!merchant) return { status: false, message: "unable to retrieve merchant", no_token: true };

      return { status: true, data: merchant.toResponse };
    } catch (error) {
      console.error("Error fetching profile:", error);
      return { status: false, message: "unable to get user" };
    }
  };

  updateProfile = async (auth: IAuthUser, request: IUpdateProfile): Promise<IResponse<ISecureMerchant>> => {
    try {
      const merchant = await this.models.merchant.findOne({ where: { id: auth.id } });
      if (!merchant) return { status: false, message: "unable to update user" };

      merchant.personal = {
        first_name: request.first_name ?? merchant.personal.first_name,
        surname: request.surname ?? merchant.personal.surname,
        email_address: merchant.personal.email_address,
        emails: merchant.personal.emails,
        profile_image: merchant.personal.first_name,
        dob: request.dob ?? merchant.personal.dob,
        language: request.language ?? merchant.personal.language,
        display_email: request.display_email ?? merchant.personal.display_email,
        bio: request.bio ?? merchant.personal.bio,
      }

      const updatedMerchant = await this.models.merchant.save(merchant);

      return { status: true, data: updatedMerchant.toResponse };
    } catch (error) {
      console.error("Error updating profile:", error);
      return { status: false, message: "unable to update user" };
    }
  };

  updateNotification = async (auth: IAuthUser, request: IUpdateNotification): Promise<IResponse<ISecureMerchant>> => {
    try {
      const merchant = await this.models.merchant.findOne({ where: { id: auth.id } });
      if (!merchant) return { status: false, message: "unable to update user" };

      merchant.setting.notification = {
        mobile: request.mobile ?? merchant.setting.notification.mobile,
        communication_emails: request.communication_emails ?? merchant.setting.notification.communication_emails,
        marketing_emails: request.marketing_emails ?? merchant.setting.notification.marketing_emails,
        social_emails: request.social_emails ?? merchant.setting.notification.social_emails,
        security_emails: request.security_emails ?? merchant.setting.notification.security_emails,
      }

      const updatedMerchant = await this.models.merchant.save(merchant);

      return { status: true, data: updatedMerchant.toResponse };
    } catch (error) {
      console.error("Error updating profile:", error);
      return { status: false, message: "unable to update user" };
    }
  };

  updateProfileEmails = async (auth: IAuthUser, request: IUpdateProfileEmails): Promise<IResponse<ISecureMerchant>> => {
    try {
      const merchant = await this.models.merchant.findOne({ where: { id: auth.id } });
      if (!merchant) return { status: false, message: "unable to update user" };

      merchant.personal.emails = request.emails ?? [];

      const updatedMerchant = await this.models.merchant.save(merchant);

      return { status: true, data: updatedMerchant.toResponse };
    } catch (error) {
      console.error("Error updating profile:", error);
      return { status: false, message: "unable to update user" };
    }
  };

  updateProfileImage = async (auth: IAuthUser, request: IUpdateProfileImage): Promise<IResponse<ISecureMerchant>> => {
    try {
      const merchant = await this.models.merchant.findOne({ where: { id: auth.id } });
      if (!merchant) return { status: false, message: "Unable to update user" };

      merchant.personal.image = request.image

      const updatedMerchant = await this.models.merchant.save(merchant);

      return { status: true, data: updatedMerchant.toResponse };
    } catch (error) {
      console.error("Error updating profile:", error);
      return { status: false, message: "Unable to update user" };
    }
  };
}

export default ProfileService;
