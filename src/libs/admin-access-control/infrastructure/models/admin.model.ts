import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  active: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
