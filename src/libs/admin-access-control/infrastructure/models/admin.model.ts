import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface AdminAttrs {
  email: string;
  password: string;
  active?: boolean;
}
@Schema()
export class Admin extends Document implements AdminAttrs {
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  active: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
