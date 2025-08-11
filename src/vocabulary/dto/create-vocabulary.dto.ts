import {IsEnum, IsOptional,  IsString } from 'class-validator';
import { Category } from "src/common/enums/enums.category";

export class CreateVocabularyDto {

        @IsString()
        word: string;

        @IsString()
        meaning: string;

        @IsString()
        example: string;


        @IsOptional()
        @IsEnum(Category)
        category?: Category;
}
