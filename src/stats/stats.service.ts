import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mistake } from '../mistakes/entities/mistake.entity';
import { Vocabulary } from '../vocabulary/entities/vocabulary.entity';
import { PracticeSession } from '../practice-sessions/entities/practice-session.entity';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Mistake)
    private mistakeRepository: Repository<Mistake>,
    @InjectRepository(Vocabulary)
    private vocabularyRepository: Repository<Vocabulary>,
    @InjectRepository(PracticeSession)
    private practiceSessionRepository: Repository<PracticeSession>,
  ) {}

  async getStats() {
    const totalMistakes = await this.mistakeRepository.count();
    const totalVocabulary = await this.vocabularyRepository.count();
    
    const recentMistakes = await this.mistakeRepository.find({
      order: { date: 'DESC' },
      take: 5,
    });

    const recentSessions = await this.practiceSessionRepository.find({
      order: { createdAt: 'DESC' },
      take: 30,
    });

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sessionDates = new Set(
      recentSessions.map(s => {
        const d = new Date(s.createdAt);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
      })
    );

    let checkDate = new Date(today);
    while (sessionDates.has(checkDate.getTime())) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    }

    const dailyGoalCompleted = sessionDates.has(today.getTime()) ? 1 : 0;

    return {
      streak,
      dailyGoal: { completed: dailyGoalCompleted, total: 5 },
      totalWords: totalVocabulary,
      pendingMistakes: totalMistakes,
      recentMistakes: recentMistakes.map(m => ({
        id: m.id,
        mistake: m.title,
        correction: m.correction,
      })),
    };
  }
}
