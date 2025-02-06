import Image from 'next/image';

export default function Strategy() {
  const strategies = [
    {
      number: "01.",
      title: "Düşünme",
      description: "Her türlü hukuki davada makul fiyatlı, profesyonel ve mahkeme deneyimi olan avukatlar sağlamaya kendimizi adadık.",
      image: "/media/strategy-1.jpg"
    },
    {
      number: "02.",
      title: "Araştırma",
      description: "Hem hukuki hem de cezai davalarda, kısa sürede nitelikli ve deneyimli avukatları hizmetinize sunabiliyoruz.",
      image: "/media/strategy-2.jpg"
    },
    {
      number: "03.",
      title: "Koruma",
      description: "İfade alma, inceleme, duruşma süreçlerini yönetecek ve hukuki belgelerin hazırlanmasında yardımcı olacak avukatlar sağlıyoruz.",
      image: "/media/strategy-3.jpg"
    }
  ];

  return (
    <div className="container mx-auto py-8 md:py-16">
      <div className="px-4 md:pl-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c1810] mb-4">Stratejimiz</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl">
          Hukuk büromuzun avukatları, hukukun farklı alanlarında geniş bilgi ve deneyime sahip uzman hukukçulardır. Arzu ettiğiniz sonuca ulaşmanız için gerekli tüm hukuki adımları en doğru şekilde atarlar.
        </p>
      </div>

      <div className="px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {strategies.map((strategy, index) => (
          <div key={index} className="flex flex-col">
            {/* Görsel */}
            <div className="relative h-48 sm:h-56 md:h-64 mb-4 md:mb-6">
              <Image
                src={strategy.image}
                alt={strategy.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg grayscale"
              />
            </div>

            {/* İçerik */}
            <div className="flex gap-3 md:gap-4 items-start">
              <span className="text-4xl md:text-6xl font-bold text-[#E5B06E] leading-none">
                {strategy.number}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2c1810] mb-2 md:mb-3">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
