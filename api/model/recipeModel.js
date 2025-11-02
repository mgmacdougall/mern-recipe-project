import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    ingredients: [
      {
        name: { type: String, required: true },
        quantity: { type: String },
      },
    ],
    steps: [{ type: String, required: true }],
    cuisine: {
      type: String,
      enum: ["Italian", "Thai", "Indian", "Mexican", "Other"],
      default: "Other",
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
    prepTime: { type: Number },
    cookTime: { type: Number },
    tags: [String],

    // 👤 New field: reference to the user who created the recipe
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Recipe", recipeSchema);
