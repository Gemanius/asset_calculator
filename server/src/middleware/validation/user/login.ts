import { Request, Response, NextFunction } from "express";
import { TLogin } from "../../../types/user/login";
import joi from "joi";
import { CustomError } from "../../errorHandling";

export const LoginValidator = (req: Request, res: Response, next: NextFunction) => {
  const body: TLogin = req.body;
  const validator = joi.object<TLogin>({
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
