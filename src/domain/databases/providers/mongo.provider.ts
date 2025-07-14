import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose, { Connection } from 'mongoose';
import { MAIN_DATABASE_CONNECTION_NAME } from 'src/shared/constants/databases';

@Injectable()
export class DatabaseRepository {
  connections: {
    [k: string]: mongoose.Connection;
  };

  constructor(
    @InjectConnection(MAIN_DATABASE_CONNECTION_NAME)
    private mainConnection: Connection,
  ) {
    this.connections = {
      [`${MAIN_DATABASE_CONNECTION_NAME}`]: this.mainConnection,
    };
  }

  async create<T>(
    doc: Partial<T>,
    connectionName: string,
    collectionName: string,
  ) {
    Object.assign(doc, { createdAt: new Date(), updatedAt: new Date() });

    const result = await this.connections[connectionName]
      .collection(collectionName)
      .insertOne(doc);

    // @ts-expect-error hum
    (doc as T)._id = result.insertedId;

    return doc as T;
  }

  async update<T>(
    doc: Partial<T>,
    connectionName: string,
    collectionName: string,
  ) {
    Object.assign(doc, { createdAt: new Date(), updatedAt: new Date() });

    await this.connections[connectionName]
      .collection(collectionName)
      .updateOne({ _id: (doc as any)._id }, { $set: doc });
  }

  async getById(id: string, connectionName: string, collectionName: string) {
    const result = this.connections[connectionName]
      .collection(collectionName)
      .findOne({ _id: mongoose.Types.ObjectId.createFromHexString(id) });

    return result;
  }

  async get<T>(
    filters = {},
    limit = 20,
    skip = 0,
    sort = {},
    connectionName: string,
    collectionName: string,
  ): Promise<T[]> {
    //@ts-expect-error nestjs
    return this.connections[connectionName]
      .collection(collectionName)
      .find(filters)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .toArray();
  }

  async getOne<T>(
    filters = {},
    collectionName: string,
    connectionName: string,
  ): Promise<T | null> {
    //@ts-expect-error nestjs
    return this.connections[connectionName]
      .collection(collectionName)
      .findOne(filters);
  }
}
