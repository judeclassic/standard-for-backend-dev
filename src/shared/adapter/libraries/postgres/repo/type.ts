import { ObjectLiteral, Repository, FindOptionsWhere, FindOptionsRelations } from 'typeorm';
import { IPaginateOptions } from '@/utils/types/types';

export class PaginatedEntity<T> {
  list: T[];
  total: number;
  has_next: boolean;

  constructor(param: {list: T[], total: number, has_next: boolean}) {
    this.list = param.list;
    this.total = param.total;
    this.has_next = param.has_next;
  }

  map<U>(fn: (item: T) => U): PaginatedEntity<U> {
    return new PaginatedEntity<U>({
      list: this.list.map(fn),
      total: this.total,
      has_next: this.has_next
    });
  }
}

export class AppRepository<Entity extends ObjectLiteral> extends Repository<Entity> {
  paginate = async (request: {
    where?: FindOptionsWhere<Entity>,
    options: IPaginateOptions,
    relations?: FindOptionsRelations<Entity>,
  }): Promise<PaginatedEntity<Entity>> => {
    const page = request.options.page || 1;
    const limit = request.options.limit || 10;
    const skip = (page - 1) * limit;

    const [ list, total ] = await this.findAndCount({
      where: request.where,
      take: limit,
      skip,
    });

    const has_next = page * limit < total;

    return new PaginatedEntity({
      list: list,
      total,
      has_next,
    });
  }
};