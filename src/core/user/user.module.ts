import { Module } from '@nestjs/common';
import UserController from './controllers/user.controller';

import { ConfigModule } from '@nestjs/config';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from 'src/libs/admin-access-control/infrastructure/repositories/user.repository';
import { LibAdminAccessControlModule } from 'src/libs/admin-access-control/lib-admin-access-control.module';

@Module({
  controllers: [UserController],
  providers: [MongooseModule, UserRepository, UserService],
  exports: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LibAdminAccessControlModule,
    // MongooseModule.forRoot(process.env.DB_URL),
  ],
})
export class UserModule {
  // This module is responsible for user-related functionality.
  // It imports the MongooseModule for database connectivity and ConfigModule for configuration management.
  // The UserController handles user-related routes, and UserService contains the business logic.
}
