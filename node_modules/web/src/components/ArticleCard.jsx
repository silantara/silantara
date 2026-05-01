import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

function ArticleCard({ title, excerpt, date, author, image, category }) {
  // Membuat "link ramah SEO" dari judul agar fungsi Link berjalan otomatis
  const slug = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

  return (
    <div className="bg-white rounded-[2rem] h-full flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
      
      {/* 1. BAGIAN GAMBAR (Sesuai kode terbaru Kakak) */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            {category}
          </span>
        )}
      </div>

      {/* 2. BAGIAN KONTEN (Dipadukan agar flexbox tetap rapi) */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1"><Calendar size={14}/> {date}</span>
          <span className="flex items-center gap-1"><User size={14}/> {author}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-grow">
          {excerpt}
        </p>

        {/* 3. TOMBOL (Sekarang dibungkus Link agar benar-benar berfungsi) */}
        <Link to={`/artikel/${slug}`} className="inline-block">
          <button className="flex items-center font-bold text-sm text-slate-900 group-hover:gap-3 transition-all outline-none">
            Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;