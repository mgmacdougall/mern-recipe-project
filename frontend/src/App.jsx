import { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import "./App.css";
import axios from "axios";
import UserInputContainer from "./components/UserInputContainer";
import RecipeInput from "./components/RecipeInput";
import RecipeBox from "./components/RecipeBox";
import RecipeBoxList from "./components/recipeBoxList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import RecipeBoxPage from "./pages/RecipeBoxPage";
import RecipesPage from "./pages/RecipesPage";
import NavBar from "./components/NavBar";
function App() {
  const [data, setData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [recipeBoxes, setRecipeBoxes] = useState([]);

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
      const allRecipeBoxesResponse = await axios.get(
        "http://localhost:8080/recipe-box/all"
      );
      setRecipeBoxes(allRecipeBoxesResponse.data);
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
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/recipe-boxes" element={<RecipeBoxPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>

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
        <RecipeBox
          onSubmit={handleRecipeBoxSubmit}
          activeUser={currentUser}
          data={recipeBoxes}
        />
      </div>
      <div className="justify-center m-4 p-4 border-t-2 border-gray-300">
        <h2>Recipe Boxes List</h2>
        <RecipeBoxList data={recipeBoxes} />
      </div>
    </>
  );
}

export default App;
