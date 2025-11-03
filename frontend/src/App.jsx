import { useState, useEffect } from "react";
import RecipeCard from "./components/recipeCard";
import "./App.css";
import axios from "axios";
import UserInputContainer from "./components/userInputContainer";
import RecipeInput from "./components/recipeInput";
import RecipeBox from "./components/recipeBox";
function App() {
  const [data, setData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/recipe/all");
      setData(result.data);
      setCurrentUser("6907484207479c52967c561f");
    };
    fetchData();
  }, []);

  const handleUserCreationSubmit = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/user/create-user",
        formData
      );
      console.log("User created successfully:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleRecipeBoxSubmit = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/recipe-box/add-recipe-box",
        formData
      );
      console.log("Recipe Box created successfully:", response.data);
    } catch (error) {
      console.error("Error creating Recipe Box:", error);
    }
  };

  const handleRecipeSubmit = async (e, formData) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/recipe/add",
        formData
      );
      console.log("Recipe created successfully:", response.data);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <>
      <h1> Recipes List</h1>
      <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {data && data.map((el) => <RecipeCard key={el._id} recipeData={el} />)}
      </div>
      <div className="justify-center m-4 p-4 border-t-2 border-gray-300">
        <div>
          <UserInputContainer onSubmit={handleUserCreationSubmit} />
        </div>
      </div>
      <div className="justify-center m-4 p-4 border-t-2 border-gray-300">
        <h2>Recipe Creation Form</h2>
        <RecipeInput onSubmit={handleRecipeSubmit} activeUser={currentUser} />
      </div>

      <div className="justify-center m-4 p-4 border-t-2 border-gray-300">
        <h2>Recipe Box Creation Form</h2>
        <RecipeBox onSubmit={handleRecipeBoxSubmit} activeUser={currentUser} />
      </div>
    </>
  );
}

export default App;
