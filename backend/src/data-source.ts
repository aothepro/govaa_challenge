import "dotenv/config";
import { DataSource } from "typeorm";
import { Agency } from "./entity/Agency";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Agency],
  subscribers: [],
  migrations: ["src/db/migrations/**/*.ts"],
});
