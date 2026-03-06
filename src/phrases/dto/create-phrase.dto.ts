import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum } from 'class-validator';
import { PhraseDifficulty } from '../../common/enums/phrase-difficulty.enum';

export class CreatePhraseDto {
  @IsString()
  english: string;

  @IsString()
  spanish: string;

  @IsNumber()
  categoryId: number;

  @IsOptional()
  @IsString()
  subcategory?: string;

  @IsOptional()
  @IsEnum(PhraseDifficulty)
  difficulty?: PhraseDifficulty;

  @IsOptional()
  @IsBoolean()
  isQuestion?: boolean;

  @IsOptional()
  @IsNumber()
  relatedPhraseId?: number;

  @IsOptional()
  @IsString()
  audioUrl?: string;

  @IsOptional()
  @IsString()
  pronunciation?: string;
}

export class UpdatePhraseDto {
  @IsOptional()
  @IsString()
  english?: string;

  @IsOptional()
  @IsString()
  spanish?: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @IsOptional()
  @IsString()
  subcategory?: string;

  @IsOptional()
  @IsEnum(PhraseDifficulty)
  difficulty?: PhraseDifficulty;

  @IsOptional()
  @IsBoolean()
  isQuestion?: boolean;

  @IsOptional()
  @IsNumber()
  relatedPhraseId?: number;

  @IsOptional()
  @IsString()
  audioUrl?: string;

  @IsOptional()
  @IsString()
  pronunciation?: string;

  @IsOptional()
  @IsNumber()
  timesCompleted?: number;

  @IsOptional()
  lastPracticed?: Date;
}
