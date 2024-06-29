import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  entryDate: Date;

  @Column()
  expiryDate: Date;

  @Column()
  quantity: number;

  @ManyToOne(() => User, user => user.products)
  user: User;
}
