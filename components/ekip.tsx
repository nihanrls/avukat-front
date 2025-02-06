import Image from 'next/image';

export default function Lawyers() {
  const lawyers = [
    {
      name: "Av. Ahmet Yılmaz",
      title: "Kurucu Ortak",
      image: "/media/lawyers/lawyer1.jpg",
      education: "İstanbul Üniversitesi Hukuk Fakültesi",
      experience: "20+ Yıl Tecrübe",
      expertise: "Ticaret Hukuku, Şirketler Hukuku",
      email: "ahmet.yilmaz@wize.av.tr",
      bio: "Hukuk kariyerine 2000 yılında başlayan Av. Ahmet Yılmaz, özellikle ticaret hukuku ve şirketler hukuku alanlarında uzmanlaşmıştır. Birçok ulusal ve uluslararası şirkete hukuki danışmanlık hizmeti vermektedir."
    },
    {
      name: "Av. Ayşe Kaya",
      title: "Kıdemli Ortak",
      image: "/media/lawyers/lawyer2.jpg",
      education: "Ankara Üniversitesi Hukuk Fakültesi",
      experience: "15+ Yıl Tecrübe",
      expertise: "İş Hukuku, Borçlar Hukuku",
      email: "ayse.kaya@wize.av.tr",
      bio: "2005 yılından bu yana aktif olarak avukatlık yapan Av. Ayşe Kaya, iş hukuku alanında uzmanlaşmış olup, çok sayıda kurumsal firmaya danışmanlık hizmeti vermektedir."
    },
    {
      name: "Av. Mehmet Demir",
      title: "Ortak",
      image: "/media/lawyers/lawyer3.jpg",
      education: "Galatasaray Üniversitesi Hukuk Fakültesi",
      experience: "12+ Yıl Tecrübe",
      expertise: "Gayrimenkul Hukuku, İcra İflas Hukuku",
      email: "mehmet.demir@wize.av.tr",
      bio: "Gayrimenkul hukuku ve icra iflas hukuku alanlarında uzmanlaşan Av. Mehmet Demir, kariyeri boyunca çok sayıda kompleks davayı başarıyla sonuçlandırmıştır."
    },
    {
      name: "Av. Zeynep Yıldız",
      title: "Avukat",
      image: "/media/lawyers/lawyer4.jpg",
      education: "Marmara Üniversitesi Hukuk Fakültesi",
      experience: "8+ Yıl Tecrübe",
      expertise: "Aile Hukuku, Miras Hukuku",
      email: "zeynep.yildiz@wize.av.tr",
      bio: "Aile hukuku ve miras hukuku alanlarında uzmanlaşan Av. Zeynep Yıldız, hassas aile meselelerinde ve miras davalarında müvekkillerine profesyonel hukuki destek sağlamaktadır."
    }
  ];

  return (
    <div className="container mx-auto py-8 md:py-16">
      <div className="px-6 md:px-12 lg:px-16 mb-6 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c1810] mb-3 md:mb-4">Avukatlarımızla Tanışın</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl">
          Deneyimli ve uzman avukatlarımızla hukuki süreçlerinizde yanınızdayız.
        </p>
      </div>

      <div className="px-6 md:px-12 lg:px-16 space-y-6 md:space-y-8">
        {lawyers.map((lawyer, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 bg-white rounded-lg p-4 md:p-6 shadow-md">
            {/* Avukat Fotoğrafı */}
            <div className="relative w-full md:w-1/3 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <Image
                src={lawyer.image}
                alt={lawyer.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg grayscale"
              />
            </div>

            {/* Avukat Bilgileri */}
            <div className="w-full md:w-2/3 space-y-3 md:space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c1810]">{lawyer.name}</h3>
                <p className="text-[#E5B06E] text-sm md:text-base font-semibold">{lawyer.title}</p>
              </div>

              <div className="space-y-1 md:space-y-2">
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-semibold">Eğitim:</span> {lawyer.education}
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-semibold">Tecrübe:</span> {lawyer.experience}
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-semibold">Uzmanlık Alanları:</span> {lawyer.expertise}
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-semibold">E-posta:</span>{" "}
                  <a href={`mailto:${lawyer.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {lawyer.email}
                  </a>
                </p>
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {lawyer.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
