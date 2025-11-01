import mongoose from "mongoose";

const recipeBoxModel = new mongoose.Schema({
  name: String,
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("RecipeBox", recipeBoxModel);
