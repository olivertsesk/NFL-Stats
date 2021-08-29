import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RushingsController } from './rushings.controller';
import { RushingsService } from './rushings.service';
import { RushingSchema } from './schemas/rushing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Rushing', schema: RushingSchema }])
  ],
  controllers: [RushingsController],
  providers: [RushingsService]
})
export class RushingsModule {}
