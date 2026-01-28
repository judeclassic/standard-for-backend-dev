import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export type ICreateAdmin = {
  name: string;
  email_address: string;
}

export type ILoginAdmin = {
  email_address: string;
  code: string;
}

export type ISendConfirmation = {
  email_address: string;
}

export class LoginAdminDTO implements ILoginAdmin {
  @IsEmail({}, { message: 'Invalid email format' })
  @Transform(({ value }) => value?.trim().toLowerCase())
  email_address!: string;

  @IsString({ message: 'Code is required' })
  @Transform(({ value }) => value?.trim())
  code!: string;
}

export class SendConfirmationDTO implements ISendConfirmation {
  @IsEmail({}, { message: 'Invalid email format' })
  @Transform(({ value }) => value?.trim().toLowerCase())
  email_address!: string;
}