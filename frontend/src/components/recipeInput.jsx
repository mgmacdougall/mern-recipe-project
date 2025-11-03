import { useState } from "react";

function RecipeInput({ onSubmit, activeUser }) {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: recipeName,
      description: description,
      createdBy: activeUser,
    };
    onSubmit(e, formData);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipe-name-input">
          Recipe Name:
          <input
            id="recipe-name-input"
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          ></input>
        </label>

        <label htmlFor="recipe-description">
          Description:
          <input
            id="recipe-description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </label>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RecipeInput;
