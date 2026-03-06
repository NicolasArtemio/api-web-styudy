import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhraseCategory } from './entities/phrase-category.entity';

@Injectable()
export class PhraseCategoriesService {
  constructor(
    @InjectRepository(PhraseCategory)
    private phraseCategoryRepository: Repository<PhraseCategory>,
  ) {}

  async findAll(): Promise<PhraseCategory[]> {
    return this.phraseCategoryRepository.find({
      order: { id: 'ASC' },
    });
  }

  async findOne(id: number): Promise<PhraseCategory> {
    const category = await this.phraseCategoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async create(data: Partial<PhraseCategory>): Promise<PhraseCategory> {
    const category = this.phraseCategoryRepository.create(data);
    return this.phraseCategoryRepository.save(category);
  }

  async update(id: number, data: Partial<PhraseCategory>): Promise<PhraseCategory> {
    await this.phraseCategoryRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.phraseCategoryRepository.delete(id);
  }
}
