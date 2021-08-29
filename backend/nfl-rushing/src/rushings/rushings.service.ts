import { HttpStatus, Injectable } from '@nestjs/common';
import { Rushing } from './interfaces/rushing.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class RushingsService {
  constructor(
    @InjectModel('Rushing') private readonly rushingModel: Model<Rushing>
  ) {}

  async getAll(): Promise<Rushing[]> {
    return await this.rushingModel.find();
  }

  async findOne(id: string): Promise<Rushing> {
    return await this.rushingModel.findOne({ _id: id });
  }

  async createOne(rushing: Rushing): Promise<Rushing> {
    const recordExist = await this.rushingModel.exists({
      Player: rushing.Player
    });
    if (!recordExist) {
      return await new this.rushingModel(rushing).save();
    } else {
      console.log('-----ERROR----');
      throw new HttpException(
        { errcode: 400, errmsg: 'Player name must be unique' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async bulkCreate(rushings: Rushing[]) {
    const x = [];
    rushings.forEach((element: Rushing) => {
      this.createOne(element).then((res) => x.push(res));
    });
  }

  async delete(id: string) {
    return await this.rushingModel.findByIdAndRemove(id);
  }
}
