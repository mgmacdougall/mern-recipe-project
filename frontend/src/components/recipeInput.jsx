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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Recipe Input Form
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Create your recipe.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Recipe Name */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="recipe-name-input"
                  className="block text-sm font-medium text-gray-900"
                >
                  Recipe Name:
                </label>
                <div className="mt-2">
                  <input
                    id="recipe-name-input"
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    className="h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="recipe-description"
                  className="block text-sm font-medium text-gray-900"
                >
                  Description:
                </label>
                <div className="mt-2">
                  <input
                    id="recipe-description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="sm:col-span-6 mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RecipeInput;
