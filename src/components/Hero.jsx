import React from 'react';
import img1 from '../assets/heroin.jpg'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="video-container">
        <img
          src={img1}
        />
      </div>
       <div className='absolute z-10 text-white text-left top-24 left-10'>
  <h1 style={{ fontWeight: '800', fontSize: '3rem' }}>
    Hexagon
  </h1>
  <h3 style={{ fontSize: '2rem' }}>
    digital services
  </h3>
</div>
      {/* Overlay Content */}
      <div className="absolute z-10 text-center text-white px-4 bottom-14 left-6">
        <Button>
          hexagondigitalservices.com
        </Button>
      </div> 
    </div>
  );
};

export default HeroSection;