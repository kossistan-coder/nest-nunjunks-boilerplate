import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatabaseRepository } from 'src/libs/databases/providers/mongo.provider';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { EventUser } from '../models/event_user.model';

@Injectable()
export class EventUserRepository extends DatabaseRepository<EventUser> {
  constructor(
    @InjectModel(EventUser.name, MAIN_DATABASE_CONNECTION_NAME)
    model: Model<EventUser>,
  ) {
    super(model);
  }
}
