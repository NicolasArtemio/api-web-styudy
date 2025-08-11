import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { MistakesService } from './mistakes.service';
import { CreateMistakeDto } from './dto/create-mistake.dto';
import { UpdateMistakeDto } from './dto/update-mistake.dto';

@Controller('mistakes')
export class MistakesController {
  constructor(private readonly mistakesService: MistakesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMistakeDto: CreateMistakeDto) {
    return this.mistakesService.create(createMistakeDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.mistakesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.mistakesService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateMistakeDto: UpdateMistakeDto) {
    return this.mistakesService.update(+id, updateMistakeDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.mistakesService.remove(+id);
  }
}
