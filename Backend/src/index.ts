import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()

//initialize express
const app = express();

//middleware
app.use(express.json());

app.get("/", (_req: Request, res:Response) => {
  res.status(200).send("we are live");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`server listening on port ${PORT}`)
});