import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './core/notifications/notification.module';
import { WorkspaceModule } from './core/workspace/workspace.module';
import { EventController } from './core/event/controllers/event.controller';
import { EventModule } from './core/event/event.module';
import { AuthModule } from './core/auth/auth.module';

import { AccessControlController } from './core/access-control/controllers/access-control.controller';
import { AccessControlModule } from './core/access-control/access-control.module';
import { LibAdminAccessControlDomainModule } from './libs/admin-access-control/domain/lib-admin-access-control-domain.module';
import { LibAdminAccessControlModule } from './libs/admin-access-control/lib-admin-access-control.module';
import { LibEventModule } from './libs/events/lib-event.module';

@Module({
  imports: [
    WorkspaceModule,
    NotificationModule,
    EventModule,
    AuthModule,
    AccessControlModule,
    LibEventModule,
    LibAdminAccessControlModule,
    LibAdminAccessControlDomainModule,
  ],
  controllers: [AppController, EventController, AccessControlController],
  providers: [AppService],
})
export class AppModule {}
