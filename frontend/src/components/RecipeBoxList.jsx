import React from "react";
import RecipeBoxCard from "./recipeBoxCard.jsx";

function RecipeBoxList({ data }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Recipe Boxes</h2>
      {data.map((box) => (
        <RecipeBoxCard key={box._id} data={box} />
      ))}
    </>
  );
}

export default RecipeBoxList;
