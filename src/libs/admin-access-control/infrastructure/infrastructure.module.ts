import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../databases/database.module';
import { UserRepository } from './repositories/user.repository';
import { AdminRepository } from './repositories/admin.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { Admin, AdminSchema } from './models/admin.model';
import { PermissionRepositry } from './repositories/permission.repository';
import { RoleRepository } from './repositories/role.repository';
import { Permission, PermissionSchema } from './models/permission.model';
import { Role, RoleSchema } from './models/role.model';
import { UserService } from 'src/core/user/services/user.service';
import { AdminService } from './services/admin.service';
import { RoleService } from './services/role.service';
import { PermissionService } from './services/permission.service';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature(
      [
        {
          name: Admin.name,
          schema: AdminSchema,
        },
        {
          name: User.name,
          schema: UserSchema,
        },
        {
          name: Permission.name,
          schema: PermissionSchema,
        },
        {
          name: Role.name,
          schema: RoleSchema,
        },
      ],
      MAIN_DATABASE_CONNECTION_NAME,
    ),
  ],
  providers: [
    //Repositories
    UserRepository,
    AdminRepository,
    PermissionRepositry,
    RoleRepository,

    //Services
    UserService,
    AdminService,
    PermissionService,
    RoleService,
  ],
  exports: [
    UserService,
    AdminService,
    PermissionService,
    RoleService,
    MongooseModule,
  ],
})
export class InfrastructureModule {}
