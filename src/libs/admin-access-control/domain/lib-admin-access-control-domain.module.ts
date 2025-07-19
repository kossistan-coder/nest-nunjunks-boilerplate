import { Module } from '@nestjs/common';
import { AdminService } from './services/admin.service';
import { PermissionService } from './services/permission.service';
import { RoleService } from './services/role.service';
import { LibAdminAccessInfrastructureModule } from '../infrastructure/lib-admin-access-control-infrastructure.module';

@Module({
  imports: [LibAdminAccessInfrastructureModule],
  providers: [
    //Services
    AdminService,
    PermissionService,
    RoleService,
  ],
  exports: [AdminService, PermissionService, RoleService],
})
export class LibAdminAccessControlDomainModule {}
