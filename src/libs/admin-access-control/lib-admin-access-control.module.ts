import { Module } from '@nestjs/common';
import { LibAdminAccessControlDomainModule } from './domain/lib-admin-access-control-domain.module';
import { LibAdminAccessInfrastructureModule } from './infrastructure/lib-admin-access-control-infrastructure.module';

@Module({
  imports: [
    LibAdminAccessControlDomainModule,
    LibAdminAccessInfrastructureModule,
  ],
  exports: [
    LibAdminAccessInfrastructureModule,
    LibAdminAccessControlDomainModule,
  ],
})
export class LibAdminAccessControlModule {}
