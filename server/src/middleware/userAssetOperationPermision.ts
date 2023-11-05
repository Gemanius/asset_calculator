import { Request, Response, NextFunction } from "express";
import { CustomError } from "./errorHandling";
import userAssetController from "../controller/asset";

export const hasUserPermision = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = res.locals.payload.id;
  const { id }: { id: number } & any = req.body;
  const hasPermision = await userAssetController.checkAssetOwner(userId, id);
  if (!hasPermision) return next(new CustomError({ code: 403, message: "this asset does not belongs to you ..." }));
  return next();
};
