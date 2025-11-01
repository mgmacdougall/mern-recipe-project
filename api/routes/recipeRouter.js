// routes/placeholder.js
// Create Express routers and route bindings here

import express from "express";
import { getAllRecipes } from "../controllers/recipeController.js";
import { addRecipe } from "../controllers/recipeController.js";
import { updateById } from "../controllers/recipeController.js";
import { deleteById } from "../controllers/recipeController.js";
const recipeRouter = express.Router();

recipeRouter.get("/all", getAllRecipes);
recipeRouter.post("/add", addRecipe);
recipeRouter.put("/update/:id", updateById);
recipeRouter.delete("/delete/:id", deleteById);
export default recipeRouter;
