import React from 'react';
import hlogo from '../assets/Hexagon Logo.png';
import s2a from '../assets/s2a.jpg';
import s2b from '../assets/s2b.jpg';
import s2c from '../assets/s2c.jpg';
import { Link } from 'react-scroll';

const SecondSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Text Content */}
      <div className="flex flex-col items-start max-w-lg space-y-4 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
          This Diwali Light Up Your Celebration With Hexagon
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Enhance your beauty effortlessly with clean, nourishing products
          that let your natural radiance shine through.
        </p>

        {/* Button for Small Screens */}
     <div className="block sm:hidden mt-4 text-center">
  <Link to="websites">
    <button className="gradient-button text-black px-6 py-3">
      Shop Now
    </button>
  </Link>
</div>

        {/* Hexagon Logo */}
        <img
          src={hlogo}
          alt="Hexagon Logo"
          className="transform hover:scale-105 transition mx-auto lg:mx-0 mt-4 h-20 sm:h-24"
        />
      </div>

      {/* Image Grid */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Large Image */}
        <img
          src={s2b}
          alt="Diwali sweets 2"
          className="h-72 w-48 transform hover:scale-105 transition"
        />

        {/* Smaller Images */}
        <div className="absolute top-8 left-40 sm:left-10 md:left-20 lg:left-10 xl:left-5 border-2 border-white">
  <img
    src={s2a}
    alt="Diwali sweets 3"
    className="transform h-32 w-28 z-10 hover:scale-105 transition sm:h-24 sm:w-20"
  />
</div>

        <div className="absolute bottom-[-40px] right-14 border-2 border-white">
          <img
            src={s2c}
            alt="Diwali sweets 4"
            className="transform h-28 w-38 hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Button for Medium & Large Screens */}
      <div className="hidden sm:block absolute bottom-10 left-6 lg:left-16">
        <Link to="websites">
          <button className="gradient-button text-black px-6 py-3">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SecondSection;
