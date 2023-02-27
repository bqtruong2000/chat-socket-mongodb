import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Chat } from 'src/models/chat.model';
import { ChatService } from 'src/services/chat/chat.service';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  getAll() {
    return this.chatService.getAll();
  }

  @Post('create')
  createItem(@Body() chat: Chat) {
    return this.chatService.createItemm(chat);
  }

  @Get()
  getById(@Query('roomId') roomId: string) {
    return this.chatService.getByRoomId(roomId);
  }

  @Put('update')
  updateById(@Body() chat: Chat, @Query('id') _id: string) {
    return this.chatService.updateById(_id, chat);
  }

  @Delete('delete')
  deleteById(@Query('id') _id: string) {
    return this.chatService.deleteById(_id);
  }
}
