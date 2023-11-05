import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { TUserAsset } from "../../../types/userAsset/asset";
import { CustomError } from "../../errorHandling";

export const UpdateAssetValidation = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const validator = Joi.object<TUserAsset & { id: number }>({
    id: Joi.number().exist(),
    name: Joi.string().exist().min(3).max(30),
    price: Joi.number().exist().min(0),
    amount: Joi.number().exist().min(0),
  });
  const result = validator.validate(body);
  if (!result?.error) return next();
  return next(new CustomError({ code: 400, message: result.error.message }));
};
