import { Test, TestingModule } from '@nestjs/testing';
import { MistakesController } from './mistakes.controller';
import { MistakesService } from './mistakes.service';

describe('MistakesController', () => {
  let controller: MistakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MistakesController],
      providers: [MistakesService],
    }).compile();

    controller = module.get<MistakesController>(MistakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
