import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMistakeDto } from './dto/create-mistake.dto';
import { UpdateMistakeDto } from './dto/update-mistake.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mistake } from './entities/mistake.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MistakesService {

  constructor(
    @InjectRepository(Mistake)
    private readonly mistakeRepository: Repository<Mistake>
  ) { }

  async create(createMistakeDto: CreateMistakeDto): Promise<Mistake> {
    try {
      const mistake = this.mistakeRepository.create(createMistakeDto);

      return await this.mistakeRepository.save(mistake);
    } catch (error) {
      console.log('Error create mistake', error);
      throw new HttpException('Error creating log', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll(): Promise<Mistake[]> {
    return await this.mistakeRepository.find()
  }

  async findOne(id: number): Promise<Mistake> {

    const mistake = await this.mistakeRepository.findOneBy({ id })

    if (!mistake) {
      throw new NotFoundException(`mistake with id ${id} not found`);
    }

    return mistake;
  }

  async update(id: number, updateMistakeDto: UpdateMistakeDto): Promise<Mistake> {
    try {

      const mistake = await this.mistakeRepository.findOneBy({ id })

      if (!mistake) {
        throw new NotFoundException(`mistake with id ${id} not found`)
      }

      const updateMistake = this.mistakeRepository.merge(mistake, updateMistakeDto)

      return await this.mistakeRepository.save(updateMistake);


    } catch (error) {
      console.log('error update', error);
      throw new HttpException(`Error updating mistake`, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async remove(id: number): Promise<Mistake> {

    try {
      const mistake = await this.mistakeRepository.findOneBy({ id })

      if (!mistake) {
        throw new NotFoundException(`mistake with id ${id}not found`)
      }

      return await this.mistakeRepository.remove(mistake)
    } catch (error) {
      console.log('error remove',error);
      throw new HttpException('Error removing mistake', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
