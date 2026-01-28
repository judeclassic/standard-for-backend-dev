
import { IsArray, IsDate, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { IBlockchainType } from '@/models/wallet/type';
// import { IPaginateOptions } from '@/utils/types/types';

export type IGetTransaction = {
    id: string;
};

export class GetTransactionDTO implements IGetTransaction {
  @IsString({ message: 'ID must be a string' })
  @Transform(({ value }) => value?.trim())
  id!: string;
}

export type IGetTransactions = {
  account_id: string;
  page: string;
  limit: string;
  status?: 'success' | 'pending' | 'failed';
  blockchain?: IBlockchainType[];
  amount_min?: string;
  amount_max?: string;
  user?: Date;
  account?: Date;
};

export class GetTransactionsDTO implements IGetTransactions {
  @IsString({ message: 'ID must be a string' })
  @Transform(({ value }) => value?.trim())
  account_id!: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  page!: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  limit!: string;

  @IsOptional()
  @IsIn(['success', 'pending', 'failed'], { message: 'Invalid status' })
  status?: 'success' | 'pending' | 'failed';

  @IsOptional()
  @Transform(({ value }) => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return value.split(',').map(v => v.trim()).filter(Boolean);
    return [];
  })
  @IsArray()
  @IsIn(['Ton', 'BSC'], {
    each: true,
    message: 'Blockchain must be one of: Ton, BSC',
  })
  blockchain?: IBlockchainType[];

  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  @IsNumber({}, { message: 'amount_min must be a number' })
  amount_min?: string;

  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  @IsNumber({}, { message: 'amount_max must be a number' })
  amount_max?: string;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'from must be a valid date' })
  from?: Date;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'to must be a valid date' })
  to?: Date;
}