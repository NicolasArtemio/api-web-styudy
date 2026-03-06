import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseCategoriesService } from './phrase-categories.service';
import { PhraseCategoriesController } from './phrase-categories.controller';
import { PhraseCategory } from './entities/phrase-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseCategory])],
  controllers: [PhraseCategoriesController],
  providers: [PhraseCategoriesService],
  exports: [PhraseCategoriesService],
})
export class PhraseCategoriesModule {}
