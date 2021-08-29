import { Body, Delete, Param, Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { CreateRushingDto } from './dto/create-rushing.dto';
import { Rushing } from './interfaces/rushing.interface';
import { RushingsService } from './rushings.service';

@Controller('api/rushings')
export class RushingsController {
  constructor(private readonly rushingsService: RushingsService) {}

  @Get()
  async getAll(): Promise<Rushing[]> {
    return this.rushingsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Rushing> {
    return this.rushingsService.findOne(id);
  }

  @Post()
  bulkCreate(@Body() createRushingDto: CreateRushingDto[]) {
    return this.rushingsService.bulkCreate(createRushingDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Rushing> {
    return this.rushingsService.delete(id);
  }
}
