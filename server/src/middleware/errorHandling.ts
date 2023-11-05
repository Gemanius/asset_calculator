import { Response, Request, NextFunction } from "express";
import { TResponse } from "../types/response";

export class CustomError {
  code: number;
  message?: string;
  data: any;
  constructor(data: TResponse) {
    this.code = data.code;
    this.message = data.message;
    this.data = data.data;
  }
}

export const responseMaker = (response: Response, attr: TResponse) => {
  const { code, message, data } = attr;
  return response.status(code).send({ message, data });
};
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    const { code, message, data } = err;
    return res.status(code).send({ message, data });
  }
  console.error(err);
  return res.status(500).send({ message: "something went wrong on server" });
};
