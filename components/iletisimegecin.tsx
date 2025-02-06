import Link from 'next/link';

export default function IletisimeGecin() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#2c1810] mb-4">
          Profesyonel Hukuki Danışmanlık
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Hukuki süreçlerinizde size yardımcı olmak için buradayız. Detaylı bilgi ve randevu için bizimle iletişime geçebilirsiniz.
        </p>
        <Link href="/iletisim">
          <button className="bg-[#2c1810] text-white px-8 py-3 rounded-lg hover:bg-[#3d2217] transition-colors duration-300">
            İletişime Geçin
          </button>
        </Link>
      </div>
    </div>
  );
}
