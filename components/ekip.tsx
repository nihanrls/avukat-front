import Image from 'next/image';

export default function Lawyers() {
  const lawyers = [
    {
      name: "Av. Ahmet Yılmaz",
      title: "Kurucu Ortak",
      image: "/media/lawyer1.jpg",
      education: "İstanbul Üniversitesi Hukuk Fakültesi",
      experience: "20+ Yıl Tecrübe",
      expertise: "Ticaret Hukuku, Şirketler Hukuku",
      bio: "Hukuk kariyerine 2000 yılında başlayan Av. Ahmet Yılmaz, özellikle ticaret hukuku ve şirketler hukuku alanlarında uzmanlaşmıştır. Birçok ulusal ve uluslararası şirkete hukuki danışmanlık hizmeti vermektedir."
    },
    {
      name: "Av. Ayşe Kaya",
      title: "Kıdemli Ortak",
      image: "/media/lawyer2.jpg",
      education: "Ankara Üniversitesi Hukuk Fakültesi",
      experience: "15+ Yıl Tecrübe",
      expertise: "İş Hukuku, Borçlar Hukuku",
      bio: "2005 yılından bu yana aktif olarak avukatlık yapan Av. Ayşe Kaya, iş hukuku alanında uzmanlaşmış olup, çok sayıda kurumsal firmaya danışmanlık hizmeti vermektedir."
    },
    {
      name: "Av. Mehmet Demir",
      title: "Ortak",
      image: "/media/lawyer3.jpg",
      education: "Galatasaray Üniversitesi Hukuk Fakültesi",
      experience: "12+ Yıl Tecrübe",
      expertise: "Gayrimenkul Hukuku, İcra İflas Hukuku",
      bio: "Gayrimenkul hukuku ve icra iflas hukuku alanlarında uzmanlaşan Av. Mehmet Demir, kariyeri boyunca çok sayıda kompleks davayı başarıyla sonuçlandırmıştır."
    }
  ];

  return (
    <div className="container mx-auto py-8 md:py-16">
      <div className="px-4 md:px-8 lg:pl-8 mb-6 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c1810] mb-3 md:mb-4">Ekibimiz</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl">
          Deneyimli ve uzman avukatlarımızla hukuki süreçlerinizde yanınızdayız.
        </p>
      </div>

      <div className="px-4 md:px-8 lg:pl-8 space-y-6 md:space-y-8">
        {lawyers.map((lawyer, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 bg-white rounded-lg p-4 md:p-6 shadow-md">
            {/* Avukat Fotoğrafı */}
            <div className="relative w-full md:w-1/3 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
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
