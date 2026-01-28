import {
  IsString,
  IsOptional,
  IsEnum,
} from "class-validator";
import { IPackage, IPackageName } from "@/models/account/types";
import { IBlockchainType } from "@/models/wallet/type";


export type ISelectBlockchain = {
  package_name?: IPackageName,
  blockchain: IBlockchainType;
};

export type IPackageResponse = {
  package_type: 'single',
  blockchains: IBlockchainType[];
} | {
  package_type: 'multiple',
  packages: IPackage[];
  blockchains: IBlockchainType[];
};

export type IVerifyTransaction = {
  transaction_id?: string,
};

enum BlockchainTypeEnum {
  BSC = "BSC",
  Ton = "Ton",
}

enum PackageType {
  SINGLE = "single",
  MULTIPLE = "multiple",
}

// ───────────────────────────────
// ISelectBlockchain Validator
// ───────────────────────────────
export class SelectBlockchainDto {
  @IsOptional()
  @IsString() // adjust if IPackageName is an enum or more complex
  package_name?: IPackageName;

  @IsEnum(BlockchainTypeEnum)
  blockchain!: IBlockchainType;
}

export class VerifyTransactionDto implements IVerifyTransaction {
  @IsString() // adjust if IPackageName is an enum or more complex
  transaction_id?: IPackageName;
}