import React from 'react';
import hlogo from '../assets/Hexagon Logo.png';
import s2a from '../assets/s2a.jpg';
import s2b from '../assets/s2b.jpg';
import s2c from '../assets/s2c.jpg';
import { Link } from 'react-scroll';

const SecondSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Text Content */}
      <div className="flex flex-col items-start max-w-lg space-y-6 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          This Diwali, Light Up Your Celebration With Hexagon
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Enhance your beauty effortlessly with clean, nourishing products
          that let your natural radiance shine through.
        </p>
        <Link to="websites" smooth={true} duration={500}>
          <button className="gradient-button text-black px-6 py-3 rounded-lg transition-transform hover:scale-105">
            Shop Now
          </button>
        </Link>

        <img
          src={hlogo}
          alt="Hexagon Logo"
          className="mt-4 mx-auto lg:mx-0 h-16 md:h-20 lg:h-24 transform hover:scale-105 transition"
        />
      </div>

      {/* Image Grid */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Large Image */}
        <img
          src={s2b}
          alt="Diwali sweets 2"
          className="h-48 w-32 sm:h-56 sm:w-40 md:h-64 md:w-44 lg:h-72 lg:w-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition"
        />

        {/* Smaller Images */}
        <div className="absolute top-4 left-20 sm:top-6 sm:left-16 md:left-28 lg:top-8 lg:left-40 border-2 border-white rounded-lg">
          <img
            src={s2a}
            alt="Diwali sweets 3"
            className="h-20 w-16 sm:h-24 sm:w-20 md:h-28 md:w-24 lg:h-32 lg:w-28 object-cover transform hover:scale-105 transition"
          />
        </div>

        <div className="absolute bottom-[-20px] right-10 sm:bottom-[-24px] sm:right-12 md:right-14 lg:right-16 border-2 border-white rounded-lg">
          <img
            src={s2c}
            alt="Diwali sweets 4"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-28 lg:w-32 object-cover transform hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
