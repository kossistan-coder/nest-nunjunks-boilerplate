import { Module } from '@nestjs/common';
import { LibEventDomainModule } from './domain/lib-event-domain.module';
import { LibEventInfrastructureModule } from './infrastructure/lib-event-infrastructure.module';

@Module({
  imports: [LibEventDomainModule, LibEventInfrastructureModule],
  exports: [LibEventDomainModule, LibEventInfrastructureModule],
})
export class LibEventModule {}
