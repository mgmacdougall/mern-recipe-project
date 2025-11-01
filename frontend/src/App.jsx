import { useState, useEffect } from "react";
import RecipeCard from "./components/recipeCard";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/recipe/all");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Recipes List</h1>
      {data && data.map((el) => <RecipeCard key={el._id} recipeData={el} />)}
    </>
  );
}

export default App;
