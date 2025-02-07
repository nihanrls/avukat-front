"use client";
import React, { useState } from 'react';

const IsGucuKaybiForm = () => {
  const [formData, setFormData] = useState({
    kazaTuru: '',
    raporTarihi: '',
    olayTarihi: '',
    hesapYontemi: '',
    faiz: '',
    adSoyad: '',
    dogumTarihi: '',
    ucret: '',
    cinsiyet: '',
    tha: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemleri burada yapılabilir
    console.log("Form verileri:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#2c1810]">İş Gücü Kaybı Tazminatı Hesaplama Robotu</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-color-gray-300" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-300 p-4 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-2">Kaza Türü *</label>
            <div>
              <label className="inline-flex items-center">
                <input type="radio" name="kazaTuru" value="is" onChange={handleChange} className="form-radio" />
                <span className="ml-2">İş</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" name="kazaTuru" value="trafik" onChange={handleChange} className="form-radio" />
                <span className="ml-2">Trafik</span>
              </label>
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rapor Tarihi</label>
            <input type="date" name="raporTarihi" onChange={handleChange} className="form-input w-full" required />
          </div>

          <div className="border border-gray-300 p-4 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-2">Olay Tarihi</label>
            <input type="date" name="olayTarihi" onChange={handleChange} className="form-input w-full" required />
          </div>

          <div className="border border-gray-300 p-4 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-2">Hesap Yöntemi</label>
            <div>
              <label className="inline-flex items-center">
                <input type="radio" name="hesapYontemi" value="progresif" onChange={handleChange} className="form-radio" />
                <span className="ml-2">Progresif R.</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input 
                  type="radio" 
                  name="hesapYontemi" 
                  value="aktüeryal" 
                  onChange={handleChange} 
                  className="form-radio" 
                />
                <span className="ml-2">Aktüeryal</span>
              </label>
              <label className="border border-gray-300 p-1 rounded inline-flex items-center ml-4">
                <input 
                  type="checkbox" 
                  name="tha" 
                  onChange={handleChange} 
                  className="form-checkbox" 
                />
                <span className="ml-2">T.H.A</span>
              </label>
            </div>
          </div>
          {/* T. Faiz (%) alanı, sadece Aktüeryal seçeneği seçildiğinde görünür */}
          {formData.hesapYontemi === 'aktüeryal' && (
            <div className="border border-gray-300 p-4 rounded">
              <label className="block text-gray-700 text-sm font-bold mb-2">T. Faiz (%)</label>
              <input 
                type="number" 
                name="faiz" 
                onChange={handleChange} 
                className="border border-gray-300 rounded-md form-input w-full" 
              />
            </div>
          )}

          {/* Davacı Bilgileri Başlığı */}
          <div className="col-span-2 border border-gray-300 p-4 rounded mt-4">
            <h2 className="text-lg text-[#2c1810] font-bold mb-4">Davacı Bilgileri</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Ad Soyad</label>
              <input type="text" name="adSoyad" onChange={handleChange} className="border border-gray-300 rounded-md form-input w-full" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Doğum Tarihi</label>
              <input type="date" name="dogumTarihi" onChange={handleChange} className="form-input w-full" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Ücret (AGİ'li)</label>
              <input type="number" name="ucret" onChange={handleChange} className="border border-gray-300 rounded-md form-input w-full" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Cinsiyet</label>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name="cinsiyet" value="erkek" onChange={handleChange} className="form-radio" />
                  <span className="ml-2">Erkek</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input type="radio" name="cinsiyet" value="kadin" onChange={handleChange} className="form-radio" />
                  <span className="ml-2">Kadın</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button type="button" className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
            Temizle
          </button>
          <button type="submit" className="bg-[#2c1810] hover:bg-[#3b2320] text-white font-bold py-2 px-4 rounded">
            Hesapla
          </button>
        </div>
      </form>
    </div>
  );
};

export default IsGucuKaybiForm;
