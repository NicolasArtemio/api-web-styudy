import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhraseCategoriesService } from './phrase-categories.service';
import { PhraseCategory } from './entities/phrase-category.entity';

@Controller('phrase-categories')
export class PhraseCategoriesController {
  constructor(private readonly phraseCategoriesService: PhraseCategoriesService) {}

  @Get()
  findAll(): Promise<PhraseCategory[]> {
    return this.phraseCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PhraseCategory> {
    return this.phraseCategoriesService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<PhraseCategory>): Promise<PhraseCategory> {
    return this.phraseCategoriesService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<PhraseCategory>,
  ): Promise<PhraseCategory> {
    return this.phraseCategoriesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.phraseCategoriesService.delete(+id);
  }
}
