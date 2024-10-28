// src/components/SellingSection.jsx
import React from "react";
import CustomButton from "./Button";
import { MdArrowOutward } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Besan Ladoo - Dry Fruit",
    price: "₹4800",
    image: "/assets/ladoo.png", // Replace with your image path
    label: "Hot",
  },
  {
    id: 2,
    name: "Handmade Diya",
    price: "₹5000",
    originalPrice: "₹16500",  // Original price crossed out
    image: "/assets/diya.png",
  },
  {
    id: 3,
    name: "Shape Crackers",
    price: "₹5503",
    image: "/assets/crackers.png",
    label: "20% Off",
  },
  {
    id: 4,
    name: "String Light",
    price: "₹3000",
    originalPrice: "₹10000",
    image: "/assets/string-light.png",
  },
];

const SellingSection = () => {
  return (
    <div className="relative bg-gray-900 py-12 ">
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-blue-700 to-cyan-500 blur-3xl opacity-40"></div>

      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Amazing Saas Comming Soon...
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative z-10 bg-white/20 backdrop-blur-md rounded-xl  p-4 sm:p-6 md:p-8 border border-white/30"
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
              className="w-32 h-32 object-cover mx-auto"
            />

            {/* Product Info */}
            <div className="mt-6 text-center"> {/* Reduced margin */}
              <h3 className="text-lg font-semibold gradient-text ">{product.name}</h3>
              <p className="text-orange-400 text-xl ">
                {product.price}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    {product.originalPrice}
                  </span>
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-around"> {/* Reduced margin */}
              <CustomButton className="">
                Pre-View
              </CustomButton>
              <button className="relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-2 py-2 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-cyan-300 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-cyan-300/40 hover:text-white after:hover:bg-opacity-20 focus:ring-2">
                <MdArrowOutward />
              </button>

              <CustomButton>
                Buy Now
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingSection;