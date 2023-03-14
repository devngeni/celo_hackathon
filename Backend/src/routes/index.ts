import { Application } from "express";

export const configureRoutes = (app: Application) => {
  app.use("/api/auth", require("./api/auth"));
  app.use("/api/users", require("./api/users"));
  app.use("/api/users", require("./api/checkbal"));
  app.use("/api/users", require("./api/sendcrypto"));
  app.use("/api/mpesa", require("./api/mpesa"));
};
