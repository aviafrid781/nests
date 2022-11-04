import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class User {
  @Prop({
    type: String,
  })
  fname: string;
  @Prop({
    type: String,
  })
  lname: string;
  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: String,
  })
  email: string;
  @Prop({
    type: Number,
  })
  phone: number;
  @Prop({
    type: String,
  })
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
