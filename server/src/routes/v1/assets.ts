import { Router } from "express";
import { JWTGuard } from "../../middleware/token";
import { Request, Response, NextFunction } from "express";
import { CustomError, responseMaker } from "../../middleware/errorHandling";
import { CreateAssetValidation, UpdateAssetValidation } from "../../middleware/validation/userAsset";
import userAssetController from "../../controller/asset";
import { TUserAsset } from "../../types/userAsset/asset";
import { hasUserPermision } from "../../middleware/userAssetOperationPermision";
import { DeleteAssetValidation } from "../../middleware/validation/userAsset/delete";

export const AssetRouter = Router();

AssetRouter.get("/", [JWTGuard], async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId: string = res.locals.payload.id;
    const result = await userAssetController.getAllSelfAssets(userId);

    return responseMaker(res, { code: 200, message: "done", data: result });
  } catch (e) {
    return next(e);
  }
});
AssetRouter.post("/", [CreateAssetValidation, JWTGuard], async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId: string = res.locals.payload.id;
    const data: TUserAsset = req.body;
    const result = await userAssetController.createNewAsset(userId, data);
    return responseMaker(res, { code: 200, data: result, message: "done" });
  } catch (e) {
    return next(e);
  }
});
AssetRouter.put(
  "/",
  [UpdateAssetValidation, JWTGuard, hasUserPermision],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, ...data }: { id: number } & TUserAsset = req.body;
      await userAssetController.updateAsset(id, data);
      return responseMaker(res, { code: 200, message: "done" });
    } catch (e) {
      next(e);
    }
  }
);
AssetRouter.delete(
  "/",
  [DeleteAssetValidation, JWTGuard, hasUserPermision],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      await userAssetController.deleteAsset(id);
      return responseMaker(res, { code: 200, message: "done" });
    } catch (e) {
      next(e);
    }
  }
);
