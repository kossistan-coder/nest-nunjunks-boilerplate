import { Module } from '@nestjs/common';
import { EventController } from './controllers/event.controller';

@Module({
  controllers: [EventController],
})
export class EventModule {}
