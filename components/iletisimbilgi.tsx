import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function IletisimBilgi() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-8 md:mb-12 pl-4">
          <h2 className="text-center md:text-4xl font-bold text-[#2c1810] mb-4">
            İletişim Bilgileri
          </h2>
          <p className="text-center text-gray-600">
            Size en iyi hukuki danışmanlık hizmetini sunmak için buradayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {/* Telefon */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <FaPhone className="text-[#E5B06E] text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Telefon</h3>
            <p className="text-gray-600">+90 555 555 55 55</p>
            <p className="text-gray-600">+90 216 555 55 55</p>
          </div>

          {/* E-posta */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <FaEnvelope className="text-[#E5B06E] text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2c1810] mb-3">E-posta</h3>
            <p className="text-gray-600">info@wize.av.tr</p>
            <p className="text-gray-600">iletisim@wize.av.tr</p>
          </div>

          {/* Adres */}
          <div className="bg-white shadow-md rounded-lg p-4">
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
          <div className="bg-white shadow-md rounded-lg p-4">
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
