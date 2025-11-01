import express from "express";
import { Router } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import recipeRouter from "./routes/recipeRouter.js";
import recipeBoxRouter from "./routes/recipeBoxRouter.js";
// Load environment variables
dotenv.config();
connectDB();
const PORT = process.env.SERVER_PORT || 4040;

const app = express();
// const router = express.Router();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/recipe", recipeRouter);

app.use("/recipe-box", recipeBoxRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
