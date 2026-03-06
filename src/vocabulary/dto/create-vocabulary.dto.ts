import {IsEnum, IsOptional,  IsString } from 'class-validator';
import { Category } from "src/common/enums/enums.category";
import { Difficulty } from "../entities/vocabulary.entity";

export class CreateVocabularyDto {

        @IsString()
        word: string;

        @IsOptional()
        @IsString()
        meaning?: string;

        @IsOptional()
        @IsString()
        example?: string;


        @IsOptional()
        @IsEnum(Category)
        category?: Category;

        @IsOptional()
        @IsString()
        audioRecording?: string;

        @IsOptional()
        @IsEnum(Difficulty)
        difficulty?: Difficulty;
}
