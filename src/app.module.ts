import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './env';

@Module({
  imports: [EventModule,
    MongooseModule.forRoot(env.STRING_CONECTION)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
