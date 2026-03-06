import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PracticeSessionsService } from './practice-sessions.service';
import { PracticeSessionsController } from './practice-sessions.controller';
import { PracticeSession } from './entities/practice-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PracticeSession])],
  controllers: [PracticeSessionsController],
  providers: [PracticeSessionsService],
  exports: [PracticeSessionsService],
})
export class PracticeSessionsModule {}
