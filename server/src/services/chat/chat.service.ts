import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, ChatDocument } from 'src/models/chat.model';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}
  async getAll(): Promise<Chat[]> {
    return await this.chatModel.find().exec();
  }

  async createItemm(chat: Chat): Promise<Chat | null> {
    try {
      let data = await this.chatModel.create(chat);
      return data as Chat;
    } catch (error) {
      return error;
    }
  }

  async getByRoomId(roomId: string): Promise<Chat | null> {
    try {
      let data = await this.chatModel.findOne({ roomId: roomId });
      return data as Chat;
    } catch (error) {
      return error;
    }
  }

  async updateById(_id: string, chat: Chat): Promise<Chat | null> {
    try {
      let data = await this.chatModel.findByIdAndUpdate(_id, chat);
      return data as Chat;
    } catch (error) {
      return error;
    }
  }

  async deleteById(_id: string): Promise<string> {
    try {
      let data = await this.chatModel.findByIdAndDelete(_id);
      return 'Deleted Successly!';
    } catch (error) {
      return error;
    }
  }
}
