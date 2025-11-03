import React from "react";

function RecipeBox({ onSubmit, activeUser }) {
  const [recipeBoxName, setRecipeBoxName] = React.useState("");
  const handleRecipeBoxSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: recipeBoxName,
      createdBy: activeUser,
    };
    onSubmit(e, formData);
  };

  return (
    <div>
      <form onSubmit={handleRecipeBoxSubmit}>
        <label htmlFor="recipe-box-name-input">
          Recipe Box Name:
          <input
            id="recipe-box-name-input"
            type="text"
            value={recipeBoxName}
            onChange={(e) => setRecipeBoxName(e.target.value)}
          ></input>
        </label>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RecipeBox;
