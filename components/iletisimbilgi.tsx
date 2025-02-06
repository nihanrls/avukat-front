import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function IletisimBilgi() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-8 md:mb-12 pl-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c1810] mb-4">
            İletişim Bilgileri
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Size en iyi hukuki danışmanlık hizmetini sunmak için buradayız.
          </p>
        </div>

        <div className="w-[90%] mx-auto h-[300px] md:h-[400px] lg:h-[500px] mb-12 md:mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12764.132520468675!2d30.639687999999997!3d36.8674683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39c5fb2c3498d%3A0x9ba0016c086e71e!2zS29ueWFhbHTEsSBTYWhpbGk!5e0!3m2!1str!2str!4v1710272027071!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg shadow-md"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {/* Telefon */}
          <div>
            <FaPhone className="text-[#E5B06E] text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Telefon</h3>
            <p className="text-gray-600">+90 555 555 55 55</p>
            <p className="text-gray-600">+90 216 555 55 55</p>
          </div>

          {/* E-posta */}
          <div>
            <FaEnvelope className="text-[#E5B06E] text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2c1810] mb-3">E-posta</h3>
            <p className="text-gray-600">info@wize.av.tr</p>
            <p className="text-gray-600">iletisim@wize.av.tr</p>
          </div>

          {/* Adres */}
          <div>
            <FaMapMarkerAlt className="text-[#E5B06E] text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Adres</h3>
            <p className="text-gray-600">
              Konyaaltı Plajı
              <br />
              Konyaaltı, Antalya
              <br />
              07050
            </p>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <FaClock className="text-[#E5B06E] text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Çalışma Saatleri</h3>
            <p className="text-gray-600">
              Pazartesi - Cuma
              <br />
              09:00 - 18:00
              <br />
              <span className="text-sm text-gray-500">
                (Hafta sonu randevu ile)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
