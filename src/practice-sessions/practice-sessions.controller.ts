import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PracticeSessionsService } from './practice-sessions.service';
import { CreatePracticeSessionDto } from './dto/create-session.dto';
import { PracticeSession } from './entities/practice-session.entity';

@Controller('practice-sessions')
export class PracticeSessionsController {
  constructor(private readonly practiceSessionsService: PracticeSessionsService) {}

  @Get('phrase/:phraseId')
  findByPhrase(@Param('phraseId') phraseId: string): Promise<PracticeSession[]> {
    return this.practiceSessionsService.findByPhrase(+phraseId);
  }

  @Post()
  create(@Body() data: CreatePracticeSessionDto): Promise<PracticeSession> {
    return this.practiceSessionsService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.practiceSessionsService.delete(+id);
  }
}
