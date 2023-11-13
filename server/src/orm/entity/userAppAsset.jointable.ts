import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";
import { AppAsset } from "./appAsset";

@Entity("user_app_asset")
export class UserAppAsset {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ name: "user_id", type: "int" })
  userId: number;
  @Column({ name: "asset_id", type: "int" })
  assetId: number;
  @Column({ name: "amount", type: "float" })
  amount: number;
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
  @ManyToOne(() => User, (user) => user.appAsset)
  user: User;
  @ManyToOne(() => AppAsset, (asset) => asset.user)
  asset: AppAsset;
}
