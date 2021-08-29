import { Test, TestingModule } from '@nestjs/testing';
import { RushingsService } from './rushings.service';

describe('RushingService', () => {
  let service: RushingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RushingsService]
    }).compile();

    service = module.get<RushingsService>(RushingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
