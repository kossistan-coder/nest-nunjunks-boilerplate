import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { RouterModule } from '@nestjs/core';
import { WorkspaceController } from './controllers/workspace.controller';
import { EventModule } from '../event/event.module';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'workspace',
        module: UserModule,
      },
      {
        path: 'workspace',
        module: EventModule,
      },
      {
        path: 'workspace',
        module: AdminModule,
      },
    ]),
    UserModule,
    EventModule,
    AdminModule,
  ],
  controllers: [WorkspaceController],
})
export class WorkspaceModule {}
