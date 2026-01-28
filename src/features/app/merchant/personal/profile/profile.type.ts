import {
  IsString,
  Length,
  IsOptional,
  IsArray,
  IsEmail,
  IsBoolean,
} from 'class-validator';
import { Transform } from 'class-transformer';

// --- TYPES ---

export type IUpdateProfile = {
  first_name?: string;
  surname?: string;
  profile_image?: string;
  dob?: Date;
  language?: string;
  emails?: string[];
  display_email?: string;
  bio?: string;
};

export type IUpdateNotification = {
  mobile?: boolean,
  communication_emails?: boolean,
  marketing_emails?: boolean,
  social_emails?: boolean,
  security_emails?: boolean,
};

export type IUpdateProfileImage = {
  image?: string;
};

export type IUpdateProfileEmails = {
  emails?: string[];
};

// --- DTOs ---

export class UpdateUserDTO implements IUpdateProfile {
  @IsOptional()
  @IsString({ message: 'First name must be a string' })
  @Length(1, 50, { message: 'First name must be between 1 and 50 characters' })
  @Transform(({ value }) => value?.trim())
  first_name?: string;

  @IsOptional()
  @IsString({ message: 'Surname must be a string' })
  @Length(1, 50, { message: 'Surname must be between 1 and 50 characters' })
  @Transform(({ value }) => value?.trim())
  surname?: string;

  @IsOptional()
  @IsString({ message: 'Profile image must be a string' })
  profile_image?: string;

  @IsOptional()
  dob?: Date;

  @IsOptional()
  @IsString({ message: 'Language must be a string' })
  language?: string;

  @IsOptional()
  @IsString({ message: 'Display email must be a string' })
  display_email?: string;

  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true, message: 'Each email must be valid' })
  emails?: string[];

  @IsOptional()
  @IsString({ message: 'Bio must be a string' })
  bio?: string;
}

export class UpdateNotificationDTO implements IUpdateNotification {
  @IsOptional()
  @IsBoolean({ message: 'mobile must be a boolean' })
  mobile?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'communication emails must be a boolean' })
  communication_emails?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'marketing emails must be a boolean' })
  marketing_emails?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'social emails must be a boolean' })
  social_emails?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'security emails must be a boolean' })
  security_emails?: boolean;
};

export class UpdateProfileImageDTO implements IUpdateProfileImage {
  @IsOptional()
  @IsString({ message: 'Image must be a string (URL or base64)' })
  image?: string;
}

export class UpdateProfileEmailsDTO implements IUpdateProfileEmails {
  @IsOptional()
  @IsArray({ message: 'Emails must be an array' })
  @IsEmail({}, { each: true, message: 'Each email must be valid' })
  emails?: string[];
}
