import React from 'react';
import { CiSearch, CiShoppingBasket, CiUser } from 'react-icons/ci';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl gradient-text font-bold text-white">
            DigitalDiwali
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center">
            <div>
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
                      to={item.toLowerCase().replace(/\s+/g, '')} // Matching section IDs
                      smooth={true}
                      duration={500}
                      offset={-70} // Adjust offset to avoid overlap with navbar
                      className={`text-white px-4 py-2 ${hoverColors[index]} rounded-b-3xl transition-transform transform hover:scale-105 cursor-pointer`}
                    >
                      {item}
                    </Link>
                  );
                }
              )}
            </div>
          </div>

          {/* Icons and Button */}
          <div className="flex items-center space-x-4">
            <CiSearch className="text-white text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <CiShoppingBasket className="text-white text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <CiUser className="text-white text-xl cursor-pointer hover:text-red-400 transition duration-300" />
            <a href="https://hexagondigitalservices.com/contact">
              <button className="ml-4 text-sm bg-white text-black px-4 py-2 rounded-b-3xl hover:text-black transition duration-300 gradient-button">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
