/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

@Schema({
  collection: 'events',
  timestamps: true,
})
export class Event extends Document {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  location: string;

  @Prop({ type: Number, required: true })
  capacity: number;

  @Prop({ type: Number, required: true, default: 0 })
  registeredCount: number;

  @Prop({ type: Boolean, default: false })
  isOnline: boolean;

  @Prop({ type: Boolean, required: true, default: false })
  isPaid: boolean;

  @Prop({ type: Number, required: false, default: null })
  price: number | null;

  @Prop({ type: Array<any>, required: true })
  tags: Array<any>;

  @Prop({ type: String, required: false })
  imageUrl: string;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, required: true })
  endDate: Date;

  @Prop({ type: Boolean, default: false })
  deleted: boolean;

  @Prop({ type: Date, default: null })
  deletedAt?: Date | null;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const EventsSchema = SchemaFactory.createForClass(Event);

export type EventsDocument = HydratedDocument<Event>;
