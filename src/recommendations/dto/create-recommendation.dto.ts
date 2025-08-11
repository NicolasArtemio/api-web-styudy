import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from "src/common/enums/enums.category";
export class CreateRecommendationDto {
    @IsString()
    title: string;

    @IsString()
    content: string;
    @IsOptional()
    @IsEnum(Category)
    category?: Category;
}
