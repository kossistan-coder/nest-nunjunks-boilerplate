/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { User } from 'src/libs/admin-access-control/infrastructure/models/user.model';
import { Event } from './event.model';

@Schema({
  collection: 'event_user',
  timestamps: true,
})
export class EventUser extends Document {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  userId: mongoose.Schema.Types.ObjectId | string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Event.name,
    required: true,
  })
  eventId: mongoose.Schema.Types.ObjectId | string;

  @Prop({ type: Boolean, default: false })
  deleted: boolean;

  @Prop({ type: Date, default: null })
  deletedAt?: Date | null;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const EventUserSchema = SchemaFactory.createForClass(EventUser);

export type EventUserDocument = HydratedDocument<EventUser>;
