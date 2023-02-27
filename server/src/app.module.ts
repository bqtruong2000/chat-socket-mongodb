import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { WebSocketGateway } from '@nestjs/websockets';
import { ChatController } from './controllers/chat/chat.controller';
import { ChatService } from './services/chat/chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './modules/chat.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/3000/'), ChatModule],
  controllers: [AppController, ChatController],
  providers: [AppService, ChatGateway, ChatService],
})
export class AppModule {}
