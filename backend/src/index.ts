import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import { AppDataSource } from "./data-source";
import { agencyRoute } from "./routes/agency";
import { authRoute } from "./routes/auth";
import { govaaRoute } from "./routes/govaa";

dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

const port = process.env.PORT || 3001;

app.use(`/govaa`, govaaRoute);
app.use(`/auth`, authRoute);
app.use(`/agency`, agencyRoute);

app.listen(port, () => {
  console.clear();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
