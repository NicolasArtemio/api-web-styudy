import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createRecommendationDto: CreateRecommendationDto) {
    return this.recommendationsService.create(createRecommendationDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.recommendationsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.recommendationsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateRecommendationDto: UpdateRecommendationDto) {
    return this.recommendationsService.update(+id, updateRecommendationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.recommendationsService.remove(+id);
  }
}
