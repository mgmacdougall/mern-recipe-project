import placeholder from "../assets/placeholder.jpg";

function RecipeCard({ recipeData }) {
  return (
    <article
      key={recipeData._id}
      id={recipeData._id}
      className="w-96 h-96 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={placeholder}
        alt={recipeData.title}
        className="h-48 w-full object-cover"
      />
      <section className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">{recipeData.title}</h2>
        <p className="text-base text-gray-700">{recipeData.description}</p>
      </section>
    </article>
  );
}

export default RecipeCard;
