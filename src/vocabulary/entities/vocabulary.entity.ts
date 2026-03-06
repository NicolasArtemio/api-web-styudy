import { Category } from "src/common/enums/enums.category";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Entity()
export class Vocabulary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;

    @Column("text", { nullable: true })
    meaning: string;

    @Column('text', { nullable: true })
    example: string;

    @Column({
        type: 'enum',
        enum: Category,
        nullable: true,
    })
    category?: Category;

    @Column('text', { nullable: true })
    audioRecording: string;

    @Column({
        type: 'enum',
        enum: Difficulty,
        nullable: true,
    })
    difficulty?: Difficulty;


    @CreateDateColumn()
    date: Date;
}
