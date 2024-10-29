import React from 'react';
import img1 from '../assets/cracker.png'

const FourthSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Image on the Left */}
    <div className="">
  <img
    src={img1}
    alt="Diwali sweets"
    className="transform hover:scale-105 transition ml-28 w-1/2"
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
        <button className="gradient-button text-black px-6 py-3 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default FourthSection;