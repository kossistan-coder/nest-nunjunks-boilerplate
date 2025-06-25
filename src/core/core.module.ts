import { Module } from '@nestjs/common';
import UserController from './controllers/user.controller';
import { UserService } from './services/user.service';
import { ConfigModule } from '@nestjs/config';

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
export class CoreModule {
  // This module is responsible for user-related functionality.
  // It imports the MongooseModule for database connectivity and ConfigModule for configuration management.
  // The UserController handles user-related routes, and UserService contains the business logic.
}
