import Image from 'next/image';
import Link from 'next/link';

type NewsCardProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
};

export default function NewsCard({ id, title, summary, image, date, category }: NewsCardProps) {
  return (
    <Link href={`/haberler/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative h-40 md:h-52">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-3 md:p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#E5B06E]">{category}</span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#2c1810] mb-2 group-hover:text-[#E5B06E] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base line-clamp-3">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
}