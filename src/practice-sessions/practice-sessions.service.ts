import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PracticeSession } from './entities/practice-session.entity';
import { CreatePracticeSessionDto } from './dto/create-session.dto';

@Injectable()
export class PracticeSessionsService {
  constructor(
    @InjectRepository(PracticeSession)
    private practiceSessionRepository: Repository<PracticeSession>,
  ) {}

  async findByPhrase(phraseId: number): Promise<PracticeSession[]> {
    return this.practiceSessionRepository.find({
      where: { phraseId },
      order: { createdAt: 'DESC' },
      take: 10,
    });
  }

  async create(data: CreatePracticeSessionDto): Promise<PracticeSession> {
    const session = this.practiceSessionRepository.create(data);
    return this.practiceSessionRepository.save(session);
  }

  async delete(id: number): Promise<void> {
    await this.practiceSessionRepository.delete(id);
  }
}
