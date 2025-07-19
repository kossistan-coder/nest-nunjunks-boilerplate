import { Module } from '@nestjs/common';
import { EventController } from './controllers/event.controller';
import { LibEventModule } from 'src/libs/events/lib-event.module';

@Module({
  imports: [LibEventModule],
  controllers: [EventController],
})
export class EventModule {}
