import { Module } from '@nestjs/common';
import UserController from './controllers/user.controller';

import { ConfigModule } from '@nestjs/config';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forRoot(process.env.DB_URL),
  ],
})
export class UserModule {
  // This module is responsible for user-related functionality.
  // It imports the MongooseModule for database connectivity and ConfigModule for configuration management.
  // The UserController handles user-related routes, and UserService contains the business logic.
}
