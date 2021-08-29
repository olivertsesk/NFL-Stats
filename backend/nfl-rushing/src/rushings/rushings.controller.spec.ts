import { Test, TestingModule } from '@nestjs/testing';
import { RushingsController } from './rushings.controller';

describe('Rushings Controller', () => {
  let controller: RushingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RushingsController]
    }).compile();

    controller = module.get<RushingsController>(RushingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
