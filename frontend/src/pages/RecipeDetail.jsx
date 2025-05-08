import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await axios.get(`/api/recipes/${id}`);
      setRecipe(res.data);
    };
    fetchRecipe();
  }, [id]);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/recipes/${id}`);
      navigate('/app');
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center my-12 ">
      <div>
        <Link to="/app">
          <div className="flex items-center gap-2">
            <i className="bx bx-arrow-back"></i>
            <button className="cursor-pointer">Go back to App</button>
          </div>
        </Link>
        <div className="max-w-4xl sm:w-xl mx-auto p-4 bg-[#171717] border-1 shadow-md rounded-lg my-5">
          {recipe.photoUrl && (
            <img
              src={recipe.photoUrl}
              alt={recipe.title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
          )}
          <div>
            <div className="justify-between items-center mb-4">
              <h1 className="capitalize text-3xl font-bold">{recipe.title}</h1>
            </div>
            <p className="text-white mb-4 border-1 inline-block px-2 py-1 font-bold">
              {recipe.category}
            </p>
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="pl-6 mb-4 list-disc">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="mb-4">{recipe.instructions}</p>
            {user && user._id === recipe.createdBy && (
              <div className="flex space-x-4 mt-[20px]">
                <Link to={`/edit-recipe/${id}`}>
                  <button className="bg-white text-[#171717] p-2 rounded hover:bg-gray-100 px-5 cursor-pointer">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 px-5 cursor-pointer"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
