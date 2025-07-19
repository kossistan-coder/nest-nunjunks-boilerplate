import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { LibAdminAccessControlModule } from 'src/libs/admin-access-control/lib-admin-access-control.module';

@Module({
  imports: [LibAdminAccessControlModule],
  controllers: [AuthController],
})
export class AuthModule {}
