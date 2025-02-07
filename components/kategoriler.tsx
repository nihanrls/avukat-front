"use client";
import React from 'react';

const categories = [
  "Aile Hukuku",
  "Kişisel Yaralanma",
  "Suç Hukuku",
  "Eğitim Hukuku",
  "İşletme Hukuku",
  "Gayrimenkul Hukuku"
];

const Kategoriler = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#2c1810]">Kategoriler</h2>
      <div className="flex flex-col space-y-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-white rounded-md transition-transform duration-200 hover:transform hover:scale-105 hover:bg-[#d4b996] cursor-pointer"
          >
            <span className="mr-2 text-gray-700">•</span>
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategoriler;
