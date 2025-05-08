import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';

const AppPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Alcoholic', 'Non-Alcoholic'];
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          `/api/recipes?${
            category && category !== 'All' ? `category=${category}&` : ''
          }title=${encodeURIComponent(searchTerm)}`
        );

        setRecipes(res.data);
        console.log;
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };
    console.log(searchTerm);
    fetchRecipes();
  }, [category, searchTerm]);

  return (
    <div>
      <div>{<DashboardNav />}</div>
      <div>
        <div className="border-1 flex items-center max-w-[70%] mx-auto ">
          <i className="bx bx-search p-1 "></i>
          <input
            id="searchDrinkResult-search"
            type="text"
            className="focus:outline-none px-2 py-2 w-full "
            placeholder="Search for your drink..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {categories.map((cat) => (
            <button
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <Link
              to={`/recipe/${recipe._id}`}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg duration-300 cursor-pointer"
              key={recipe._id}
            >
              {recipe.photoUrl && (
                <img
                  src={recipe.photoUrl}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold capitalize text-[#171717]">{recipe.title}</h2>
                <p className="text-[#171717]">{recipe.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppPage;
