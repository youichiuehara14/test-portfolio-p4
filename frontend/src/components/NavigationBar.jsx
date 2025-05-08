import { NavLink } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { useState, useContext } from 'react';
import YownDrinkLogo from '../assets/YownDrinkLogo.png';
import { AuthContext } from '../context/AuthContext';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideBarToggle = isMenuOpen ? 'hidden' : 'bx bx-menu';
  const sideBar = isMenuOpen
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 translate-x-full pointer-events-none';
  const { user } = useContext(AuthContext);

  return (
    <>
      <header>
        <nav className="justify-between items-center flex md:px-25 px-15 pt-5 shadow-md shadow-[#141414]">
          <div className="logo">
            <NavLink to="/">
              <img
                src={YownDrinkLogo}
                alt="Yown Drink Logo"
                className="w-[140px] sm:w-[200px] lg:w-[200px]"
              />
            </NavLink>
          </div>
          <ul className="hidden lg:flex gap-25 md:text-md lg:text-lg ml-auto font-primary">
            <li>
              <HashLink smooth to="/#aboutSection">
                About
              </HashLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to={user ? '/app' : '/login'}>Find a Cocktail</NavLink>
            </li>
          </ul>
          <i
            className={`lg:!hidden block cursor-pointer text-4xl sm:text-5xl ${sideBarToggle}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </nav>

        <div
          className={`lg:hidden fixed h-screen w-3/5 right-0 top-0 bg-clip-padding backdrop-filter backdrop-blur-lg 
          border-opacity-100 border-gray-500 border-1 transition-all duration-500 ${sideBar}`}
        >
          <ul className="flex flex-col gap-6 text-lg p-6 font-primary ">
            <li>
              <i
                className={`bx bx-x text-4xl cursor-pointer`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              ></i>
            </li>
            <li>
              <HashLink smooth to="/#aboutSection">
                About
              </HashLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to={user ? '/app' : '/login'} className="hover:text-white">
                Find a Cocktail
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
