import Image from 'next/image';
import { FaBalanceScale, FaHandshake, FaGavel, FaClock, FaUsers, FaAward } from 'react-icons/fa';

export default function SpiderDiagram() {
  const features = [
    // Sol taraftaki özellikler
    {
      text: "20+ Yıllık Hukuki Tecrübe",
      icon: FaClock,
      position: "top-0 left-0 -translate-x-1/2",
      side: "left"
    },
    {
      text: "Geniş Hizmet Yelpazesi",
      icon: FaGavel,
      position: "top-1/3 left-0 -translate-x-1/2",
      side: "left"
    },
    {
      text: "Adil ve Şeffaf Yaklaşım",
      icon: FaBalanceScale,
      position: "top-2/3 left-0 -translate-x-1/2",
      side: "left"
    },
    // Sağ taraftaki özellikler
    {
      text: "Uzman Avukat Kadrosu",
      icon: FaUsers,
      position: "top-0 right-0 translate-x-1/2",
      side: "right"
    },
    {
      text: "Güvenilir Hukuki Danışmanlık",
      icon: FaHandshake,
      position: "top-1/3 right-0 translate-x-1/2",
      side: "right"
    },
    {
      text: "Başarılı Dava Geçmişi",
      icon: FaAward,
      position: "top-2/3 right-0 translate-x-1/2",
      side: "right"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative w-full max-w-4xl mx-auto h-[600px]">
        {/* Merkez Görsel */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/media/aboutus2.jpg"
            alt="Avukatlık Bürosu"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        {/* Özellikler */}
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`absolute ${feature.position} flex items-center ${
              feature.side === 'right' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* İkon - Büyütülmüş */}
            <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-[#2c1810] flex items-center justify-center translate-y-[25%]`}>
              <feature.icon className="text-[#E5B06E] text-3xl" />
            </div>
            
            {/* Metin */}
            <div className={`text-[#2c1810] font-semibold text-sm max-w-[200px] ${
              feature.side === 'right' ? 'mr-4' : 'ml-4'
            } ${
              feature.side === 'right' ? 'text-right' : 'text-left'
            }`}>
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}