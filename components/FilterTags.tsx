"use client";
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Türkçe karakterleri normalize eden fonksiyon
const normalizeString = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9\s]/g, ''); // Sadece alfanümerik karakterleri ve boşlukları bırak
};

const FilterTags = ({ tags }: { tags: string[] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Arama sorgusuna göre etiketleri filtrele (büyük/küçük harf ve Türkçe karakter hassasiyeti yok)
  const filteredTags = tags.filter(tag => 
    normalizeString(tag).includes(normalizeString(searchQuery))
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs md:max-w-sm lg:max-w-md">
      <h2 className="text-lg font-semibold mb-2 text-[#2c1810]">Etiketler</h2>
      <div className="flex items-center mb-4">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Etiket ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 w-full transition duration-200"
        />
      </div>
      <div className="flex flex-wrap">
        {filteredTags.length > 0 ? (
          filteredTags.map((tag, index) => (
            <span key={index} className="bg-[#d4b996] text-white rounded-full px-3 py-1 text-sm mr-2 mb-2 cursor-pointer hover:bg-[#baa182] transition duration-200">
              {tag}
            </span>
          ))
        ) : (
          <p className="text-gray-500">Hiç etiket bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default FilterTags; 