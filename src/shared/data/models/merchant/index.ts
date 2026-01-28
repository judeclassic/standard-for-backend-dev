import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ICustomSetting, IGeneralMerchant, ISecureMerchant, ISettings, ISubscription, IMerchant, IVerification, IPersonal, INotificationSetting } from './types';
import { PaymentAccount } from '../account';

@Entity('subscriptions')
export class Subscription implements ISubscription {
  @Column({ type: 'enum', enum: ['Basic', 'Pro', 'Enterprise'], default: 'Basic' })
  package!: "Basic" | "Pro" | "Enterprise";

  @Column({ type: 'enum', enum: ['active', 'canceled', 'expired'], default: 'active' })
  status!: string;

  @Column({ type: 'date' })
  start_date!: Date;

  @Column({ type: 'date' })
  end_date!: Date;
}

@Entity('custom_settings')
export class CustomSetting implements ICustomSetting {
  @Column({ type: 'varchar', default: 'light' })
  default_theme!: string;

  @Column({ type: 'boolean', default: true })
  is_accepting_request!: boolean;
}

@Entity('notification_settings')
export class NotificationSetting implements INotificationSetting {
  @Column({ type: 'boolean', default: false })
  mobile!: boolean;

  @Column({ type: 'boolean', default: false })
  communication_emails!: boolean;

  @Column({ type: 'boolean', default: false })
  marketing_emails!: boolean;

  @Column({ type: 'boolean', default: true })
  social_emails!: boolean;

  @Column({ type: 'boolean', default: true })
  security_emails!: boolean;
}

@Entity('settings')
export class Settings implements ISettings {
  @Column(() => CustomSetting)
  custom_setting!: CustomSetting;

  @Column(() => Subscription)
  subscription!: Subscription;

  @OneToMany(() => PaymentAccount, paymentAccount => paymentAccount.merchant)
  accounts!: PaymentAccount[];

  @Column(() => NotificationSetting)
  notification!: NotificationSetting;
}

@Entity('verifications')
export class Verification {
  @Column({ type: 'varchar', select: false, nullable: true  })
  code!: string;

  @Column({ type: 'date', select: false, nullable: true  })
  timeout!: Date;
}

@Entity('personals')
export class Personal implements IPersonal {
  @Column({ type: 'varchar', length: 100 })
  first_name!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  surname!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  image?: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email_address!: string;

  @Column({ type: 'varchar', default: '' })
  profile_image!: string;
  
  @Column({ type: 'varchar', default: '' })
  display_email!: string;

  @Column({ type: 'text', default: '' })
  bio!: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  language!: string;

  @Column({ type: 'varchar', array: true, default: [] })
  emails?: string[];

  @Column({ type: 'date', nullable: true  })
  dob!: Date;
}

@Entity('merchants')
@Index('email_address_idx', ['personal.email_address'], { unique: true })
export class Merchant implements IMerchant {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column(() => Personal)
  personal!: Personal;

  @Column({ type: 'varchar' })
  password!: string;

  @Column(() => Verification, { prefix: 'verification_' })
  verification!: Verification;

  @Column(() => Settings, { prefix: 'setting_' })
  setting!: Settings;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  // Static methods for response transformations
  get toGeneralResponse(): IGeneralMerchant {
    return {
      personal: this.personal,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }

  get toResponse(): ISecureMerchant {
    return {
      id: this.id,
      personal: this.personal,
      verification: this.verification,
      setting: {
        custom_setting: this.setting.custom_setting,
        notification: this.setting.notification,
        subscription: this.setting.subscription,
        accounts: this.setting.accounts?.map(account => account?.toResponse ) ?? [],
      },
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}