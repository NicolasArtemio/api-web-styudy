import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsModule } from './logs/logs.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { MistakesModule } from './mistakes/mistakes.module';
import { RecommendationsModule } from './recommendations/recommendations.module';



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
    LogsModule,
    VocabularyModule,
    MistakesModule,
    RecommendationsModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
