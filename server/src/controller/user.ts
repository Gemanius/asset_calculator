import { DataSource, Repository } from "typeorm";
import { User } from "../orm/entity/user";
import dataSource from "../orm/index";
import { TRegister } from "../types/user/register";
import { CustomError } from "../middleware/errorHandling";
import { TLogin } from "../types/user/login";
import { createJwtToken } from "../utils/createJWT";

class UserController {
  repository: Repository<User>;
  dataSource: DataSource;
  constructor() {
    this.repository = dataSource.getRepository(User);
    this.dataSource = dataSource;
  }

  async register(data: TRegister) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const { username, password } = data;
      let user = await queryRunner.manager.getRepository(User).findOne({ where: { username } });
      if (user) throw new CustomError({ code: 400, message: "another user exists with this username" });
      user = new User();
      user.username = username;
      await user.hashPassword(password);
      await queryRunner.manager.getRepository(User).save(user);
      await queryRunner.commitTransaction();
      const jwt = await createJwtToken(user.jwtPayload());
      return { ...user.data(), accessToken: jwt };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
  async login(data: TLogin) {
    const { username, password } = data;
    const user = await this.repository.findOne({ where: { username } });
    const isPasswordCorrect = await user?.comparePassword(password);
    if (!user || !isPasswordCorrect) throw new CustomError({ code: 401, message: "username or password is incorrect" });
    const jwt = await createJwtToken(user.jwtPayload());
    return { ...user.data(), accessToken: jwt };
  }
}

export default new UserController();

/// add swaggers
