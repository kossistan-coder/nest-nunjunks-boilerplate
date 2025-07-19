import { Event } from './../models/event.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOptions, Model } from 'mongoose';
import { DatabaseRepository } from 'src/libs/databases/providers/mongo.provider';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';

@Injectable()
export class EventRepository extends DatabaseRepository<Event> {
  constructor(
    @InjectModel(Event.name, MAIN_DATABASE_CONNECTION_NAME)
    model: Model<Event>,
  ) {
    super(model);
  }

  async getTitle(title: string) {
    return this.get({ title, deleted: false });
  }

  async createEvent<Event>(entity: Partial<Event>, options: CreateOptions) {
    return this.create(entity, options);
  }
}
