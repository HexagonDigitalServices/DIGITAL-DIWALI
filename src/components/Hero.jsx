import React from 'react';
import img1 from '../assets/heroin.jpg';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img1}
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hero Text Content */}
      <div className="absolute z-10 text-white text-left top-24 left-10 sm:top-16 sm:left-6 lg:top-32 lg:left-16">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
          Hexagon
        </h1>
        <h3 className="text-2xl md:text-3xl lg:text-4xl mt-2">
          Digital Services
        </h3>
      </div>

      {/* Button & Link Positioned Responsively */}
    <div 
      className="
        absolute z-10 text-white px-4 
        bottom-6 left-2 lg:ml-24  
        sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 
        lg:bottom-6 lg:left-16
        sm:flex sm:justify-center sm:w-full
      "
    >
      <a
        href="https://hexagondigitalservices.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>
          www.hexagondigitalservices.com
        </Button>
      </a>
    </div>
    </div>
  );
};

export default HeroSection;
