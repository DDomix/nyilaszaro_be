import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ablak {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipus: string;

  @Column()
  vastagsag: number;

  @Column()
  meret: number;
}
