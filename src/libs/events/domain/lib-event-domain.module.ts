import { Module } from '@nestjs/common';
import { LibEventInfrastructureModule } from '../infrastructure/lib-event-infrastructure.module';
import { EventService } from './services/event.service';

@Module({
  imports: [LibEventInfrastructureModule],
  providers: [EventService],
  exports: [EventService],
})
export class LibEventDomainModule {}
