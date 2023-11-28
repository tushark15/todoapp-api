require("dotenv").config();
import express, { Application, Request, Response } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import todoRoutes from "./routes/todoRoutes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';

const app: Application = express();
const PORT: number = 4000;

mongoose.connect(`${process.env.MONGOURL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to TodoApp API")
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/todos", todoRoutes)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
