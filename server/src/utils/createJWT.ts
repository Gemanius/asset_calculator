import jwt from "jsonwebtoken";

import { TJWTPayload } from "../types/JWTPayload";
import { processEnvs } from "../config/processENV";

export const createJwtToken = (payload: TJWTPayload): string => {
  return jwt.sign(payload, processEnvs.SECRET!, {
    expiresIn: processEnvs.JWT_EXPIRATION,
  });
};
