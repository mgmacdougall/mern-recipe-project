import placeholder from "../assets/placeholder.jpg";

function RecipeCard({ recipeData }) {
  return (
    <div
      key={recipeData._id}
      id={recipeData._id}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
    >
      <img
        className="w-full h-48 object-cover"
        src={placeholder}
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
