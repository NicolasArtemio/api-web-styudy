import { Category } from "src/common/enums/enums.category";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum RecommendationType {
  BOOK = 'book',
  VIDEO = 'video',
  PODCAST = 'podcast',
  WEBSITE = 'website',
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

@Entity()
export class Recommendation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    content: string;

    @Column({
        type: 'enum',
        enum: Category,
        nullable: true,
    })
    category?: Category;

    @Column({
        type: 'enum',
        enum: RecommendationType,
        nullable: true,
    })
    type?: RecommendationType;

    @Column({ nullable: true })
    url?: string;

    @Column({
        type: 'enum',
        enum: Priority,
        nullable: true,
    })
    priority?: Priority;


    @CreateDateColumn()
    date: Date;
}
