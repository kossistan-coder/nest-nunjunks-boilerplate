import { Module } from '@nestjs/common';
import { DefaultService } from './services/default.service';
import { EventRepository } from './repositories/event.repository';
import { EventUserRepository } from './repositories/event_user.repository';
import { Event, EventsSchema } from './models/event.model';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { DatabaseModule } from 'src/libs/databases/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventUser, EventUserSchema } from './models/event_user.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature(
      [
        {
          name: Event.name,
          schema: EventsSchema,
        },
        {
          name: EventUser.name,
          schema: EventUserSchema,
        },
      ],
      MAIN_DATABASE_CONNECTION_NAME,
    ),
  ],
  providers: [EventRepository, EventUserRepository, DefaultService],
  exports: [EventRepository, EventUserRepository, DefaultService],
})
export class LibEventInfrastructureModule {}
