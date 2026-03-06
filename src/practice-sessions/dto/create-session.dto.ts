import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreatePracticeSessionDto {
  @IsNumber()
  phraseId: number;

  @IsOptional()
  @IsString()
  recordingUrl?: string;

  @IsOptional()
  @IsString()
  recordingBlob?: string;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsNumber()
  score?: number;
}
