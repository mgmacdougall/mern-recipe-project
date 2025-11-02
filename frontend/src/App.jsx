import { useState, useEffect } from "react";
import RecipeCard from "./components/recipeCard";
import "./App.css";
import axios from "axios";
import UserInputContainer from "./components/userInputContainer";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/recipe/all");
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleUserCreationSubmit = async (e, formData) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", { ...formData });

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

  return (
    <>
      <h1> Recipes List</h1>
      <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {data && data.map((el) => <RecipeCard key={el._id} recipeData={el} />)}
      </div>
      <div className="justify-center m-4 p-4 border-t-2 border-gray-300">
        <div>
          <h2>User Creation Form</h2>
          <UserInputContainer onSubmit={handleUserCreationSubmit} />
        </div>
      </div>
    </>
  );
}

export default App;
