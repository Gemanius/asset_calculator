import { Router, Request, Response, NextFunction } from "express";
import appAssetService from "../../controller/appAsset";
import { responseMaker } from "../../middleware/errorHandling";

export const AppAssetRouter = Router();

AppAssetRouter.get("/", [], async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await appAssetService.getAllAssets();

    return responseMaker(res, { code: 200, message: "done", data: result });
  } catch (e) {
    return next(e);
  }
});
