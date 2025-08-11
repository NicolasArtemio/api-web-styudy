import { Category } from "src/common/enums/enums.category";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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


    @CreateDateColumn()
    date: Date;
}
