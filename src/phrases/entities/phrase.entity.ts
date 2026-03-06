import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PhraseCategory } from '../../phrase-categories/entities/phrase-category.entity';
import { PhraseDifficulty } from '../../common/enums/phrase-difficulty.enum';

@Entity()
export class Phrase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  english: string;

  @Column('text')
  spanish: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => PhraseCategory, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'categoryId' })
  category: PhraseCategory;

  @Column({ nullable: true })
  subcategory: string;

  @Column({
    type: 'enum',
    enum: PhraseDifficulty,
    default: PhraseDifficulty.BEGINNER,
  })
  difficulty: PhraseDifficulty;

  @Column({ default: false })
  isQuestion: boolean;

  @Column({ nullable: true })
  relatedPhraseId: number;

  @ManyToOne(() => Phrase, { nullable: true })
  @JoinColumn({ name: 'relatedPhraseId' })
  relatedPhrase: Phrase;

  @Column({ nullable: true })
  audioUrl: string;

  @Column({ type: 'text', nullable: true })
  pronunciation: string;

  @Column({ default: 0 })
  timesCompleted: number;

  @Column({ type: 'datetime', nullable: true })
  lastPracticed: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
