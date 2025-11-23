import React from "react";

function RecipeBoxCard({ data }) {
  const username = data?.createdBy?.username || "Unknown User";
  const recipeCount = data?.recipes?.length || 0;
  const recipeText = recipeCount === 1 ? "Recipe" : "Recipes";

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3>{data.name}</h3>
      <p>Created by: {username}</p>
      <p>
        {recipeText}: {recipeCount}
      </p>
      {recipeCount > 0 && (
        <ul className="list-disc list-inside">
          {data.recipes.map((recipe) => (
            <li key={recipe._id}>{recipe.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeBoxCard;
