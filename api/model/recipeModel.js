import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.model("Recipe", recipeSchema);
