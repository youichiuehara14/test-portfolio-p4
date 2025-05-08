import React from 'react';
import useAddRecipeForm from '../hooks/useAddRecipeForm';
import { Link } from 'react-router';

const AddRecipe = () => {
  const {
    formData,
    error,
    loading,
    handleInputChange,
    handleIngredientChange,
    addIngredient,
    removeIngredient,
    handleSubmit,
  } = useAddRecipeForm();

  return (
    <div className="flex flex-col justify-center items-center mt-12 ">
      <div>
        <Link to="/app">
          <div className="flex items-center gap-2">
            <i className="bx bx-arrow-back"></i>
            <button>Go back to App</button>
          </div>
        </Link>

        <div className='className="max-w-2xl sm:w-xl mx-auto p-4 font-secondary border-1 rounded mt-3'>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4 inline-block">Add your own Drink recipe!</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                id="title"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Ingredients</label>
              {formData.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                    placeholder={`Ingredient ${index + 1}`}
                    required
                  />
                  {formData.ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                    >
                      ❌
                    </button>
                  )}
                </div>
              ))}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="button"
                onClick={addIngredient}
                className="text-orange-500 hover:underline text-sm mt-1"
              >
                + Add Ingredient
              </button>
            </div>

            <div>
              <label htmlFor="instructions" className="block mb-1">
                Instructions
              </label>
              <textarea
                value={formData.instructions}
                onChange={(e) => handleInputChange('instructions', e.target.value)}
                className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                id="instructions"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non-Alcoholic">Non-Alcoholic</option>
              </select>
            </div>

            <div>
              <label htmlFor="photo-url" className="block mb-1">
                Photo Url
              </label>
              <input
                className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                type="text"
                placeholder="e.g., https://example.com/image.jpg"
                value={formData.photoUrl}
                onChange={(e) => handleInputChange('photoUrl', e.target.value)}
                id="photo-url"
              />
            </div>

            <button
              type="submit"
              className={`bg-orange-500 text-white p-2 rounded hover:bg-orange-600 w-full ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Recipe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
