import "dotenv";
import express from "express";
import "reflect-metadata";
import DataSource from "./orm/index";
import bodyparser from "body-parser";
import { errorHandler } from "./middleware/errorHandling";
import { UserRouter as UserRouterV1 } from "./routes/v1/user";
import { AssetRouter as AssetRouterV1 } from "./routes/v1/assets";
import { AppAssetRouter as appAssetRouterV1 } from "./routes/v1/appAsset";
import cors from "cors";
import { RunSeed } from "./orm/seeds";
import { schedulerTask } from "./cronjob";

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.use("/v1/user", UserRouterV1);
app.use("/v1/asset", AssetRouterV1);
app.use("/v1/appAsset", appAssetRouterV1);
app.use(errorHandler);

(async () => {
  await DataSource.initialize();
  await RunSeed(DataSource);
})();

schedulerTask.start();

app.listen(4000, () => {
  console.log("app is running...");
});
