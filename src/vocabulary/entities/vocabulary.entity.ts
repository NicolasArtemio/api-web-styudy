import { Category } from "src/common/enums/enums.category";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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


    @CreateDateColumn()
    date: Date;
}
