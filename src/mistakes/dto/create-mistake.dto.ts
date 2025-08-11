import {IsEnum, IsOptional,  IsString } from 'class-validator';
import { Category } from "src/common/enums/enums.category";
export class CreateMistakeDto {

    @IsString()
    title: string

    @IsString()
    description: string;

    @IsString()
    correction: string;

    @IsOptional()
    @IsEnum(Category)
    category?: Category;
}
