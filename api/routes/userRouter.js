import express from "express";
import {
  deleteUser,
  getUsers,
  createUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/all", getUsers);
userRouter.post("/create-user", createUser);
userRouter.delete("/delete-user/:id", deleteUser);

export default userRouter;
