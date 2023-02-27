import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: Socket) {}

  getMessageByRoomId(roomId: string) {
    const channel = 'message-' + roomId;
    return this.socket.fromEvent(channel);
  }

  sendMessageByRoom(data: Chat) {
    this.socket.emit('message', data);
  }
}
