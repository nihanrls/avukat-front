"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800/90 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold">W</span>
            <div className="text-sm">
              <div>WIZE</div>
              <div>LAW SERVICES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-300">Ana Sayfa</Link>
            <Link href="/hakkinda" className="hover:text-gray-300">Hakkımızda</Link>
            <Link href="/hizmetler" className="hover:text-gray-300">Hizmetler</Link>
            <Link href="/avukatlar" className="hover:text-gray-300">Avukatlar</Link>
            <Link href="/haberler" className="hover:text-gray-300">Haberler</Link>
            <Link href="/sayfalar" className="hover:text-gray-300">Sayfalar</Link>
            <Link href="/iletisim" className="hover:text-gray-300">İletişim</Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gray-300">
              <FaSearch size={18} />
            </button>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" />
              <span className="text-lg font-semibold">800.567.1234</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-gray-300">Ana Sayfa</Link>
              <Link href="/hakkinda" className="hover:text-gray-300">Hakkımızda</Link>
              <Link href="/hizmetler" className="hover:text-gray-300">Hizmetler</Link>
              <Link href="/avukatlar" className="hover:text-gray-300">Avukatlar</Link>
              <Link href="/haberler" className="hover:text-gray-300">Haberler</Link>
              <Link href="/sayfalar" className="hover:text-gray-300">Sayfalar</Link>
              <Link href="/iletisim" className="hover:text-gray-300">İletişim</Link>
              <div className="flex items-center space-x-2 pt-2">
                <FaPhone className="text-blue-500" />
                <span className="text-lg font-semibold">800.567.1234</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
