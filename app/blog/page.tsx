"use client";
import React, { useState } from 'react';
import NewsCard from '@/components/newscard';
import FilterTags from '@/components/FilterTags';
import Postara from '@/components/postara';

const news = [
  {
    id: "yeni-ticaret-kanunu-2024",
    title: "2024 Yılında Yürürlüğe Girecek Yeni Ticaret Kanunu Değişiklikleri",
    summary: "2024 yılında yürürlüğe girecek olan yeni Türk Ticaret Kanunu değişiklikleri, şirketlerin işleyişini ve ticari hayatı önemli ölçüde etkileyecek düzenlemeler getiriyor. Bu değişiklikler özellikle elektronik genel kurul ve dijital dönüşüm alanlarında yenilikler içeriyor.",
    image: "/media/news/ticaret-kanunu.jpg",
    date: "15 Aralık 2023",
    category: "Ticaret Hukuku"
  },
  {
    id: "is-hukuku-degisiklikler",
    title: "İş Hukukunda Yeni Dönem: Uzaktan Çalışma Düzenlemeleri",
    summary: "Pandemi sonrası kalıcı hale gelen uzaktan çalışma modeli için yeni yasal düzenlemeler yapıldı. İşveren ve çalışanların hak ve sorumluluklarını yeniden düzenleyen bu değişiklikler, modern çalışma hayatına uyum sağlamayı hedefliyor.",
    image: "/media/news/uzaktan-calisma.jpg",
    date: "10 Aralık 2023",
    category: "İş Hukuku"
  },
  {
    id: "aile-hukuku-yenilikler",
    title: "Aile Hukukunda Önemli Değişiklikler",
    summary: "Aile hukukunu ilgilendiren yeni yasal düzenlemeler Meclis'ten geçti. Özellikle boşanma süreçleri ve velayet konularında önemli değişiklikler içeren düzenlemeler, aileleri yakından ilgilendiriyor.",
    image: "/media/news/aile-hukuku.jpg",
    date: "5 Aralık 2023",
    category: "Aile Hukuku"
  },
  {
    id: "gayrimenkul-hukuku",
    title: "Gayrimenkul Alım-Satımında Yeni Dönem",
    summary: "Gayrimenkul alım-satım işlemlerinde dijital dönüşüm başlıyor. Tapu işlemlerinin elektronik ortamda yapılmasını sağlayacak yeni sistem, işlemleri hızlandıracak ve güvenliği artıracak.",
    image: "/media/news/gayrimenkul.jpg",
    date: "1 Aralık 2023",
    category: "Gayrimenkul Hukuku"
  }
];

const tags = ["Avukat", "Suç", "Kaza", "Danışmanlık", "Mülteci", "Göç"];

export default function Haberler() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mb-8 md:mb-12 pl-4">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-[#2c1810] mb-4">
              Hukuki Bloglar ve Güncellemeler
            </h1>
            <p className="text-center text-gray-600">
              Hukuk dünyasındaki son gelişmeler, yeni düzenlemeler ve önemli değişiklikler hakkında güncel bilgiler.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
          <div className="w-1/4">
            <FilterTags tags={tags} />
          <div className="mt-4">
            <Postara onSearch={handleSearch} />
          </div>
          </div>
          <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                summary={item.summary}
                image={item.image}
                date={item.date}
                category={item.category}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
