import { DataSourceOptions } from "typeorm";
import { processEnvs } from "./processENV";
import path from "path";

export default <DataSourceOptions>{
  type: "sqlite",
  username: <string>processEnvs.DB_USERNAME || "test",
  password: <string>processEnvs.DB_PASSWORD || "test",
  database: <string>process.env.DB || path.join(__dirname, "../../", "/db/test.db"),
  entities: ["src/orm/entity/*.ts"],
  synchronize: true,
  logging: false,
};
