import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document, HydratedDocument, Types } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({ timestamps: true })
export class Role extends Document {
  @Prop({ required: true, unique: true })
  designation: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({
    required: false,
    type: [{ type: Types.ObjectId, ref: 'Permission' }],
  })
  permissions: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
