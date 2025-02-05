import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Kaliteli Hizmet",
      description: "Profesyonel ekibimizle en iyi hizmeti sunuyoruz",
      image: "/images/hero-1.jpg", // Bu görselleri projenize eklemeyi unutmayın
      buttonText: "Detaylı Bilgi"
    },
    {
      id: 2,
      title: "Güvenilir Çözümler",
      description: "20 yıllık tecrübemizle yanınızdayız",
      image: "/images/hero-2.jpg",
      buttonText: "Bize Ulaşın"
    },
    {
      id: 3,
      title: "Modern Yaklaşım",
      description: "Yenilikçi çözümlerle işinizi ileriye taşıyın",
      image: "/images/hero-3.jpg",
      buttonText: "Hizmetlerimiz"
    }
  ];

  // Önceki slide'a geçiş
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Sonraki slide'a geçiş
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Otomatik slider için
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Her 5 saniyede bir değişir

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Slider görselleri */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Arka plan görseli */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Karartma overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* İçerik - Sol tarafta sabit genişlik ve padding */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-full">
              <div className="w-full md:w-[500px] text-white ml-[15%]">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8">
                  {slide.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Sol bölge ve ok - İçerikten uzakta */}
      <div className="absolute left-0 top-0 w-[15%] h-full group">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Önceki slayt"
        >
          <FaChevronLeft size={32} />
        </button>
      </div>

      {/* Sağ bölge ve ok */}
      <div className="absolute right-0 top-0 w-[15%] h-full group">
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Sonraki slayt"
        >
          <FaChevronRight size={32} />
        </button>
      </div>

      {/* Slider noktaları */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
