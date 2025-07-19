import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateOptions,
  Model,
  ObjectId,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import {
  DatabaseRepository,
  LeanedDocument,
  SelectQuery,
  SortQuery,
} from 'src/libs/databases/providers/mongo.provider';
import { Injectable } from '@nestjs/common';
import { Admin } from '../models/admin.model';

@Injectable()
export class AdminRepository extends DatabaseRepository<Admin> {
  constructor(
    @InjectModel(Admin.name, MAIN_DATABASE_CONNECTION_NAME)
    model: Model<Admin>,
  ) {
    super(model);
  }

  async createAdmin(entity: Partial<Admin>, options: CreateOptions) {
    return this.create(entity, options);
  }

  async updateAdmin(
    update: UpdateQuery<Admin> & { _id: ObjectId | string },
    options?: QueryOptions<Admin>,
  ): Promise<LeanedDocument<Admin>> {
    return this.update(update, options);
  }

  async getAdminById(id: string | ObjectId, options: QueryOptions<Admin> = {}) {
    return this.getById(id, options);
  }

  async getAdmin<Admin>(
    filters = {},
    limit?: number,
    skip?: number,
    sort?: SortQuery<Admin>,
    select?: SelectQuery<Admin>,
  ): Promise<LeanedDocument<Admin>> {
    return await this.get(filters, limit, skip, sort, select);
  }

  async getOne<Admin>(
    filters = {},
    sort?: SortQuery<Admin>,
    select?: SelectQuery<Admin>,
  ): Promise<Admin | null> {
    return this.getOne(filters, sort, select);
  }
}
