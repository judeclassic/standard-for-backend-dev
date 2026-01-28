import { IPaymentAccount, ISecurePaymentAccount } from "../account/types";

export type ISubscription = {
  package: "Basic" | "Pro" | "Enterprise";
  status: string;
  start_date: Date;
  end_date: Date;
};

export type ICustomSetting = {
  default_theme: string;
  is_accepting_request: boolean;
};

export type INotificationSetting = {
  mobile: boolean,
  communication_emails: boolean,
  marketing_emails: boolean,
  social_emails: boolean,
  security_emails: boolean,
};

export type ISettings = {
  custom_setting: ICustomSetting;
  subscription: ISubscription;
  accounts: IPaymentAccount[];
  notification: INotificationSetting;
};

export interface IVerification {
  code: string;
  timeout: Date;
}

export type IPersonal = {
    first_name: string;
    surname: string;
    email_address: string;
    profile_image?: string;
    dob?: Date,
    language?: string;
    display_email?: string;
    emails?: string[];
    bio?: string;
};

export type IMerchant = {
  id: string;
  personal: IPersonal;
  password: string;
  updated_at: Date;
  created_at: Date;
  verification: IVerification;
  setting: ISettings;
};

export type ISecureSettings = {
  custom_setting: ICustomSetting;
  subscription: ISubscription;
  notification: INotificationSetting;
  accounts: ISecurePaymentAccount[];
}

export type ISecureMerchant = {
  id: string;
  personal: IPersonal;
  updated_at: Date;
  created_at: Date;
  verification: IVerification;
  setting: ISecureSettings;
};

export interface IGeneralMerchant {
  personal: IPersonal;
  updated_at: Date;
  created_at: Date;
}