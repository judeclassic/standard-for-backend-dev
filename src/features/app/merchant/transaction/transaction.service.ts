
import { Models } from "@/models";
import { IAuthUser, IPaginateResponse, IResponse } from "@/utils/types/types";
import { IGetTransaction, IGetTransactions } from "./transaction.type";
import { ISecureTransaction } from "@/models/transaction/type";
import { userLogger } from "../../../../shared/adapter/libraries/logger";
import { Between, FindOptionsWhere, In, LessThan, MoreThan } from "typeorm";
import { Transaction } from "@/models/transaction";

class TransactionService {
  constructor(private readonly models: Models) {}

  getTransaction = async (auth: IAuthUser, request: IGetTransaction): Promise<IResponse<ISecureTransaction>> => {
    try {
      const merchant = await this.models.transactions.findOne({
        where: { id: request.id, account: { merchant_id: auth.id } },
        relations: ["setting.accounts"]
      });
      if (!merchant) return { status: false, message: "unable to get user" };

      return { status: true, data: merchant.toSecureResponse };
    } catch (error) {
      console.error("Error fetching profile:", error);
      return { status: false, message: "unable to get user" };
    }
  };

  getTransactions = async (auth: IAuthUser, request: IGetTransactions): Promise<IResponse<IPaginateResponse<ISecureTransaction>>> => {
    try {
      const filters: FindOptionsWhere<Transaction> = {
        account: {
          merchant_id: auth.id,
          account_id: request.account_id
        }
      };
  
      // Apply optional filters
      if (request.status) filters.status = request.status;
  
      if (request.blockchain && request.blockchain.length > 0) {
        filters.blockchain = In(request.blockchain);
      }
  
      if (request.user || request.account) {
        if (request.user && request.account) {
          filters.created_at = Between(request.user, request.account);
        } else if (request.user) {
          filters.created_at = MoreThan(request.user);
        } else if (request.account) {
          filters.created_at = LessThan(request.account);
        }
      }
  
      const transactions = await this.models.transactions.paginate({
        where: filters,
        options: { limit: parseInt(request.limit), page: parseInt(request.page) }
      });
  
      if (!transactions) return { status: false, message: "unable to get transactions" };
  
      return {
        status: true,
        data: transactions.map((transaction) => transaction.toSecureResponse),
      };
    } catch (error) {
      userLogger.error("Error fetching transactions:", error);
      return { status: false, message: "unable to get transactions" };
    }
  };
  
}

export default TransactionService;
