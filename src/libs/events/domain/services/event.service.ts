import { SortQuery } from 'src/libs/databases/providers/mongo.provider';
import { ErrorResult } from 'src/shared/utils';
import { Event } from '../../infrastructure/models/event.model';
import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { EventRepository } from '../../infrastructure/repositories/event.repository';
import { EventUserRepository } from '../../infrastructure/repositories/event_user.repository';

@Injectable()
export class EventService {
  constructor(
    private readonly eventsRepository: EventRepository,
    private readonly eventsUserRepository: EventUserRepository,
  ) {}

  getAll() {
    return this.eventsRepository.get({
      deleted: false,
    });
  }

  async get(
    filter: FilterQuery<Event> = {},
    limit = 20,
    skip = 0,
    sort: SortQuery<Event> = {},
    // isAdmin = false,
  ) {
    filter = {
      ...filter,
      // isAdmin,
      deleted: false,
    };
    return this.eventsRepository.get(filter, limit, skip, sort);
  }

  async createEvent(input: Partial<Event> & { userId: string }) {
    const existingEvent = await this.eventsRepository.getTitle(input.title);

    if (existingEvent) {
      throw new ErrorResult({
        code: 409_001,
        clean_message: 'Un évenements avec ce titre existe déjà',
        message: 'Un évenements avec ce titre existe déjà',
      });
    }

    const eventDto: Partial<Event> = {};
    eventDto.title = input.title;
    eventDto.description = input.description;
    eventDto.location = input.location;
    eventDto.capacity = input.capacity;
    eventDto.isOnline = input.isOnline;
    eventDto.isPaid = input.isPaid;
    eventDto.price = input.isPaid ? input.price : null;
    eventDto.tags = input.tags;
    // TODO: A corriger après avoir implementer le fileService
    // eventDto.imageUrl = input.imageUrl;
    eventDto.startDate = input.startDate;
    eventDto.endDate = input.endDate;

    const event = await this.eventsRepository.createEvent<Event>(eventDto, {
      ordered: false,
    });

    await this.eventsUserRepository.create({
      userId: input.userId,
      eventId: event._id,
    });

    return event;
  }

  async updateEvent(id: string, input: Partial<Event>) {
    let event = await this.eventsRepository.getById(id);
    if (!event) {
      throw new ErrorResult({
        code: 400_016,
        clean_message: "L'évenement est introuvable",
        message: "L'évenement est introuvable",
      });
    }

    event.title = input.title || event.title;
    event.description = input.description || event.description;
    event.location = input.location || event.location;
    event.capacity = input.capacity || event.capacity;
    event.isOnline = input.isOnline ?? event.isOnline;
    event.isPaid = input.isPaid ?? event.isPaid;
    event.price = event.isPaid ? (input.price ?? event.price) : null;
    event.tags = input.tags || event.tags;
    event.startDate = input.startDate || event.startDate;
    event.endDate = input.endDate || event.endDate;

    event = await this.eventsRepository.update(event as any);
    if (!event) {
      throw new ErrorResult({
        code: 404_016,
        clean_message: "L'évenement est introuvable",
        message: `L'évenement [${id}] est introuvable`,
      });
    }

    return event;
  }

  async deleteEvent(id: string) {
    const event = await this.eventsRepository.getById(id);

    event.deleted = true;
    event.deletedAt = new Date();

    return this.eventsRepository.update(event as any);
  }
}
