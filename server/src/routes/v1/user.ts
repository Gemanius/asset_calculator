import { Router } from "express";
import { LoginValidator, RegisterValidator } from "../../middleware/validation/user";
import { Request, Response, NextFunction } from "express";
import { CustomError, responseMaker } from "../../middleware/errorHandling";
import UserController from "../../controller/user";
import { TRegister } from "../../types/user/register";
import { TLogin } from "../../types/user/login";

export const UserRouter = Router();

UserRouter.post("/create", [RegisterValidator], async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: TRegister = req.body;
    const result = await UserController.register(data);
    return responseMaker(res, { code: 200, data: result });
  } catch (e) {
    return next(e);
  }
});

UserRouter.post("/login", [LoginValidator], async (req: Request, res: Response, next: NextFunction) => {
  const data: TLogin = req.body;
  try {
    const result = await UserController.login(data);
    function sleep(ms = 3000) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    await sleep();
    return responseMaker(res, { code: 200, data: result });
  } catch (e) {
    next(e);
  }
});
