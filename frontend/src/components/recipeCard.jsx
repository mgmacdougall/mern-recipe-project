import React from "react";

function RecipeCard({ recipeData }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={recipeData.image}
        alt={recipeData.title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{recipeData.title}</h2>
        <p className="text-gray-700 text-base">{recipeData.description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
