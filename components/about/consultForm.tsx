'use client'

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form işlemleri
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-8 md:mb-12 pl-4">
          <h2 className="text-center text-3xl md:text-4xl font-light text-[#2c1810] mb-4">
            Bize Ulaşın
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          {/* İsim, Email ve Telefon (Yan Yana) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* İsim Soyisim */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                İsim Soyisim <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E5B06E] focus:border-[#E5B06E] outline-none transition-colors"
                placeholder="Adınız Soyadınız"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E5B06E] focus:border-[#E5B06E] outline-none transition-colors"
                placeholder="ornek@email.com"
              />
            </div>

            {/* Telefon */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E5B06E] focus:border-[#E5B06E] outline-none transition-colors"
                placeholder="0555 555 55 55"
              />
            </div>
          </div>

          {/* Mesaj */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E5B06E] focus:border-[#E5B06E] outline-none transition-colors resize-none"
              placeholder="Mesajınızı buraya yazın..."
            ></textarea>
          </div>

          {/* Gönder Butonu */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#d4b996] hover:bg-[#c5aa87] text-[#2c1810] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
