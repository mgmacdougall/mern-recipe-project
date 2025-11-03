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
        <div className="space-y-12">
          {/* Header Section */}
          <section className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900">
              Create a Recipe Box
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Create your recipe box to organize your recipes.
            </p>

            {/* Input Grid */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="recipe-box-name-input"
                  className="block text-sm font-medium text-gray-900"
                >
                  Recipe Box Name:
                </label>

                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600 focus-within:outline-offset-2">
                    <input
                      id="recipe-box-name-input"
                      type="text"
                      value={recipeBoxName}
                      onChange={(e) => setRecipeBoxName(e.target.value)}
                      className="w-full bg-white py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default RecipeBox;
