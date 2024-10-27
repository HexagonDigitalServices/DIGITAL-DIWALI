import React from 'react';
import img1 from '../assets/heroin.jpg'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="video-container">
        <img
          src={img1}
        />
      </div>

      {/* Overlay Content */}
      {/* <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Collection</h1>
        <p className="text-lg md:text-2xl mb-4">
          This Diwali, bring wealth and good fortune home.
        </p>
        <p className="text-xl md:text-3xl text-yellow-400 italic mb-8">
          Diya Collection
        </p>

        <div className="text-4xl md:text-6xl font-extrabold text-white/40 mb-8">
          50% OFF
        </div>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-xl hover:bg-white hover:text-black transition duration-300">
          Buy Now
        </button>
      </div> */}
    </div>
  );
};

export default HeroSection;
