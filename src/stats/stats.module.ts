import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mistake } from '../mistakes/entities/mistake.entity';
import { Vocabulary } from '../vocabulary/entities/vocabulary.entity';
import { PracticeSession } from '../practice-sessions/entities/practice-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mistake, Vocabulary, PracticeSession])],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
