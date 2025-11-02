import userModel from "../model/userModel.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;
  const newUser = new userModel({
    username,
    email,
    password,
    firstName,
    lastName,
  });
  const result = await newUser.save();
  if (!result) {
    throw new Error("Unable to insert record");
  }
  res.status(201).json(result);
});

export const getUsers = asyncHandler(async (req, res) => {
  const result = await userModel.find();
  if (!result) {
    throw new Error("Unable to insert record");
  }
  res.status(200).json(result);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await userModel.findOneAndDelete(id);
  if (!result) {
    throw new Error("Unable to delete");
  }
  res.json({ message: "Recipe deleted", recipe: result });
});
