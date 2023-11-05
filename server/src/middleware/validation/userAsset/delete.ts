import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { CustomError } from "../../errorHandling";

export const DeleteAssetValidation = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const validator = Joi.object<{ id: number }>({
    id: Joi.number().exist(),
  });
  const result = validator.validate(body);
  if (!result?.error) return next();
  return next(new CustomError({ code: 400, message: result.error.message }));
};
