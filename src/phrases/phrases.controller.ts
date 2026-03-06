import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { PracticeSessionsService } from '../practice-sessions/practice-sessions.service';
import { CreatePhraseDto, UpdatePhraseDto } from './dto/create-phrase.dto';
import { Phrase } from './entities/phrase.entity';
import { PracticeSession } from '../practice-sessions/entities/practice-session.entity';

@Controller('phrases')
export class PhrasesController {
  constructor(
    private readonly phrasesService: PhrasesService,
    private readonly practiceSessionsService: PracticeSessionsService,
  ) {}

  @Get()
  findAll(@Query('categoryId') categoryId?: string): Promise<Phrase[]> {
    return this.phrasesService.findAll(categoryId ? +categoryId : undefined);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Phrase> {
    return this.phrasesService.findOne(+id);
  }

  @Get(':id/sessions')
  getPhraseSessions(@Param('id') id: string): Promise<PracticeSession[]> {
    return this.practiceSessionsService.findByPhrase(+id);
  }

  @Post()
  create(@Body() data: CreatePhraseDto): Promise<Phrase> {
    return this.phrasesService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdatePhraseDto,
  ): Promise<Phrase> {
    return this.phrasesService.update(+id, data);
  }

  @Patch(':id/complete')
  incrementComplete(@Param('id') id: string): Promise<Phrase> {
    return this.phrasesService.incrementTimesCompleted(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.phrasesService.delete(+id);
  }
}
