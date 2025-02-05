import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sol Taraf - İçerik */}
        <div className="lg:w-2/3 pl-8">
          <h1 className="text-4xl font-bold text-[#2c1810] mb-8">
            Avukatlık Büromuz Hakkında
          </h1>
          
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-left text-gray-700">
                Hukuk büromuz, 20 yılı aşkın tecrübesiyle müvekkillerimize kapsamlı hukuki hizmetler sunmaktadır. Alanında uzman avukatlarımız ile ticaret hukuku, iş hukuku, gayrimenkul hukuku ve aile hukuku başta olmak üzere birçok alanda profesyonel danışmanlık ve dava takip hizmetleri vermekteyiz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-left text-gray-700">
                Müvekkillerimizin hukuki sorunlarına çözüm odaklı yaklaşımımız ve etik değerlerimizden ödün vermeyen çalışma prensibimiz ile güvenilir bir hukuk danışmanı olmayı hedefliyoruz. Modern hukuk sisteminin gerektirdiği tüm teknolojik altyapıya sahip ofisimizde, her dosyaya özel ilgi göstererek en iyi hizmeti sunmaya çalışıyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-left text-gray-700">
                Yerli ve yabancı müvekkillerimize sundığumuz hizmetlerde, hukukun üstünlüğü ilkesini esas alarak, şeffaf ve güvenilir bir iletişim kurmayı önemsiyoruz. Deneyimli kadromuz ile hukuki süreçlerin her aşamasında yanınızda olmaktan gurur duyuyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Sağ Taraf - Fotoğraflar */}
        <div className="lg:w-1/3 relative h-[600px] hidden lg:block">
          {/* Ön Fotoğraf */}
          <div className="absolute right-0 top-0 w-4/5 h-[500px] z-20">
            <Image
              src="/media/aboutus.jpg"
              alt="Avukatlık Bürosu"
              fill
              style={{
                objectFit: 'cover',
                filter: 'grayscale(100%)'
              }}
              className="rounded-lg shadow-xl"
            />
          </div>
          
          {/* Arka Fotoğraf */}
          <div className="absolute right-20 top-20 w-4/5 h-[500px] z-10">
            <Image
              src="/media/aboutus1.jpg"
              alt="Avukatlık Bürosu"
              fill
              style={{
                objectFit: 'cover',
                filter: 'grayscale(100%)'
              }}
              className="rounded-lg shadow-xl opacity-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

