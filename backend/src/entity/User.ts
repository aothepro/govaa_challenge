import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Agency } from "./Agency";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  jobDescription: string;

  @Column()
  email: string;

  @Column({ unique: true })
  govEmail: string;

  @ManyToOne(() => Agency)
  @JoinColumn()
  agency: Agency;
}
