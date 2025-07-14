import { Module } from '@nestjs/common';
import { DatabaseRepository } from './providers/mongo.provider';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.GLOBAL_MAIN_DATABASE_URI, {
      connectionName: MAIN_DATABASE_CONNECTION_NAME,
    }),
  ],
  providers: [DatabaseRepository],
  exports: [DatabaseRepository],
})
export class DatabaseModule {}
