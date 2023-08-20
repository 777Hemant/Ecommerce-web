import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className='fixed w-full z-20 top-0'>
      <nav className="bg-blue-600 py-4">
        <div className="container mx-auto flex items-center gap-4">
          <Link to="/" className="flex-1">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.0E2rT394d7tQ9MymGH8mTgHaE8&pid=Api&P=0&h=220"
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>
          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <AiOutlineMenu size={30} />
            </button>
          </div>
          <ul
            className={`text-xl flex-1 flex items-center space-x-4 md:gap-5 justify-evenly font-serif ${
              showMenu ? 'block' : 'hidden'
            } sm:flex sm:space-x-0 sm:flex-row sm:ml-auto`}
          >
            <li>
              <Link
                to="/"
                className="text-white hover:underline hover:text-blue-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Products"
                className="text-white hover:underline hover:text-blue-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="text-white hover:underline hover:text-blue-200"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="SignUp"
                className="text-white hover:underline hover:text-blue-200"
              >
                SignUp
              </Link>
            </li>
            <li>
              <Link
                to="/Cart"
                className="text-white hover:underline hover:text-blue-200 relative"
              >
                <AiOutlineShoppingCart size={30} />
                <span className="absolute z-20 bottom-5 ml-2 text-red-600 text-2xl font-serif font-bold">
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
