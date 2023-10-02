import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '../core/core.module';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

// TODO: Register all modules
// TODO: Init scenes flow
// TODO: Create base scene
// TODO: Setup .env
@Module({
  imports: [CoreModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
