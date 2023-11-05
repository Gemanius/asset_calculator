import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user";

@Unique(["name", "user"])
@Entity("asset")
export class Asset {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ name: "name", type: "varchar", nullable: false, length: 30 })
  @Index()
  name: string;
  @Column({ name: "amount", type: "float", default: 0 })
  amount: number;
  @Column({ name: "price", nullable: false, type: "float" })
  price: number;
  @CreateDateColumn({ name: "created_at" })
  createAt: Date;
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
  @ManyToOne(() => User, (user: User) => user.assets)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;
}
