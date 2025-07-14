import { DatabaseRepository } from 'src/domain/databases/providers/mongo.provider';
import { User } from '../models/user.model';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';
import { SchemaCollectionBuilder } from 'src/domain/databases/utils/databaseCollection';

export class UserRepository {
  constructor(private readonly databaseRepository: DatabaseRepository) {}

  async create(entity: Partial<User>) {
    return this.databaseRepository.create<User>(
      entity,
      SchemaCollectionBuilder.buildSchemaUserCollectionName('user'),
      MAIN_DATABASE_CONNECTION_NAME,
    );
  }
}
