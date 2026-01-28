import {
  IsString,
  Length,
  IsEnum,
  IsOptional,
  IsUrl,
  IsArray,
  ValidateNested,
  IsNumber,
  ArrayMinSize,
  Matches,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { IAccountType, IInterval, IPackageName, IPackageType, IPlanType } from '@/models/account/types';
import { IBlockchainType } from '@/models/wallet/type';
import { IsValidWalletAddresses } from '../../../../../shared/adapter/middleware/validate/wallet';

// Enums
export enum AccountType {
  SUBSCRIPTION = 'subscription',
  ONE_TIME = 'one-time',
}

export enum PackageType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}

export enum Interval {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export enum PackageName {
  BASIC = 'basic',
  PRO = 'pro',
  ENTERPRISE = 'enterprise',
}

export enum PlanType {
  FREE = 'free',
  STANDARD = 'standard',
  CONTINUOUS = 'continuous',
}

export enum BlockchainType {
  BSC = 'BSC',
  TON = 'Ton',
}
// Interface for a package
export interface IPackage {
  name: IPackageName;
  description?: string;
  amount: number;
}

// Interface for creating an account
export interface ICreateAccount {
  name: string;
  description: string;
  account_type: IAccountType;
  package_type: IPackageType;
  interval: IInterval;
  packages: IPackage[];
  duration?: string;
  webhook_url?: string;
  supported_chains: string[];
  wallet_addresses: Record<IBlockchainType, string>;
  plan: IPlanType;
}


export interface IUpdateAccount {
  name: string;
  description: string;
  account_type: IAccountType;
  package_type: IPackageType;
  interval: IInterval;
  packages: IPackage[];
  duration?: string;
}


export interface IUpdateAccountWallet {
  webhook_url?: string;
  supported_chains: string[];
  wallet_addresses: Record<IBlockchainType, string>;
  plan: IPlanType;
}

export type IGetAccount = {
  account_id: string;
}

// DTO for individual package
export class PackageDTO implements IPackage {
  @IsEnum(PackageName, {
    message: 'Package name must be one of: basic, pro, enterprise',
  })
  name!: IPackageName;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  amount!: number;
}

// Main DTO
export class CreateAccountDTO implements ICreateAccount {
  @IsString()
  @Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
  @Transform(({ value }) => value?.trim())
  name!: string;

  @IsString()
  description!: string;

  @IsEnum(AccountType)
  account_type!: IAccountType;

  @IsEnum(PackageType)
  package_type!: IPackageType;

  @IsEnum(Interval)
  interval!: Interval;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PackageDTO)
  packages!: PackageDTO[];

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Webhook URL must be a valid URL' })
  webhook_url?: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'Select at least one chain' })
  @IsEnum(BlockchainType, { each: true, message: 'Invalid blockchain in supported_chains' })
  supported_chains!: IBlockchainType[];

  @IsEnum(PlanType)
  plan!: IPlanType;

  @IsValidWalletAddresses({
    message: 'Invalid wallet address format for one or more chains',
  })
  wallet_addresses!: Record<IBlockchainType, string>;
}

export class GetAccountParams implements IGetAccount {
  @IsString()
  account_id!: string;
}


export class UpdateAccountDTO implements IUpdateAccount {
  @IsString()
  @Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
  @Transform(({ value }) => value?.trim())
  name!: string;

  @IsString()
  description!: string;

  @IsEnum(AccountType)
  account_type!: IAccountType;

  @IsEnum(PackageType)
  package_type!: IPackageType;

  @IsEnum(Interval)
  interval!: Interval;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PackageDTO)
  packages!: PackageDTO[];

  @IsOptional()
  @IsString()
  duration?: string;
}

export class UpdateAccountWalletDTO implements IUpdateAccountWallet {

  @IsOptional()
  @IsUrl({}, { message: 'Webhook URL must be a valid URL' })
  webhook_url?: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'Select at least one chain' })
  @IsEnum(BlockchainType, { each: true, message: 'Invalid blockchain in supported_chains' })
  supported_chains!: IBlockchainType[];

  @IsEnum(PlanType)
  plan!: IPlanType;

  @IsValidWalletAddresses({
    message: 'Invalid wallet address format for one or more chains',
  })
  wallet_addresses!: Record<IBlockchainType, string>;
}