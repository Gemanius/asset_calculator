import { Request, Response, NextFunction } from "express";
import joi from "joi";
import { TRegister } from "../../../types/user/register";
import { CustomError } from "../../errorHandling";

export const RegisterValidator = (req: Request, res: Response, next: NextFunction) => {
  const body: TRegister = req.body;
  const validator = joi.object<TRegister>({
    username: joi
      .string()
      .exist()
      .min(4)
      .max(29)
      .regex(/^[a-zA-Z0-9._@]+$/),
    password: joi
      .string()
      .exist()
      .min(4)
      .max(29)
      .regex(/^[a-zA-Z0-9._@]+$/),
  });
  const result = validator.validate(body);
  if (!result?.error) return next();
  return next(new CustomError({ code: 400, message: result.error.message }));
};
