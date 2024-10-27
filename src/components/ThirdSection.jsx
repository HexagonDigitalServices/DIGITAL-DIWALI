// src/components/SellingSection.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Besan Ladoo - Dry Fruit",
    price: "$384",
    image: "/assets/ladoo.png", // Replace with your image path
    label: "Hot",
  },
  {
    id: 2,
    name: "Handmade Diya",
    price: "$200",
    originalPrice: "$400", // Original price crossed out
    image: "/assets/diya.png",
  },
  {
    id: 3,
    name: "Shape Crackers",
    price: "$503",
    image: "/assets/crackers.png",
    label: "20% Off",
  },
  {
    id: 4,
    name: "String Light",
    price: "$900",
    originalPrice: "$1000",
    image: "/assets/string-light.png",
  },
];

const SellingSection = () => {
  return (
    <div className="relative bg-gray-900 py-12 ">
    <div className="absolute inset-0 z-0 bg-gradient-to-bl from-blue-950 to-indigo-500 blur-3xl opacity-40"></div>

      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Best Offer on Saas Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className=" relative z-10 bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-white/30"
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
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-orange-500 text-xl font-bold">
                {product.price}
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm ml-2">
                    {product.originalPrice}
                  </span>
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-around">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Quick View
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingSection;
