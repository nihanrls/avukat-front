"use client";
import Image from "next/image";
import Link from "next/link";
import HeroSection from '../components/herosec';
import { FaBalanceScale, FaHandshake, FaGavel, FaUserTie, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  
  const teamMembers = [
    { id: 1, title: "Kurucu" },
    { id: 2, title: "Kurucu Ortak" },
    { id: 3, title: "Avukat" },
    { id: 4, title: "Avukat" },
    { id: 5, title: "Avukat" },
    { id: 6, title: "Avukat" }  
  ];

  const handlePrevious = () => {
    setStartIndex((prev) => {
      if (prev === 0) {
        return teamMembers.length - 4; // Son 4'lü gruba git
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      if (prev >= teamMembers.length - 4) {
        return 0; // Başa dön
      }
      return prev + 1;
    });
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      
      {/* Ana İçerik */}
      <main className="bg-white">
        {/* Hakkımızda Özet */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-4">Hukuk Büromuz Hakkında</h2>
            <div className="w-24 h-1 bg-[#E5B06E] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/media/office.jpg"
                alt="Hukuk Bürosu"
                fill
                style={{objectFit: 'cover'}}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                20 yılı aşkın tecrübemizle, müvekkillerimize en yüksek kalitede hukuki danışmanlık ve temsil hizmeti sunmaktayız. Uzman kadromuz, güncel hukuki gelişmeleri yakından takip ederek, her davanın özeline uygun çözümler üretmektedir.
              </p>
              <Link href="/hakkimizda">
                <button className="mt-6 px-6 py-3 bg-[#2c1810] text-white rounded hover:bg-[#3d251a] transition-colors">
                  Detaylı Bilgi
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Uzmanlık Alanları */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2c1810] mb-4">Uzmanlık Alanlarımız</h2>
              <div className="w-24 h-1 bg-[#E5B06E] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaBalanceScale className="w-12 h-12" />,
                  title: "Ticaret Hukuku",
                  description: "Şirketler hukuku, sözleşmeler ve ticari uyuşmazlıklar konusunda uzman çözümler."
                },
                {
                  icon: <FaGavel className="w-12 h-12" />,
                  title: "Ceza Hukuku",
                  description: "Ceza davalarında profesyonel savunma ve hukuki danışmanlık hizmetleri."
                },
                {
                  icon: <FaHandshake className="w-12 h-12" />,
                  title: "İş Hukuku",
                  description: "İşçi-işveren ilişkileri ve iş davalarında uzman hukuki destek."
                }
              ].map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="text-[#E5B06E] mb-4 flex justify-center">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c1810] mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ekibimiz Özet */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-4">Uzman Ekibimiz</h2>
            <div className="w-24 h-1 bg-[#E5B06E] mx-auto"></div>
          </div>
          <div className="relative overflow-hidden">
            {/* Sol Ok */}
            <button 
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2c1810] text-white p-2 rounded-full shadow-lg hover:bg-[#3d251a] cursor-pointer transition-colors"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            {/* Avukatlar Grid */}
            <div className="overflow-hidden px-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${startIndex * 25}%)` }}
              >
                {teamMembers.map((member) => (
                  <div key={member.id} className="w-1/4 flex-shrink-0 px-4">
                    <div className="text-center">
                      <div className="relative w-48 h-48 mx-auto mb-4">
                        <Image
                          src={`/media/lawyer${member.id}.jpg`}
                          alt={`Avukat ${member.id}`}
                          fill
                          style={{objectFit: 'cover'}}
                          className="rounded-full"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#2c1810]">Av. İsim Soyisim</h3>
                      <p className="text-gray-600">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ Ok */}
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2c1810] text-white p-2 rounded-full shadow-lg hover:bg-[#3d251a] cursor-pointer transition-colors"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* İstatistikler */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2c1810] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "20+", text: "Yıllık Tecrübe" },
                { number: "1000+", text: "Başarılı Dava" },
                { number: "500+", text: "Mutlu Müvekkil" },
                { number: "15+", text: "Uzman Avukat" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-[#E5B06E] mb-2">{stat.number}</div>
                  <div className="text-sm">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
