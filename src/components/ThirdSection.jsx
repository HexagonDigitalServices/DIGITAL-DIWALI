// src/components/SellingSection.jsx
import React from "react";
import CustomButton from "./Button";
import { MdArrowOutward } from "react-icons/md";
import img1 from '../assets/p1 (1).png';
import img2 from '../assets/p1 (2).png';
import img3 from '../assets/p1 (3).png';
import img4 from '../assets/p1 (4).png';

const products = [
  {
    id: 1,
    name: "SALON",
    price: "₹7999",
    originalPrice: "₹14999",
    image: img1,
    label: "Hot",
    previewLink: "https://saloonwebsite-67ui.vercel.app", // Updated link
  },
  {
    id: 2,
    name: "DENTIST",
    price: "₹5999",
    originalPrice: "₹11999",
    image: img2,
    label: "50% Off",
    previewLink: "https://dentist-dynamic.vercel.app", // Updated link
  },
  {
    id: 3,
    name: "GYM",
    price: "₹4999",
    image: img3,
    previewLink: "https://gymwebsite-za6i.vercel.app", // Updated link
  },
  {
    id: 4,
    name: "INTERIOR",
    price: "₹4999",
    image: img4,
    previewLink: "https://interiordesign-uuot.vercel.app", // Updated link
  },
];

const SellingSection = () => {
  return (
    <div className="relative bg-gray-900 py-12">
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-blue-700 to-cyan-500 blur-3xl opacity-40"></div>

      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Best Offer on Websites
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative z-10 bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 border border-white/30"
          >
            {/* Product Label */}
            {product.label && (
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.label}
              </span>
            )}

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-auto h-auto rounded-md object-cover mx-auto"
            />

            {/* Product Info */}
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold gradient-text">{product.name}</h3>
              <p className="text-orange-400 text-xl">
                {product.price}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    {product.originalPrice}
                  </span>
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-around">
              <a
                href={product.previewLink}
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton>Pre-View</CustomButton>
              </a>
              <button className="relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-2 py-2 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-cyan-300 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-cyan-300/40 hover:text-white after:hover:bg-opacity-20 focus:ring-2">
                <MdArrowOutward />
              </button>
              <a
                href="https://hexagondigitalservices.com/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton>Buy Now</CustomButton>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingSection;
