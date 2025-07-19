import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../databases/database.module';
import { AdminRepository } from './repositories/admin.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { Admin, AdminSchema } from './models/admin.model';
import { PermissionRepositry } from './repositories/permission.repository';
import { RoleRepository } from './repositories/role.repository';
import { Permission, PermissionSchema } from './models/permission.model';
import { Role, RoleSchema } from './models/role.model';
import { DefaultService } from './services/default.service';

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
    AdminRepository,
    PermissionRepositry,
    RoleRepository,
    DefaultService,
  ],
  exports: [
    AdminRepository,
    PermissionRepositry,
    RoleRepository,
    DefaultService,
    MongooseModule,
  ],
})
export class LibAdminAccessInfrastructureModule {}
