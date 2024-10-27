import React from 'react';

const SecondSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Text Content */}
      <div className="flex flex-col items-start max-w-lg space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
          This Diwali Light Up Your Celebration
        </h1>
        <p className="text-lg text-gray-600">
          Enhance your beauty effortlessly with clean, nourishing products
          that let your natural radiance shine through.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md transition">
          Shop Now
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 relative">
        <img
          src="https://via.placeholder.com/150"
          alt="Diwali sweets 1"
          className="rounded-lg shadow-lg transform hover:scale-105 transition"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Diwali sweets 2"
          className="rounded-lg shadow-lg transform hover:scale-105 transition"
        />
        <img
          src="https://via.placeholder.com/200"
          alt="Diwali sweets 3"
          className="col-span-2 lg:col-span-1 rounded-lg shadow-lg transform hover:scale-105 transition"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Diwali sweets 4"
          className="rounded-lg shadow-lg transform hover:scale-105 transition"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Diwali sweets 5"
          className="rounded-lg shadow-lg transform hover:scale-105 transition"
        />
      </div>
    </section>
  );
};

export default SecondSection;
