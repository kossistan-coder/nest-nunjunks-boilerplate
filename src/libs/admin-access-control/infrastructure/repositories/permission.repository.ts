import { Injectable } from '@nestjs/common';
import {
  DatabaseRepository,
  LeanedDocument,
  SelectQuery,
  SortQuery,
} from 'src/libs/databases/providers/mongo.provider';
import { InjectModel } from '@nestjs/mongoose';
import {
  Model,
  CreateOptions,
  UpdateQuery,
  ObjectId,
  QueryOptions,
  FilterQuery,
} from 'mongoose';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { Permission } from '../models/permission.model';

@Injectable()
export class PermissionRepositry extends DatabaseRepository<Permission> {
  constructor(
    @InjectModel(Permission.name, MAIN_DATABASE_CONNECTION_NAME)
    model: Model<Permission>,
  ) {
    super(model);
  }

  async createPermission(entity: Partial<Permission>, options: CreateOptions) {
    return this.create(entity, options);
  }

  async updatePermission(
    update: UpdateQuery<Permission> & { _id: ObjectId | string },
    options?: QueryOptions<Permission>,
  ): Promise<LeanedDocument<Permission>> {
    return this.update(update, options);
  }

  async getPermissionById(
    id: string | ObjectId,
    options: QueryOptions<Permission> = {},
  ) {
    return this.getById(id, options);
  }

  async getPermission<Permission>(
    filters = {},
    limit?: number,
    skip?: number,
    sort?: SortQuery<Permission>,
    select?: SelectQuery<Permission>,
  ): Promise<LeanedDocument<Permission> | null> {
    return this.get(filters, limit, skip, sort, select);
  }

  async getOne<Permission>(
    filters = {},
    sort?: SortQuery<Permission>,
    select?: SelectQuery<Permission>,
  ): Promise<Permission | null> {
    return this.getOne(filters, sort, select);
  }

  async deleteOne<Permission>(
    filters: FilterQuery<Permission> & { _id: ObjectId | string },
  ) {
    return await this.deleteOne({ _id: filters._id });
  }
}
