import { Module } from '@nestjs/common';
import { AccessControlController } from './controllers/access-control.controller';
import { LibAdminAccessControlModule } from 'src/libs/admin-access-control/lib-admin-access-control.module';

@Module({
  imports: [LibAdminAccessControlModule],
  controllers: [AccessControlController],
})
export class AccessControlModule {}
