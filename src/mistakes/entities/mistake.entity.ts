import { Category } from "src/common/enums/enums.category";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mistake {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column('text', { nullable: true })
    correction: string;

    @Column({
        type: 'enum',
        enum: Category,
        nullable: true,
    })
    category?: Category;


    @CreateDateColumn()
    date: Date;
}
