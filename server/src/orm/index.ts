import { DataSource } from "typeorm";
import ormConfig from "../config/ormConfigs";

export default new DataSource(ormConfig);
