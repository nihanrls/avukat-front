import Link from 'next/link';

export default function HesaplamalarDropdown({ isOpen, toggleDropdown }: { isOpen: boolean, toggleDropdown: () => void }) {
  return (
    <div className= {`text-center w-full absolute left-0 mt-2 bg-[#2c1810] text-white p-2 rounded shadow-lg transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
      <Link href="/hesaplamalar/isgucukaybi" className="block py-1">İş Gücü Kaybı</Link>
      <Link href="/hesaplama2" className="block py-1">Hesaplama 2</Link>
      <Link href="/hesaplama3" className="block py-1">Hesaplama 3</Link>
    </div>
  );
}
