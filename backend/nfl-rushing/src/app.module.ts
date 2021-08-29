import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RushingsModule } from './rushings/rushings.module';
import config from './config/keys';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RushingsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
