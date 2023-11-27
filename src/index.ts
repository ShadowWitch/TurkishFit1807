// * Librerias
import express, { Express, NextFunction, Request, Response } from "express";
import morgan, { Morgan } from "morgan";
import cors, { CorsOptions } from "cors";
// import bodyParser, { BodyParser } from 'body-parser'

import dotenv from "dotenv";

// * Local Imports
import { routerMain } from "./routers/main";
import {
  errorHandler,
  notFoundHandler,
  specificErrorHandler,
} from "./middlewares/errorManager.middleware";

const app: Express = express();
const port: any = process.env.PORT || 3000;

// * Configurations
dotenv.config();
app.use(morgan("dev"));

// * Configurations Body-Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * Configurations Cors
app.use(cors());

app.get("/", (req, res) => {
  res.end("qweqwe");
});

// * Config Router Principal
app.use("/", routerMain);

//* Error manager
app.use(notFoundHandler);
// app.use(specificErrorHandler);
// app.use(errorHandler);

//* Config Middleware 404
// app.use((req, res, next) => {
//     res.status(404).json({
//         error: {
//             status: 'Not Found',
//             message: 'Not Found'
//         }
//     })
// })

// * Server Listen
app.listen(port, () => {
  console.log(`Server corriendo en ${port}`);
});
