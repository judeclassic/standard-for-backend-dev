// src/dtos/AuthDTOs.ts

import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Matches,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class PasswordVerificationDTO {
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @Matches(/[0-9]/, {
    message: 'Password must contain at least one number',
  })
  password!: string;
}

export class CodeVerificationDTO {
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  @Transform(({ value }) => value?.toLowerCase().trim())
  email_address!: string;

  @IsString({ message: 'Code must be a string' })
  @IsNotEmpty({ message: 'Verification code is required' })
  @Matches(/^[0-9]{6}$/, {
    message: 'Code must be a 6-digit number',
  })
  code!: string;
}
