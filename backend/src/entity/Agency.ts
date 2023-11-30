import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
