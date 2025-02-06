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
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();
  const isTransparentPage = pathname === '/' || pathname === '/hizmetler';

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const line = link.querySelector('.hover-line') as HTMLElement;
    
    if (line) {
      if (mouseX < rect.width / 2) {
        line.style.transformOrigin = 'left';
      } else {
        line.style.transformOrigin = 'right';
      }
      line.style.transform = 'scaleX(1)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const line = link.querySelector('.hover-line') as HTMLElement;
    
    if (line) {
      if (mouseX < rect.width / 2) {
        line.style.transformOrigin = 'right';
      } else {
        line.style.transformOrigin = 'left';
      }
      line.style.transform = 'scaleX(0)';
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Arama yapılıyor:", searchQuery);
    // Arama sonuçları sayfasına yönlendirme yapılabilir
    // window.location.href = `/search?query=${searchQuery}`;
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

          {/* Arama İkonu */}
          <div className="relative ml-4">
            <ToggleButton isToggled={showSearch} onToggle={() => setShowSearch((prev) => !prev)} />
            {showSearch && (
              <form onSubmit={handleSearch} className="absolute right-0 flex items-center bg-white rounded-md shadow-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Arama yap..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-1 outline-none rounded-md focus:ring-2 focus:ring-[#ffffff] transition duration-200 w-48 text-sm text-black"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", text: "Ana Sayfa" },
              { href: "/hakkinda", text: "Hakkımızda" },
              { href: "/hizmetler", text: "Hizmetler" },
              { href: "/avukatlar", text: "Avukatlar" },
              { href: "/blog", text: "Blog" },
              { href: "/iletisim", text: "İletişim" }
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="hover:text-gray-300 transition-colors">
                  {link.text}
                </span>
                <span className="hover-line absolute -bottom-2 left-0 w-full h-0.5 bg-[#E5B06E] transform scale-x-0 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" />
              <span className="text-lg font-semibold">555 555 55 55</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[#2c1810] z-[9998]">
            <div className="pt-24 px-4">
              <div className="flex flex-col space-y-6">
                {[
                  { href: "/", text: "Ana Sayfa" },
                  { href: "/hakkinda", text: "Hakkımızda" },
                  { href: "/hizmetler", text: "Hizmetler" },
                  { href: "/avukatlar", text: "Avukatlar" },
                  { href: "/blog", text: "Blog" },
                  { href: "/iletisim", text: "İletişim" }
                ].map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl hover:text-[#E5B06E] transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="pt-8 border-t border-gray-700">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <FaPhone className="text-blue-500" />
                    <span className="text-xl">555 555 55 55</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
