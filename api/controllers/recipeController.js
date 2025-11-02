// controllers/placeholder.js
// Implement controller functions for routes
import recipeModel from "../model/recipeModel.js";
import asyncHandler from "express-async-handler";

export const getAllRecipes = asyncHandler(async (req, res) => {
  const allRecipes = await recipeModel.find();
  res.status(200).json(allRecipes);
});

export const addRecipe = asyncHandler(async (req, res) => {
  const { title, description, createdBy } = req.body;
  const newRecipe = new recipeModel({
    title,
    description,
    createdBy,
  });

  const result = await newRecipe.save();
  if (!result) {
    throw new Error("Unable to insert record");
  }
  res.status(201).json(result);
});

export const updateById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await recipeModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      throw new Error("Unable to find recipe");
    }
    res.status(201).json(result);
    res.status(404).json({ message: error.message });
  } else {
    res.status(400).json({ message: "Unable to locate recipe" });
  }
});

export const deleteById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await recipeModel.findOneAndDelete(id);
  if (!result) {
    throw new Error("Unable to delete");
  }
  res.json({ message: "Recipe deleted", recipe: result });
});
