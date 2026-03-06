import { IsEnum, IsOptional, IsString, IsUrl } from 'class-validator';
import { Category } from "src/common/enums/enums.category";
import { RecommendationType, Priority } from "../entities/recommendation.entity";

export class CreateRecommendationDto {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsOptional()
    @IsEnum(Category)
    category?: Category;

    @IsOptional()
    @IsEnum(RecommendationType)
    type?: RecommendationType;

    @IsOptional()
    @IsUrl({}, { message: 'URL debe ser válida' })
    url?: string;

    @IsOptional()
    @IsEnum(Priority)
    priority?: Priority;
}
