import { DataSource } from "typeorm";
import appAssetSeedUp from "./appAssets";

export const RunSeed = async (dataSource: DataSource) => {
  await appAssetSeedUp(dataSource);
};
