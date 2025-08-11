import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateVocabularyDto } from './dto/create-vocabulary.dto';
import { UpdateVocabularyDto } from './dto/update-vocabulary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vocabulary } from './entities/vocabulary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VocabularyService {

  constructor(
    @InjectRepository(Vocabulary)
    private readonly vocabularyRepository: Repository<Vocabulary>
  ){}

   async create(createVocabularyDto: CreateVocabularyDto): Promise<Vocabulary> {
       try {
         const vocabulary = this.vocabularyRepository.create(createVocabularyDto);
   
         return await this.vocabularyRepository.save(vocabulary);
       } catch (error) {
         console.log('Error create vocabulary', error);
         throw new HttpException('Error creating vocabulary', HttpStatus.INTERNAL_SERVER_ERROR)
       }
     }
   
     async findAll(): Promise<Vocabulary[]> {
       return await this.vocabularyRepository.find()
     }
   
     async findOne(id: number): Promise<Vocabulary> {
   
       const vocabulary = await this.vocabularyRepository.findOneBy({ id })
   
       if (!vocabulary) {
         throw new NotFoundException(`vocabulary with id ${id} not found`);
       }
   
       return vocabulary;
     }
   
     async update(id: number, updateVocabularyDto: UpdateVocabularyDto): Promise<Vocabulary> {
       try {
   
         const vocabulary = await this.vocabularyRepository.findOneBy({ id })
   
         if (!vocabulary) {
           throw new NotFoundException(`vocabulary with id ${id} not found`)
         }
   
         const updateVocabulary = this.vocabularyRepository.merge(vocabulary, updateVocabularyDto)
   
         return await this.vocabularyRepository.save(updateVocabulary);
   
   
       } catch (error) {
         console.log('error vocabulary', error);
         throw new HttpException(`Error updating vocabulary`, HttpStatus.INTERNAL_SERVER_ERROR)
       }
     }
   
     async remove(id: number): Promise<Vocabulary> {
   
       try {
         const vocabulary = await this.vocabularyRepository.findOneBy({ id })
   
         if (!vocabulary) {
           throw new NotFoundException(`vocabulary with id ${id}not found`)
         }
   
         return await this.vocabularyRepository.remove(vocabulary)
       } catch (error) {
         console.log('error vocabulary',error);
         throw new HttpException('Error removing vocabulary', HttpStatus.INTERNAL_SERVER_ERROR)
       }
     }
}
