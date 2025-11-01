// controllers/placeholder.js
// Implement controller functions for routes
import recipeModel from "../model/recipeModel.js";
export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipeModel.find();
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addRecipe = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newRecipe = new recipeModel({
      name,
      description,
    });

    const result = await newRecipe.save();
    if (!result) {
      throw new Error("Unable to insert record");
    }
    res.status(201).json(result);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const updateById = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const result = await recipeModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!result) {
        throw new Error("Unable to find recipe");
      }
      res.status(201).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Unable to locate recipe" });
  }
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await recipeModel.findOneAndDelete(id);
    if (!result) {
      throw new Error("Unable to delete");
    }
    res.json({ message: "Recipe deleted", recipe: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
