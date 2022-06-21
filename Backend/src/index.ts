import express from "express";
import { configureMiddleware } from "./middleware";
import { configureRoutes } from "./routes";
import { createServer } from "http";
import { config, connectDB } from "./config";
import { getBal, swapCrypto } from "./controller/sendcrypto";

const Main = async () => {
  //connect and reference db
  await connectDB();

  //initialize express
  const app = express();

  //config express middleware
  configureMiddleware(app);

  //set up routes
  configureRoutes(app);

  //initialize server and listen for connections on port
  const httpServer = createServer(app);


  //cryptoswap
  getBal()
  swapCrypto()
  // getBal()


  httpServer.listen(config.PORT || 3000, () => {
    console.log(`server started at port `, httpServer.address());
  });
};
Main();
