"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaPhone, FaSearch, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const ToggleButton = ({ isToggled, onToggle }: { isToggled: boolean, onToggle: () => void }) => {
  return (
    <button onClick={onToggle} className="p-2 bg-transparent text-white rounded">
      {isToggled ? <FaTimes /> : <FaSearch />}
    </button>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const isTransparentPage = pathname === '/' || pathname === '/hizmetler';

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Arama yapılıyor:", searchQuery);
  };

  return (
    <nav className={`fixed w-full z-[9999] transition-colors duration-300 ${
      isTransparentPage && !isOpen
        ? isScrolled 
          ? 'bg-[#2c1810] shadow-lg' 
          : 'bg-black/20 backdrop-blur-sm'
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
              { href: "/hesaplamalar", text: "Hesaplamalar" }
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
          </div>

          {/* Arama İkonu ve Çubuğu */}
          <div className="relative flex items-center"> 
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <FaTimes /> : <FaSearch />}
            </button>
            {isOpen && (
              <form onSubmit={handleSearch} className="absolute top-6 right-0 mt-2 flex items-center">
                <input
                  type="text"
                  placeholder="Arama yap..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-1 outline-none rounded-sm transition duration-200 w-48 text-sm text-black"
                />
                <button type="submit" className="bg-[#ffffff] p-2 rounded-md">
                  <FaSearch className="text-[#2c1810]" />
                </button>
              </form>
            )}
          </div>

          {/* Hamburger Menü Butonu */}
          <div className="md:hidden relative z-[9999]">
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
      </div>
    </nav>
  );
}
