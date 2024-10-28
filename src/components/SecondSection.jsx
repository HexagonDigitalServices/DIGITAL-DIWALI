import React from 'react';

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
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 transition">
          Shop Now
        </button>
        <img
          src="https://via.placeholder.com/150"
          alt="Diwali sweets 1"
          className="shadow-lg transform hover:scale-105 transition mx-auto mt-8"
        />
      </div>

      {/* Image Grid */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Large Image */}
        <img
          src="https://via.placeholder.com/300"
          alt="Diwali sweets 2"
          className="shadow-lg h-80 w-64 transform hover:scale-105 transition"
        />

        {/* Smaller Images */}
        <div className="absolute top-8 left-16">
          <img
            src="https://via.placeholder.com/150"
            alt="Diwali sweets 3"
            className="shadow-lg transform hover:scale-105 transition"
          />
        </div>

        <div className="absolute bottom-[-40px] right-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Diwali sweets 4"
            className="shadow-lg transform hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
