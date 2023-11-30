import { DataSource } from "typeorm";
import { Agency } from "./entity/Agency";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "ssguser",
  password: "passwordssg",
  database: "surveysg",
  synchronize: true,
  logging: true,
  entities: [User, Agency],
  subscribers: [],
  migrations: ["src/db/migrations/**/*.ts"],
});
