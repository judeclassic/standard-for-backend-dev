// src/dtos/AuthDTOs.ts

import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  Matches,
  IsOptional,
  isBoolean,
  IsBoolean,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class LoginDTO {
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  @Transform(({ value }) => value?.toLowerCase().trim())
  email_address!: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @Matches(/[0-9]/, {
    message: 'Password must contain at least one number',
  })
  password!: string;

  @IsBoolean({ message: "Remember me must be boolean" })
  remember_me?: boolean;
}

export class RegisterDTO {
  @IsString({ message: 'First name must be a string' })
  @Length(1, 50, {
    message: 'First name must be between 1 and 50 characters',
  })
  @Transform(({ value }) => value?.trim())
  first_name!: string;

  @IsOptional()
  @IsString({ message: 'Second name must be a string' })
  @Length(0, 50, {
    message: 'Second name too long',
  })
  @Transform(({ value }) => value?.trim())
  second_name?: string;

  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  @Transform(({ value }) => value?.toLowerCase().trim())
  email_address!: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @Matches(/[0-9]/, {message: 'Password must contain at least one number'})
  password!: string;

  @IsBoolean({ message: "Remember me must be boolean" })
  remember_me?: boolean;
}
