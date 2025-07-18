import { Injectable } from '@nestjs/common';
import {
  DatabaseRepository,
  LeanedDocument,
  SelectQuery,
  SortQuery,
} from 'src/libs/databases/providers/mongo.provider';
import { Role } from '../models/role.model';
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

@Injectable()
export class RoleRepository extends DatabaseRepository<Role> {
  constructor(
    @InjectModel(Role.name, MAIN_DATABASE_CONNECTION_NAME)
    model: Model<Role>,
  ) {
    super(model);
  }

  async createRole(entity: Partial<Role>, options: CreateOptions) {
    return this.create(entity, options);
  }

  async updateRole(
    update: UpdateQuery<Role> & { _id: ObjectId | string },
    options?: QueryOptions<Role>,
  ): Promise<LeanedDocument<Role>> {
    return this.update(update, options);
  }

  async getRoleById(id: string | ObjectId, options: QueryOptions<Role> = {}) {
    return this.getById(id, options);
  }

  async getRole<Role>(
    filters = {},
    limit?: number,
    skip?: number,
    sort?: SortQuery<Role>,
    select?: SelectQuery<Role>,
  ): Promise<LeanedDocument<Role> | null> {
    return this.get(filters, limit, skip, sort, select);
  }

  async getOne<Role>(
    filters = {},
    sort?: SortQuery<Role>,
    select?: SelectQuery<Role>,
  ): Promise<Role | null> {
    return this.getOne(filters, sort, select);
  }

  async deleteOne<Role>(
    filters: FilterQuery<Role> & { _id: ObjectId | string },
  ) {
    return await this.deleteOne({ _id: filters._id });
  }
}
