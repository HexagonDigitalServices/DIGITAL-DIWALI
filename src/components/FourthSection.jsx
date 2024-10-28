import React from 'react';

const FourthSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Image on the Left */}
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/300"
          alt="Diwali sweets"
          className="rounded-lg shadow-lg transform hover:scale-105 transition"
        />
      </div>

      {/* Text Content on the Right */}
      <div className="flex flex-col items-start max-w-lg space-y-4 mb-36">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
        Bring prosperity and luck home with you this Diwali.
        </h1>
        <p className="text-lg text-gray-600">
          Diwali, also known as the Festival of Lights, is one of the most important and widely celebrated festivals in India and among Hindu communities globally.
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-3 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default FourthSection;