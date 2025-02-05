import React from 'react';
import Link from 'next/link';
import { FaBalanceScale, FaHandshake, FaGavel, FaBuilding, FaUsers, FaFileContract } from 'react-icons/fa';

export default function HizmetlerPage() {
  const hizmetler = [
    {
      icon: <FaBalanceScale size={40} />,
      title: "Ticaret Hukuku",
      description: "Şirket kuruluşları, birleşmeler ve devralmalar, ticari sözleşmeler ve uyuşmazlık çözümleri konularında uzman hukuki danışmanlık hizmetleri sunuyoruz."
    },
    {
      icon: <FaHandshake size={40} />,
      title: "İş Hukuku",
      description: "İşçi-işveren ilişkileri, iş sözleşmeleri, işe iade davaları ve toplu iş hukuku alanlarında kapsamlı hukuki destek sağlıyoruz."
    },
    {
      icon: <FaGavel size={40} />,
      title: "Ceza Hukuku",
      description: "Ceza davalarında savunma, soruşturma ve kovuşturma süreçlerinde müvekkillerimizin haklarını en iyi şekilde koruyoruz."
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Gayrimenkul Hukuku",
      description: "Taşınmaz alım-satımı, kira sözleşmeleri, kat mülkiyeti ve imar hukuku konularında danışmanlık hizmetleri veriyoruz."
    },
    {
      icon: <FaUsers size={40} />,
      title: "Aile Hukuku",
      description: "Boşanma, nafaka, velayet ve miras hukuku konularında uzman kadromuzla yanınızdayız."
    },
    {
      icon: <FaFileContract size={40} />,
      title: "Sözleşmeler Hukuku",
      description: "Her türlü ticari ve bireysel sözleşmelerin hazırlanması, incelenmesi ve müzakere süreçlerinde profesyonel destek sunuyoruz."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#6F4E37] text-white py-20 mt-[0px]">
        {/* Arka plan görseli */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/media/law.jpg)',
            backgroundPosition: 'center 40%',
            top: '-80px',
            height: 'calc(100% + 80px)'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* İçerik */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#dcc4a6]">Hukuki Hizmetlerimiz</h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Uzman kadromuzla hukuki süreçlerinizde yanınızdayız. Modern ve profesyonel yaklaşımımızla en iyi hizmeti sunuyoruz.
          </p>
        </div>
      </div>

      {/* Hizmetler Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hizmetler.map((hizmet, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#2c1810] mb-4">
                {hizmet.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-3">
                {hizmet.title}
              </h3>
              <p className="text-gray-600">
                {hizmet.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Alt Bilgi */}
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
    </div>
  );
}
