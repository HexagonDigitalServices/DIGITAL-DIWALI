import React from 'react';
import hlogo from '../assets/Hexagon Logo.png'
import s2a from '../assets/s2a.jpg'
import s2b from '../assets/s2b.jpg'
import s2c from '../assets/s2c.jpg'
import { Link } from 'react-scroll';

const SecondSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
    {/* Text Content */}
      <div className="flex flex-col items-start max-w-lg space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
          This Diwali Light Up Your Celebration With Hexagon
        </h1>
        <p className="text-lg text-gray-600">
          Enhance your beauty effortlessly with clean, nourishing products
          that let your natural radiance shine through.
        </p>
        <Link to="websites">
        <button className="gradient-button text-black px-6 py-3 transition">
          Shop Now
        </button>
        </Link>
        
        <img
          src={hlogo}
          alt="Diwali sweets 1"
          className=" transform hover:scale-105 transition mx-auto mt-4 h-24"
        />
      </div>

      {/* Image Grid */}
    <div className="relative flex-1 flex items-center justify-center">
        {/* Large Image */}
        <img
          src={s2b}
          alt="Diwali sweets 2"
          className=" h-72 w-48 transform hover:scale-105 transition"
        />

        {/* Smaller Images */}
        <div className="absolute top-8 left-40 border-2 border-white">
          <img
            src={s2a}
            alt="Diwali sweets 3"
            className=" transform z-10 h-32 w-28 hover:scale-105 transition"
          />
        </div>

        <div className="absolute b bottom-[-40px] border-2 border-white right-14">
          <img
            src={s2c}
            alt="Diwali sweets 4"
            className=" transform h-28 w-38 hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
