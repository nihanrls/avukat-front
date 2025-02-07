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
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form verileri:", formData);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#2c1810]">İş Gücü Kaybı Tazminatı Hesaplama Robotu</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-color-gray-300" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-300 p-2 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-1">Kaza Türü *</label>
            <div className="flex items-center">
              <label className="inline-flex items-center mr-2">
                <input type="radio" name="kazaTuru" value="is" onChange={handleChange} className="form-radio" />
                <span className="ml-2">İş</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input type="radio" name="kazaTuru" value="trafik" onChange={handleChange} className="form-radio" />
                <span className="ml-2">Trafik</span>
              </label>
            </div>
          </div>

          <div className="border border-gray-300 p-2 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-1">Rapor Tarihi</label>
            <input type="date" name="raporTarihi" onChange={handleChange} className="form-input w-full" required />
          </div>

          <div className="border border-gray-300 p-2 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-1">Olay Tarihi</label>
            <input type="date" name="olayTarihi" onChange={handleChange} className="form-input w-full" required />
          </div>

          <div className="border border-gray-300 p-2 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-1">Hesap Yöntemi</label>
            <div className="flex items-center">
              <label className="inline-flex items-center mr-2">
                <input type="radio" name="hesapYontemi" value="progresif" onChange={handleChange} className="form-radio" />
                <span className="ml-2">Progresif R.</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="hesapYontemi" value="aktüeryal" onChange={handleChange} className="form-radio" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Ad Soyad</label>
                <input type="text" name="adSoyad" onChange={handleChange} className="border border-gray-300 rounded-md form-input w-full" />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Doğum Tarihi</label>
                <input type="date" name="dogumTarihi" onChange={handleChange} className="form-input w-full" />
              </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1">Ücret (AGİ'li)</label>
              <input type="number" name="ucret" onChange={handleChange} className="border border-gray-300 rounded-md form-input w-full" />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1">Cinsiyet</label>
              <div>
                <label className="inline-flex items-center mr-2">
                  <input type="radio" name="cinsiyet" value="erkek" onChange={handleChange} className="form-radio" />
                  <span className="ml-1">Erkek</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="cinsiyet" value="kadin" onChange={handleChange} className="form-radio" />
                  <span className="ml-1">Kadın</span>
                </label>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
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
