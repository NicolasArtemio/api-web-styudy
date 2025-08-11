import { Test, TestingModule } from '@nestjs/testing';
import { MistakesService } from './mistakes.service';

describe('MistakesService', () => {
  let service: MistakesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MistakesService],
    }).compile();

    service = module.get<MistakesService>(MistakesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
