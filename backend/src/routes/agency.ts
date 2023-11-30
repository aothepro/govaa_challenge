import * as express from "express";
import { AppDataSource } from "../data-source";
import { Agency } from "../entity/Agency";

export const agencyRoute = express.Router();

agencyRoute.get("/", async (req, res) => {
  const agencies = await AppDataSource.getRepository(Agency)
    .createQueryBuilder()
    .getMany();

  return res.json({ success: true, agencies });
});
