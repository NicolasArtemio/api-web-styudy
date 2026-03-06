import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsModule } from './logs/logs.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { MistakesModule } from './mistakes/mistakes.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { PhraseCategoriesModule } from './phrase-categories/phrase-categories.module';
import { PhrasesModule } from './phrases/phrases.module';
import { PracticeSessionsModule } from './practice-sessions/practice-sessions.module';
import { PhraseCategory } from './phrase-categories/entities/phrase-category.entity';
import { Phrase } from './phrases/entities/phrase.entity';
import { PracticeSession } from './practice-sessions/entities/practice-session.entity';
import { SeedService } from './seed/seed.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'estudiar_inglesdb',
    autoLoadEntities: true,
    synchronize: true,
  }),
    TypeOrmModule.forFeature([PhraseCategory, Phrase, PracticeSession]),
    LogsModule,
    VocabularyModule,
    MistakesModule,
    RecommendationsModule,
    PhraseCategoriesModule,
    PhrasesModule,
    PracticeSessionsModule,
  ],
  controllers: [],
  providers: [SeedService],
})
export class AppModule { }