import { DatabaseRepository } from 'src/libs/databases/providers/mongo.provider';
import { User } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends DatabaseRepository<User> {
  constructor(
    @InjectModel(User.name, MAIN_DATABASE_CONNECTION_NAME) model: Model<User>,
  ) {
    super(model);
  }
}
