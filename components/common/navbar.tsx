"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isTransparentPage = pathname === '/' || pathname === '/hizmetler';

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[9999] transition-colors duration-300 ${
      isTransparentPage && !isScrolled
        ? 'bg-black/20 backdrop-blur-sm'
        : 'bg-[#2c1810]'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 text-white relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 relative z-[9999]">
            <span className="text-3xl font-bold">W</span>
            <div className="text-sm">
              <div>WIZE</div>
              <div>Avukatlık Hizmetleri</div>
            </div>
          </Link>

          {/* Sayfalara Erişim Butonları */}
          <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
            {[
              { href: "/", text: "Ana Sayfa" },
              { href: "/hakkinda", text: "Hakkımızda" },
              { href: "/hizmetler", text: "Hizmetler" },
              { href: "/avukatlar", text: "Avukatlar" },
              { href: "/blog", text: "Blog" },
              { href: "/iletisim", text: "İletişim" },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="relative group"
              >
                <span className="hover:text-gray-300 transition-colors">
                  {link.text}
                </span>
              </Link>
            ))}

            {/* Hesaplamalar Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className="flex items-center text-white"
              >
                Hesaplamalar <span className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`}>►</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-[#2c1810] text-white p-2 rounded shadow-lg transition-all duration-300">
                  <Link href="/hesaplama1" className="block py-1">Hesaplama 1</Link>
                  <Link href="/hesaplama2" className="block py-1">Hesaplama 2</Link>
                  <Link href="/hesaplama3" className="block py-1">Hesaplama 3</Link>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menü Butonu */}
          <div className="md:hidden relative z-[9999]">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#2c1810] text-white p-4 flex flex-col">
          {[
            { href: "/", text: "Ana Sayfa" },
            { href: "/hakkinda", text: "Hakkımızda" },
            { href: "/hizmetler", text: "Hizmetler" },
            { href: "/avukatlar", text: "Avukatlar" },
            { href: "/blog", text: "Blog" },
            { href: "/iletisim", text: "İletişim" },
          ].map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block py-2"
              onClick={() => setIsOpen(false)} // Menü kapandığında otomatik olarak menüyü kapat
            >
              {link.text}
            </Link>
          ))}

          {/* Hesaplamalar Dropdown Mobil */}
          <div className="relative mt-4">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="flex items-center text-white"
            >
              Hesaplamalar <span className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`}>►</span>
            </button>
            {isDropdownOpen && (
              <div className="bg-[#2c1810] text-white p-2 rounded shadow-lg transition-all duration-300">
                <Link href="/hesaplama1" className="block py-1">Hesaplama 1</Link>
                <Link href="/hesaplama2" className="block py-1">Hesaplama 2</Link>
                <Link href="/hesaplama3" className="block py-1">Hesaplama 3</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
