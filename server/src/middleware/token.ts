import { Request, Response, NextFunction } from "express";
import { verify, decode } from "jsonwebtoken";
import { processEnvs } from "../config/processENV";
import { CustomError } from "./errorHandling";
import { omit } from "lodash";
import { TJWTPayload } from "../types/JWTPayload";

export const JWTGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.slice(7);
  if (!token) return next(new CustomError({ code: 400, message: "token is not imported" }));
  try {
    verify(token, processEnvs.SECRET);
  } catch (e) {
    return next(new CustomError({ code: 401, message: "jwt is not validated" }));
  }
  const decodedToken = <any & TJWTPayload>decode(token);
  res.locals.payload = omit(decodedToken, ["iat", "exp"]);
  return next();
};
