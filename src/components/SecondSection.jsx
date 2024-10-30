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
        {/* Center the button on mobile view */}
        <div className="w-full flex justify-center lg:justify-start">
          <Link to="websites">
            <button className="gradient-button text-black px-6 py-3 transition">
              Shop Now
            </button>
          </Link>
        </div>

        <img
          src={hlogo}
          alt="Diwali sweets 1"
          className="transform hover:scale-105 transition mx-auto lg:mx-0 mt-4 h-20 sm:h-24"
        />
      </div>

      {/* Image Grid */}
      <div className="relative flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-0">
        {/* Large Image */}
        <img
          src={s2b}
          alt="Diwali sweets 2"
          className="h-60 w-40 sm:h-72 sm:w-48 transform hover:scale-105 transition object-cover"
        />

        {/* Smaller Images */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-40 lg:translate-x-0 border-2 border-white">
          <img
            src={s2a}
            alt="Diwali sweets 3"
            className="h-24 w-20 sm:h-32 sm:w-28 transform hover:scale-105 transition object-cover"
          />
        </div>

        <div className="absolute bottom-[-20px] sm:bottom-[-40px] right-10 lg:right-14 border-2 border-white">
          <img
            src={s2c}
            alt="Diwali sweets 4"
            className="h-20 w-28 sm:h-28 sm:w-38 transform hover:scale-105 transition object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
