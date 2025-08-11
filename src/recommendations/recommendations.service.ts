import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recommendation } from './entities/recommendation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecommendationsService {
constructor(
  @InjectRepository(Recommendation)

  private readonly recommendationRepository: Repository<Recommendation>
){}

  async create(createRecommendationDto: CreateRecommendationDto): Promise<Recommendation> {
     try {
       const recommendation = this.recommendationRepository.create(createRecommendationDto);
 
       return await this.recommendationRepository.save(recommendation);
     } catch (error) {
       console.log('Error create recommendation', error);
       throw new HttpException('Error creating recommendation', HttpStatus.INTERNAL_SERVER_ERROR)
     }
   }
 
   async findAll(): Promise<Recommendation[]> {
     return await this.recommendationRepository.find()
   }
 
   async findOne(id: number): Promise<Recommendation> {
 
     const recommendation = await this.recommendationRepository.findOneBy({ id })
 
     if (!recommendation) {
       throw new NotFoundException(`recommendation with id ${id} not found`);
     }
 
     return recommendation;
   }
 
   async update(id: number, updateRecommendationDto: UpdateRecommendationDto): Promise<Recommendation> {
     try {
 
       const recommendation = await this.recommendationRepository.findOneBy({ id })
 
       if (!recommendation) {
         throw new NotFoundException(`recommendation with id ${id} not found`)
       }
 
       const updateRecommendation = this.recommendationRepository.merge(recommendation, updateRecommendationDto)
 
       return await this.recommendationRepository.save(updateRecommendation);
 
 
     } catch (error) {
       console.log('error recommendation', error);
       throw new HttpException(`Error updating recommendation`, HttpStatus.INTERNAL_SERVER_ERROR)
     }
   }
 
   async remove(id: number): Promise<Recommendation> {
 
     try {
       const recommendation = await this.recommendationRepository.findOneBy({ id })
 
       if (!recommendation) {
         throw new NotFoundException(`recommendation with id ${id}not found`)
       }
 
       return await this.recommendationRepository.remove(recommendation)
     } catch (error) {
       console.log('error remove',error);
       throw new HttpException('Error removing recommendation', HttpStatus.INTERNAL_SERVER_ERROR)
     }
   }
}
