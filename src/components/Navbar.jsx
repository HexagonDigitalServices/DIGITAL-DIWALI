import React, { useState } from 'react';
import { CiSearch, CiShoppingBasket, CiUser } from 'react-icons/ci';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl gradient-text font-bold text-white">
            DigitalDiwali
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {['Home', 'Services', 'Websites', 'About', 'Coming Soon...'].map(
              (item, index) => {
                const hoverColors = [
                  'hover:bg-red-300/80',
                  'hover:bg-blue-300/80',
                  'hover:bg-green-300/80',
                  'hover:bg-yellow-300/80',
                  'hover:bg-purple-300/80',
                ];
                return (
                  <Link
                    key={index}
                    to={item.toLowerCase().replace(/\s+/g, '')}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`text-white px-4 py-2 ${hoverColors[index]} rounded-b-3xl transition-transform 
                    transform hover:scale-105 cursor-pointer`}>
                    {item}
                  </Link>
                );
              }
            )}
          </div>

          {/* Icons & Contact Button (Visible on Medium & Larger Screens) */}
          <div className="hidden md:flex items-center space-x-4">
            <CiSearch className="text-white text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <CiShoppingBasket className="text-white text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <CiUser className="text-white text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <a href="https://hexagondigitalservices.com/contact">
              <button className="ml-4 text-sm bg-white text-black px-4 py-2 rounded-b-3xl hover:text-black
               transition duration-300 gradient-button">
                Contact Us
              </button>
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}  {/* Toggle between menu and close icons */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg px-4 py-6 space-y-4">
          {['Home', 'Services', 'Websites', 'About', 'Coming Soon...'].map(
            (item, index) => (
              <Link
                key={index}
                to={item.toLowerCase().replace(/\s+/g, '')}
                smooth={true}
                duration={500}
                offset={-70}
                className="block text-black text-lg font-semibold cursor-pointer hover:text-red-400"
                onClick={toggleMenu}  // Close menu on click
              >
                {item}
              </Link>
            )
          )}

          {/* Icons in Mobile Menu */}
          <div className="flex space-x-4 justify-center mt-4">
            <CiSearch className="text-black text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <CiShoppingBasket className="text-black text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <CiUser className="text-black text-xl cursor-pointer hover:text-red-400 transition duration-300" />
          </div>

          {/* Contact Us Button for Mobile */}
          <div className="flex justify-center mt-6">
            <a href="https://hexagondigitalservices.com/contact">
              <button className="w-full text-sm bg-white text-black px-4 py-2 rounded-b-3xl hover:text-black 
              transition duration-300 gradient-button">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
