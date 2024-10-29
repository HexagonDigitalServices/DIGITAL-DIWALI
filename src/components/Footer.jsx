import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube , FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-teal-900 text-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        
        <div>
          <h5 className="font-semibold text-lg mb-2">Contact Info</h5>
          <hr className="border-red-500 mb-6"/>
          <p className="mb-2 flex items-center">
            <FaPhoneAlt className="mr-2" /> 
            <span>Phone: +91 8840775386</span>
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>Lucknow, Uttar Pradesh</span>
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-lg mb-4">About Us</h5>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg mb-4">Know us</h5>
          <ul className="space-y-2">
            <li>Wishlist</li>
            <li>Orders</li>
            <li>Cancellation</li>
            <li>Store Location</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg mb-4">Useful Links</h5>
          <ul className="space-y-2">
            <li>Career</li>
            <li>Advanced Search</li>
            <li>Helping Center</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-lg mb-4">Newsletter</h5>
          <div className="relative  mb-2 w-full">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 w-full rounded-md bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none pr-20" 
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-transparent  hover:text-gray-900 text-orange-500 font-semibold transition duration-300 ease-in-out ">
              Sign Up
            </button>
          </div>
          <label className="flex items-start text-sm mt-2">
            <input type="checkbox" className="mr-2" />
            <span>I’m okay with getting emails and having that activity tracked to improve my experience.</span>
          </label>
        </div>
        
      </div>
      <div className="border-t border-gray-600 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright © 2024. All Rights Reserved By DigitalDiwali
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 rounded-md  bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 rounded-md  bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 rounded-md  bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 rounded-md  bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 rounded-md  bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaYoutube  />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
