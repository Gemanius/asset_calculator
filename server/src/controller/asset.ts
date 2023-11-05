import { DataSource, Repository } from "typeorm";
import { Asset } from "../orm/entity/asset";
import dataSource from "../orm/index";
import { TUserAsset } from "../types/userAsset/asset";
import { User } from "../orm/entity/user";
import { CustomError } from "../middleware/errorHandling";

class AssetController {
  private readonly dataSource: DataSource;
  private readonly assetRepository: Repository<Asset>;
  constructor() {
    this.dataSource = dataSource;
    this.assetRepository = dataSource.manager.getRepository(Asset);
  }
  async checkAssetOwner(userId: string, assetId: number) {
    return this.assetRepository.findOne({
      select: ["id"],
      where: {
        user: { id: userId },
        id: assetId,
      },
      relations: ["user"],
    });
  }
  async createNewAsset(userId: string, data: TUserAsset) {
    const user = await this.dataSource.getRepository(User).findOne({ where: { id: userId } });
    if (!user) throw new CustomError({ code: 404, message: "user is not found" });
    const newAsset = this.assetRepository.create({
      ...data,
      user,
    });
    try {
      const { user, ...result } = await this.assetRepository.save(newAsset);
      return result;
    } catch (e) {
      throw new CustomError({ code: 400, message: "you have another asset exist with this name " });
    }
  }
  async updateAsset(id: number, data: TUserAsset) {
    await this.assetRepository.update(id, { ...data });
    return;
  }
  async deleteAsset(id: number) {
    await this.assetRepository.delete(id);
    return;
  }
  async getAllSelfAssets(userId: string) {
    const result = await this.assetRepository.find({ where: { user: { id: userId } } });
    return result;
  }
}

export default new AssetController();
