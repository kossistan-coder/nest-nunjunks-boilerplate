import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PermissionAction } from 'src/shared/constants/permissions';

@Schema({ timestamps: true })
export class Permission extends Document {
  @Prop({
    unique: true,
    required: true,
    type: String,
    enum: Object.values(PermissionAction),
  })
  designation: PermissionAction;

  @Prop({ required: true })
  description: string;

  @Prop({ default: true, required: false })
  active: boolean;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
