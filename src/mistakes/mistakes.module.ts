import { Module } from '@nestjs/common';
import { MistakesService } from './mistakes.service';
import { MistakesController } from './mistakes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mistake } from './entities/mistake.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Mistake])],
  controllers: [MistakesController],
  providers: [MistakesService],
})
export class MistakesModule {}
