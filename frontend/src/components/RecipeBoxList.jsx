import { useState, useEffect } from "react";
import RecipeBoxCard from "./RecipeBoxCard.jsx";

function RecipeBoxList() {
  const [recipeBoxes, setRecipeBoxes] = useState([]);

  useEffect(() => {
    async function fetchRecipeBoxes() {
      try {
        const response = await fetch("http://localhost:8080/recipe-box/all");
        const data = await response.json();
        setRecipeBoxes(data);
      } catch (error) {
        console.error("Error fetching recipe boxes:", error);
      }
    }

    fetchRecipeBoxes();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Recipe Boxes</h2>
      {recipeBoxes.map(
        (box) => (
          // <div key={box.id ?? index}>{box.name ?? box.title ?? "Recipe Box"}</div>
          console.log(Array.isArray(recipeBoxes)),
          (<RecipeBoxCard key={box._id} data={box} />)
        )
      )}
    </>
  );
}

export default RecipeBoxList;
