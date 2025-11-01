// controllers/recipeBoxController.js
// const RecipeBox = require("../models/RecipeBox");
// const Recipe = require("../models/Recipe");
import recipeBoxModel from "../model/recipeBoxModel.js";
import recipeModel from "../model/recipeModel.js";

export const addRecipeToBox = async (req, res) => {
  try {
    const { boxId, recipeId } = req.body;
    // Optional: validate existence
    const recipe = await recipeModel.findById(recipeId);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    const updatedBox = await recipeBoxModel
      .findByIdAndUpdate(
        boxId,
        { $addToSet: { recipes: recipeId } }, // avoids duplicates
        { new: true }
      )
      .populate("recipes");

    res.status(200).json(updatedBox);
  } catch (error) {
    console.error("Error adding recipe to box:", error);
    res.status(500).json({ error: "Failed to add recipe to box" });
  }
};

export const createRecipeBox = async (req, res) => {
  const { name } = req.body;
  try {
    const newRecipeBox = new recipeBoxModel();
    const result = await newRecipeBox.save({ name });
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

export const deleteRecipeFromRecipeBox = async (req, res) => {
  try {
    const { boxId } = req.params;
    const { recipeId } = req.body;
    // Optional: validate existence
    // const recipe = await recipeModel.findById(recipeId);
    // if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    const updatedBox = await recipeBoxModel.updateOne(
      { _id: boxId },
      { $pull: { recipes: { _id: recipeId } } }
    );

    res.status(200).json(updatedBox);
  } catch (error) {
    console.error("Error deleting recipe to box:", error);
    res.status(500).json({ error: "Failed to add recipe to box" });
  }
};


export const deleteRecipeBox = async(req,res)=>{



  
}
