import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Phrase } from './entities/phrase.entity';
import { CreatePhraseDto, UpdatePhraseDto } from './dto/create-phrase.dto';

@Injectable()
export class PhrasesService {
  constructor(
    @InjectRepository(Phrase)
    private phraseRepository: Repository<Phrase>,
  ) {}

  async findAll(categoryId?: number): Promise<Phrase[]> {
    const query = this.phraseRepository.createQueryBuilder('phrase')
      .leftJoinAndSelect('phrase.category', 'category')
      .leftJoinAndSelect('phrase.relatedPhrase', 'relatedPhrase');
    
    if (categoryId) {
      query.where('phrase.categoryId = :categoryId', { categoryId });
    }
    
    return query.orderBy('phrase.id', 'ASC').getMany();
  }

  async findOne(id: number): Promise<Phrase> {
    const phrase = await this.phraseRepository.findOne({
      where: { id },
      relations: ['category', 'relatedPhrase'],
    });
    if (!phrase) {
      throw new NotFoundException(`Phrase with ID ${id} not found`);
    }
    return phrase;
  }

  async create(data: CreatePhraseDto): Promise<Phrase> {
    const phrase = this.phraseRepository.create(data);
    return this.phraseRepository.save(phrase);
  }

  async update(id: number, data: UpdatePhraseDto): Promise<Phrase> {
    await this.phraseRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.phraseRepository.delete(id);
  }

  async incrementTimesCompleted(id: number): Promise<Phrase> {
    const phrase = await this.findOne(id);
    phrase.timesCompleted += 1;
    phrase.lastPracticed = new Date();
    return this.phraseRepository.save(phrase);
  }
}
