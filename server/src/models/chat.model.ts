import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({ timestamps: true })
export class Chat {
  @Prop()
  from: string;
  @Prop()
  msg: string;
  @Prop()
  date: number;
  @Prop({ required: true })
  roomId: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
