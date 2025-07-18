import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { LibAdminAccessControlDomainModule } from './domain/lib-admin-access-control-domain.module';

@Module({
  imports: [LibAdminAccessControlDomainModule, InfrastructureModule],
  exports: [InfrastructureModule],
})
export class LibAdminAccessControlModule {}
