import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogsService {

  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>
  ) { }

  async create(createLogDto: CreateLogDto): Promise<Log> {
    try {
      const nuevoLog = this.logRepository.create(createLogDto)

      return await this.logRepository.save(nuevoLog);
    } catch (error) {
      console.error('Error creating log:', error);
      throw new HttpException('Error creating log', HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }

  async findAll(): Promise<Log[]> {
    return await this.logRepository.find()
  }

  async findOne(id: number): Promise<Log> {
    const log = await this.logRepository.findOneBy({ id });

    if (!log) {
      throw new NotFoundException(`Log with id ${id} not found`);
    }

    return log;
  }

  async update(id: number, updateLogDto: UpdateLogDto): Promise<Log> {

    try {
      const log = await this.logRepository.findOneBy({ id })

      if (!log) {
        throw new NotFoundException(`log with id ${id} not found`)
      }

      const updateLog = this.logRepository.merge(log, updateLogDto)

      return await this.logRepository.save(updateLog);
    } catch (error) {
       console.error('Error update log:', error);
      throw new HttpException('Error updatelog', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  async remove(id: number): Promise<Log> {
    try {
      const log = await this.logRepository.findOneBy({ id })

      if (!log) {
        throw new NotFoundException(`Log with id ${id} not found`);
      }

      return await this.logRepository.remove(log);
    } catch (error) {
       console.error('Error remove log:', error);
      throw new HttpException('Error remove log', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
