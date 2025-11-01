// routes/recipeBoxRoutes.js
import express from "express";
const recipeBoxRouter = express.Router();
import {
  addRecipeToBox,
  createRecipeBox,
  deleteRecipeFromRecipeBox,
} from "../controllers/recipeBoxController.js";
recipeBoxRouter.post("/add-recipe", addRecipeToBox);
recipeBoxRouter.post("/add-recipe-box", createRecipeBox);
recipeBoxRouter.delete(
  "/remove-recipe-from-box/:boxId",
  deleteRecipeFromRecipeBox
);
export default recipeBoxRouter;
