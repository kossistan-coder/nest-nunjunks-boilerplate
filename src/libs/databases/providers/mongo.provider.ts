import mongoose, {
  CreateOptions,
  Document,
  FilterQuery,
  Model,
  ObjectId,
  QueryOptions,
  SortOrder,
  UpdateQuery,
} from 'mongoose';

export type LeanedDocument<T> = Omit<T, keyof Document> & {
  _id: mongoose.Types.ObjectId;
};

export type SortQuery<T> =
  | ({ [k in keyof Partial<T>]: SortOrder } & {
      [k: string]: SortOrder;
    })
  | null;

export type SelectQuery<T> =
  | ({ [k in keyof Partial<T>]: 0 | 1 } & {
      [k: string]: 0 | 1;
    })
  | null;

export class DatabaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create<T>(
    doc: Partial<T> | Partial<T>[],
    options?: CreateOptions,
  ): Promise<LeanedDocument<T> | LeanedDocument<T>[]> {
    const isArray = Array.isArray(doc);
    Object.assign(doc, { createdAt: new Date(), updatedAt: new Date() });

    const docs = await this.model.create(isArray ? doc : [doc], options);

    const leanedDocs = docs.map((doc) => doc.toObject());

    //@ts-expect-error nestjs
    return isArray ? leanedDocs : leanedDocs[0];
  }

  update(
    update: UpdateQuery<T> & { _id: ObjectId | string },
    options: QueryOptions<T> = {},
  ): Promise<LeanedDocument<T> | null> {
    //@ts-expect-error nestjs
    return this.model
      .findOneAndUpdate({ _id: update._id }, update, {
        ...options,
        new: true,
        runValidators: true,
      })
      .lean()
      .exec();
  }

  async getById(
    id: string | ObjectId,
    options: QueryOptions<T> = {},
  ): Promise<LeanedDocument<T> | null> {
    //@ts-expect-error nestjs
    return this.model.findById(id, options).lean().exec();
  }

  async get<T>(
    filters = {},
    limit = 20,
    skip = 0,
    sort: SortQuery<T> = null,
    select: SelectQuery<T> = null,
  ): Promise<LeanedDocument<T> | null> {
    //@ts-expect-error nestjs
    return this.model
      .find(filters)
      .sort(sort)
      .limit(limit)
      .select(select ?? '')
      .skip(skip)
      .lean()
      .exec();
  }

  async getOne<T>(
    filters = {},
    sort: SortQuery<T> = null,
    select: SelectQuery<T> = null,
  ): Promise<T | null> {
    //@ts-expect-error nestjs
    return this.model.findOne(filters).sort(sort).select(select).lean().exec();
  }

  async deleteOne<T>(filters: FilterQuery<T> & { _id: ObjectId | string }) {
    return await this.model.findOneAndDelete({ _id: filters._id });
  }
}
