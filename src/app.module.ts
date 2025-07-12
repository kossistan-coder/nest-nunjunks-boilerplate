import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './core/notifications/notification.module';
import { WorkspaceModule } from './core/workspace/workspace.module';
import { EventController } from './core/event/controllers/event.controller';
import { EventModule } from './core/event/event.module';
import { AdminController } from './core/admin/controllers/admin.controller';
import { AdminModule } from './core/admin/admin.module';

@Module({
  imports: [WorkspaceModule, NotificationModule, EventModule, AdminModule],
  controllers: [AppController, EventController, AdminController],
  providers: [AppService],
})
export class AppModule {}
