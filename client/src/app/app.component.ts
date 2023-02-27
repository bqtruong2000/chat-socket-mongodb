import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from './models/chat.model';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  chat$!: Observable<any>;
  messages: any[] = [];
  roomId: string = '';
  newMessage: string = '';
  userName: string = '';

  constructor(private chatService: ChatService) {}

  joinRoom(roomId: string) {
    if (roomId || this.userName) {
      console.log('Already joined in: ', roomId);
      this.chat$ = this.chatService.getMessageByRoomId(roomId);
      this.chat$.subscribe((message: any) => {
        this.messages.push(message);
      });
    } else {
      window.alert('Please fill the room id and your name!');
    }
  }

  sendMessage(message: string) {
    let newMessageData: Chat = {
      roomId: this.roomId,
      msg: message,
      date: Date.now(),
      from: this.userName,
    };
    this.chatService.sendMessageByRoom(newMessageData);
  }
}
