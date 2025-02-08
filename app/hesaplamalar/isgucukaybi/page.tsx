"use client";
import React, { useState } from 'react';

const IsGucuKaybiForm = () => {
  const [formData, setFormData] = useState(() => ({
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
    kusur: '',
    igk: '',
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form verileri:", formData);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#2c1810]">İş Gücü Kaybı Tazminatı Hesaplama Robotu</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-color-gray-300" onSubmit={handleSubmit}>
        
        {/* Davacı Bilgileri Başlığı */}
        <div className="col-span-2 border border-gray-300 p-3 rounded mt-0 mb-3">
          <h2 className="text-lg text-[#2c1810] font-bold mb-4">Davacı Bilgileri</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">Ad Soyad</label>
              <input type="text" name="adSoyad" value={formData.adSoyad} onChange={handleChange} className="border border-gray-300 rounded-md form-input w-full" />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">Doğum Tarihi</label>
              <input type="date" name="dogumTarihi" value={formData.dogumTarihi} onChange={handleChange} className="form-input w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-1">
            {/* Ücret (AGİ'li) alanı */}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1">Ücret (AGİ'li)</label>
              <input type="number" name="ucret" value={formData.ucret} onChange={handleChange} className="border border-gray-300 rounded-md form-input w-full" />
            </div>

            {/* Cinsiyet alanı */}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1">Cinsiyet</label>
              <div>
                <label className="inline-flex items-center mr-2">
                  <input type="radio" name="cinsiyet" value={formData.cinsiyet === 'erkek' ? 'erkek' : ''} onChange={handleChange} className="form-radio" />
                  <span className="ml-1">Erkek</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="cinsiyet" value={formData.cinsiyet === 'kadin' ? 'kadin' : ''} onChange={handleChange} className="form-radio" />
                  <span className="ml-1">Kadın</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          {/* Yaşam Tablosu Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-1">Yaşam Tablosu</label>
            <select name="yasamTablosu" onChange={handleChange} className="border border-gray-300 rounded-md form-input w-full">
              <option value="">- Seçiniz -</option>
              <option value="PMF-1931">PMF-1931</option>
              <option value="CSO-1980">CSO-1980</option>
              <option value="TRH-2010">TRH-2010</option>
              <option value="GATT-1983">GATT-1983</option>
            </select>
          </div>

          {/* Kaza Türü */}
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          {/* Rapor Tarihi */}
          <div className="border border-gray-300 p-2 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-1">Rapor Tarihi</label>
            <input type="date" name="raporTarihi" value={formData.raporTarihi} onChange={handleChange} className="form-input w-full" required />
          </div>

          {/* Olay Tarihi */}
          <div className="border border-gray-300 p-2 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-1">Olay Tarihi</label>
            <input type="date" name="olayTarihi" value={formData.olayTarihi} onChange={handleChange} className="form-input w-full" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 border border-gray-300 p-2 rounded">
          {/* Hesap Yöntemi */}
          <div className="p-2">
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
                  checked={formData.tha}
                  onChange={handleChange} 
                  className="form-checkbox" 
                  disabled={formData.hesapYontemi !== 'aktüeryal'} 
                />
                <span className="ml-2">T.H.A</span>
              </label>
            </div>
          </div>

          {/* T. Faiz (%) alanı, Hesap Yöntemi kutucuğunun sağ tarafına alındı */}
          <div className="p-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">T. Faiz (%)</label>
            <input 
              type="number" 
              name="faiz" 
              value={formData.faiz}
              onChange={handleChange} 
              className="border border-gray-300 rounded-md form-input w-full" 
              disabled={formData.hesapYontemi !== 'aktüeryal'} 
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-2 mt-3">
          {/* Kusur Oranı */}
          <div className="border border-gray-300 p-4 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-2">Kusur Oranı (%)</label>
            <input 
              type="number" 
              name="kusur" 
              value={formData.kusur} 
              onChange={handleChange} 
              className="border border-gray-300 rounded-md form-input w-full" 
            />
          </div>

          {/* İ.G.K. Oranı */}
          <div className="border border-gray-300 p-4 rounded">
            <label className="block text-gray-700 text-sm font-bold mb-2">İ.G.K. Oranı (%)</label>
            <input 
              type="number" 
              name="igk" 
              value={formData.igk} 
              onChange={handleChange} 
              className="border border-gray-300 rounded-md form-input w-full" 
            />
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
