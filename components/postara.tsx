"use client";
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Postara bileşeni
const Postara = ({ onSearch }: { onSearch: (query: string) => void }   ) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery); // Arama sorgusunu üst bileşene ilet
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto flex items-center">
      <form onSubmit={handleSearch} className="flex w-full">
        <input
          type="text"
          placeholder="Post Ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-l-md px-3 py-2 w-full focus:outline-none transition duration-200"
        />
        <button type="submit" className="bg-[#d4b996] rounded-r-md p-2 flex items-center">
          <FaSearch className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Postara;
