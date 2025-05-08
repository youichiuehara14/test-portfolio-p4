import { useParams, Link, useNavigate } from 'react-router-dom';
import useEditRecipe from '../hooks/useEditRecipe';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    formData,
    error,
    loading,
    handleInputChange,
    handleIngredientChange,
    addIngredient,
    removeIngredient,
    handleSubmit,
  } = useEditRecipe(id);

  if (!formData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center my-12 ">
      <div>
        <Link to="/app">
          <div className="flex items-center gap-2">
            <i className="bx bx-arrow-back"></i>
            <button className="cursor-pointer">Go back to App</button>
          </div>
        </Link>
        <div className="max-w-2xl sm:w-xl mx-auto p-4 font-secondary border-1 rounded mt-3">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Edit Recipe</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              navigate('/app');
            }}
            className="space-y-4"
          >
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
                className="text-orange-500 hover:underline text-sm mt-1 cursor-pointer"
                onClick={addIngredient}
              >
                Add Ingredient
              </button>
            </div>
            <div>
              <label htmlFor="instructions" className="block mb-1">
                Instructions
              </label>
              <textarea
                type="text"
                value={formData.instructions}
                onChange={(e) => handleInputChange('instructions', e.target.value)}
                className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                id="instructions"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-1">
                Category
              </label>
              <select
                onChange={(e) => handleInputChange('category', e.target.value)}
                value={formData.category}
                className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                id="category"
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
                type="text"
                value={formData.photoUrl}
                onChange={(e) => handleInputChange('photoUrl', e.target.value)}
                className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
                placeholder="url"
                id="photo-url"
                required
              />
            </div>
            <button
              className={`bg-orange-500 p-2 rounded hover:bg-orange-600 w-full cursor-pointer${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
              type="submit"
            >
              {loading ? 'Updating...' : 'Update Recipe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditRecipe;
