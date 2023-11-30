import * as express from "express";
import * as jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { tokens } from "./govaa";

export const authRoute = express.Router();

const tokenSecret = "supersecretvalueforgovaa";

authRoute.get("/login", (req, res) => {
  const accessToken = req.headers["authorization"]?.split(" ")[1];

  console.log({ accessToken });

  const userData = jwt.verify(accessToken, tokenSecret);

  return res.json({ success: true, userData });
});

authRoute.post("/register", async (req, res) => {
  const { name, description, email, agency, token } = req.body;

  // get email from GOVAA with token
  const govEmail = tokens.find(
    (serverToken) => serverToken.token === token,
  ).govEmail;

  await AppDataSource.getRepository(User)
    .createQueryBuilder()
    .insert()
    .values([
      {
        name,
        email,
        jobDescription: description,
        govEmail,
        agency: { id: agency },
      },
    ])
    .execute()
    .then(() => {
      const accessToken = jwt.sign(
        {
          name,
          email,
          jobDescription: description,
          govEmail,
          agency: { id: agency },
        },
        tokenSecret,
        {
          expiresIn: "100d",
        },
      );
      return res.json({ success: true, accessToken });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false });
    });
});
