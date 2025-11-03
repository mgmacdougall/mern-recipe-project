import mongoose from "mongoose";

const recipeBoxModel = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("RecipeBox", recipeBoxModel);
