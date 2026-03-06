import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Phrase } from '../../phrases/entities/phrase.entity';

@Entity()
export class PracticeSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phraseId: number;

  @ManyToOne(() => Phrase, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'phraseId' })
  phrase: Phrase;

  @Column({ nullable: true })
  recordingUrl: string;

  @Column({ type: 'longtext', nullable: true })
  recordingBlob: string;

  @Column({ default: 0 })
  duration: number;

  @Column({ nullable: true })
  score: number;

  @CreateDateColumn()
  createdAt: Date;
}
