// src/components/SellingSection.jsx
import React from "react";
import CustomButton from "./Button";
import { MdArrowOutward } from "react-icons/md";
import MG from '../assets/RealState.jpg'; // Fixed image extension
import MG1 from '../assets/Traveling.jpg'; // Fixed image extension
import MG2 from '../assets/Veg Shop.jpg'; // Fixed image extension
import MG3 from '../assets/Furniture.jpg'; // Fixed image extension

const products = [
  {
    id: 1,
    name: "RealState",
    
    image: MG,
    
  },
  {
    id: 2,
    name: "Traveling",
    
    image: MG1,
  },
  {
    id: 3,
    name: "Veg Shop",
    
    image: MG2,
    
  },
  {
    id: 4,
    name: "Furniture",
    
    
    image: MG3,
  },
];

const SellingSection = () => {
  return (
    <div className="relative bg-gray-900 py-12 ">
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-blue-700 to-cyan-500 blur-3xl opacity-40"></div>

      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Amazing Websites Comming Soon...
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
              className="w-auto h-auto rounded-md object-cover mx-auto"
            />

            {/* Product Info */}
            <div className="mt-6 text-center">
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
            <div className="mt-4 flex justify-around">
              <CustomButton className="">
                Soon...
              </CustomButton>
              <button className="relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-2 py-2 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-cyan-300 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-cyan-300/40 hover:text-white after:hover:bg-opacity-20 focus:ring-2">
                <MdArrowOutward />
              </button>

              <CustomButton>
                Contact 
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingSection;