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
          About Us – Hexagon Digital Services
        </h1>
        <p className="text-lg text-gray-600">
          At Hexagon Digital Services, we believe in lighting up businesses with innovation,
          just as Diwali fills homes with joy and brightness. This festive season symbolizes new beginnings,
          and we empower companies with dynamic websites, engaging apps, and tailored software solutions.
          Like the glow of Diwali lamps, our digital expertise ensures your business shines brighter in the market.
          Let’s celebrate growth, prosperity, and success together. Wishing you a joyous and successful Diwali
          from all of us at Hexagon Digital Services!
        </p>
        <a href="https://hexagondigitalservices.com/aboutus" className="gradient-button text-black px-6 py-3 transition">
          About Us
        </a>
      </div>
    </section>
  );
};

export default FourthSection;