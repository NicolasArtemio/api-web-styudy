import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhrasesService } from './phrases.service';
import { PhrasesController } from './phrases.controller';
import { Phrase } from './entities/phrase.entity';
import { PracticeSessionsModule } from '../practice-sessions/practice-sessions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Phrase]),
    PracticeSessionsModule,
  ],
  controllers: [PhrasesController],
  providers: [PhrasesService],
  exports: [PhrasesService],
})
export class PhrasesModule {}
