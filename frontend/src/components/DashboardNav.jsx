import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-x-4 justify-center sm:justify-end">
          <Link to="/add-recipe">
            <button className="hover:text-gray-300 cursor-pointer">Add Recipe</button>
          </Link>
          <button onClick={handleLogout} className="color-white hover:text-gray-300 cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
