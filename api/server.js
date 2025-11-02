import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import recipeRouter from "./routes/recipeRouter.js";
import recipeBoxRouter from "./routes/recipeBoxRouter.js";
import userRouter from "./routes/userRouter.js";

import cors from "cors";

// Load environment variables
dotenv.config();
connectDB();
const PORT = process.env.SERVER_PORT || 4040;

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/recipe", recipeRouter);
app.use("/recipe-box", recipeBoxRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
