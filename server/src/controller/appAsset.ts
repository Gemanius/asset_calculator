import { DataSource, Repository } from "typeorm";
import { Asset } from "../orm/entity/asset";
import dataSource from "../orm/index";
import { TUserAsset } from "../types/userAsset/asset";
import { User } from "../orm/entity/user";
import { CustomError } from "../middleware/errorHandling";
import { AppAsset } from "../orm/entity/appAsset";

class AppAssetController {
  private readonly dataSource: DataSource;
  private readonly appAssetRepository: Repository<AppAsset>;
  constructor() {
    this.dataSource = dataSource;
    this.appAssetRepository = dataSource.manager.getRepository(AppAsset);
  }
  async getAllAssets() {
    return this.appAssetRepository.find();
  }
}

export default new AppAssetController();
