import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from "bcrypt";
import { Asset } from "./asset";
import { omit, pick } from "lodash";
import { UserAppAsset } from "./userAppAsset.jointable";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ name: "username", unique: true, type: "varchar", length: 30, nullable: false })
  username: string;
  @Column({ name: "password", type: "varchar", nullable: false })
  password: string;
  @OneToMany(() => Asset, (asset: Asset) => asset.user)
  assets: Asset[];
  @OneToMany(() => UserAppAsset, (appAsset) => appAsset.asset)
  appAsset: UserAppAsset[];

  async hashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 7);
    this.password = hashedPassword;
  }
  comparePassword(insertedPassword: string) {
    return bcrypt.compare(insertedPassword, this.password);
  }
  data() {
    return omit(this, "password");
  }
  jwtPayload() {
    return pick(this, ["username", "id"]);
  }
}
