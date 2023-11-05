import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserAppAsset } from "./userAppAsset.jointable";

@Entity("app_asset")
export class AppAsset {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ name: "api_key", unique: true, nullable: false, type: "varchar", length: 15 })
  apiKey: string;
  @Column({ name: "name", type: "varchar", nullable: false, length: 30 })
  @Index()
  name: string;
  @Column({ name: "price", type: "float", default: 1 })
  price: number;
  @Column({ name: "icon", type: "varchar", length: 150 })
  icon: string;
  @OneToMany(() => UserAppAsset, (user) => user.asset)
  user: UserAppAsset[];
}
