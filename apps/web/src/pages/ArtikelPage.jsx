import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { MessageCircle, ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ArtikelPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Pendirian', 'Perizinan'];

  const articles = [
    {
      title: 'Panduan lengkap mendirikan PT di Indonesia tahun 2026',
      excerpt: 'Pelajari langkah-langkah praktis dan persyaratan terbaru untuk mendirikan Perseroan Terbatas di Indonesia.',
      date: '15 Maret 2026',
      author: 'Rina Kusuma',
      category: 'Pendirian',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      featured: true
    },
    {
      title: 'Perbedaan PT dan CV: mana yang tepat untuk bisnis Anda?',
      excerpt: 'Memahami karakteristik, kelebihan, dan kekurangan PT dan CV untuk membantu Anda memilih bentuk badan usaha.',
      date: '12 Maret 2026',
      author: 'Dimas Prasetyo',
      category: 'Pendirian',
      image: 'https://images.unsplash.com/photo-1638312105950-27539b2efce4?q=80&w=1074&auto=format&fit=crop',
      featured: true
    },
    {
      title: 'Cara mengurus NIB melalui sistem OSS terbaru',
      excerpt: 'Tutorial step-by-step mengurus Nomor Induk Berusaha melalui sistem Online Single Submission.',
      date: '8 Maret 2026',
      author: 'Ayu Lestari',
      category: 'Perizinan',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      featured: true
    },
    {
      title: 'Pentingnya legalitas bisnis untuk pertumbuhan jangka panjang',
      excerpt: 'Mengapa legalitas bisnis bukan hanya soal kepatuhan, tetapi juga investasi untuk kredibilitas dan pertumbuhan bisnis yang berkelanjutan.',
      date: '5 Maret 2026',
      author: 'Fajar Ramadhan',
      category: 'Perizinan',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Dokumen penting yang harus dimiliki setiap perusahaan',
      excerpt: 'Checklist dokumen legal yang wajib dimiliki oleh setiap perusahaan di Indonesia, dari akta pendirian hingga izin operasional.',
      date: '1 Maret 2026',
      author: 'Rina Kusuma',
      category: 'Pendirian',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Perubahan regulasi perizinan usaha tahun 2026',
      excerpt: 'Update terbaru tentang perubahan regulasi perizinan usaha di Indonesia dan dampaknya terhadap pelaku bisnis.',
      date: '28 Februari 2026',
      author: 'Dimas Prasetyo',
      category: 'Perizinan',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Tips memilih konsultan hukum bisnis yang tepat',
      excerpt: 'Panduan praktis memilih konsultan hukum bisnis yang profesional dan terpercaya untuk mendampingi perjalanan bisnis Anda.',
      date: '25 Februari 2026',
      author: 'Ayu Lestari',
      category: 'Perizinan',
      image: 'https://images.unsplash.com/photo-1587038787166-becd08a156f7?q=80&w=1170&auto=format&fit=crop'
    },
    {
      title: 'Kesalahan umum dalam pendirian perusahaan dan cara menghindarinya',
      excerpt: 'Pelajari kesalahan-kesalahan yang sering terjadi saat mendirikan perusahaan dan bagaimana cara menghindarinya untuk proses yang lebih lancar.',
      date: '22 Februari 2026',
      author: 'Fajar Ramadhan',
      category: 'Pendirian',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1200&auto=format&fit=crop'
    },
    {
    title: 'Daftar Merek vs Operasional Mana yang Harus Jadi Prioritas',
    excerpt: 'Dilema pengusaha pemula antara jualan dulu atau lindungi nama. Pelajari risiko kehilangan aset intelektual yang sudah populer.',
    date: '28 April 2026',
    author: 'Mohamad Lutvi',
    category: 'Perizinan',
    image: 'https://plus.unsplash.com/premium_photo-1721995220981-7bb34cbf2008?q=80&w=1111&auto=format&fit=crop', // Gambar konsep desain/merek
    featured: true
  },
  {
    title: 'Membangun Bisnis di Atas Pasir Bahaya Mengabaikan Legalitas',
    excerpt: 'Legalitas bukan sekadar dokumen di atas kertas, melainkan fondasi agar bisnis Anda tidak terhenti saat sedang tumbuh besar.',
    date: '24 April 2026',
    author: 'Mohamad Lutvi',
    category: 'Pendirian',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', // Gambar gedung perkantoran kokoh
    featured: true
  },
  {
    title: '5 Ide Bisnis Menjanjikan di 2026 dengan Kebutuhan Legalitas Khusus',
    excerpt: 'Analisis tren bisnis masa depan, dari agensi berbasis AI hingga layanan ramah lingkungan yang memerlukan izin spesifik.',
    date: '19 April 2026',
    author: 'Ayu Lestari',
    category: 'Perizinan',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop', // Gambar teknologi & data
  },
  {
    title: 'Meningkatkan Kepercayaan Konsumen melalui Izin Resmi di Landing Page',
    excerpt: 'Psikologi marketing di balik logo NIB dan PIRT yang terbukti mampu menghilangkan keraguan calon pembeli secara online.',
    date: '15 April 2026',
    author: 'Fajar Ramadhan',
    category: 'Perizinan',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop', // Gambar transaksi digital/trust
  },
  {
    title: 'Kenapa Investor Hanya Melirik Bisnis yang Bersih Secara Hukum?',
    excerpt: 'Edukasi bagi startup mengenai kerapihan dokumen legalitas sebagai syarat mutlak mendapatkan suntikan modal atau pendanaan.',
    date: '11 April 2026',
    author: 'Mohamad Lutvi',
    category: 'Pendirian',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200&auto=format&fit=crop', // Gambar skyscraper/perbankan
  },
  {
    title: 'Mending Jalan Tanpa Merek atau Daftar Dulu? Ini Jawaban Pakarnya',
    excerpt: 'Bedah kasus nyata mengenai sengketa nama bisnis dan bagaimana perlindungan merek menjadi investasi termurah jangka panjang.',
    date: '6 April 2026',
    author: 'Mohamad Lutvi',
    category: 'Perizinan',
    image: 'https://plus.unsplash.com/premium_photo-1752230475676-8fb37ed41631?q=80&w=1170&auto=format&fit=crop', // Gambar tanda tangan/kontrak
  },
  {
    title: 'Transformasi NIB Menjadi Identitas Bisnis Tunggal di Tahun 2026',
    excerpt: 'Memahami peran krusial Nomor Induk Berusaha (NIB) dalam mempermudah akses kepabeanan dan sertifikasi halal.',
    date: '2 April 2026',
    author: 'Rina Kusuma',
    category: 'Perizinan',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop', // Gambar kartu identitas/dokumen resmi
  }
  ];

  const waNumber = "62859106885925";
  const waMessage = encodeURIComponent("Halo Silantara, saya ingin konsultasi mengenai legalitas bisnis saya.");
  const waBase = `https://wa.me/${waNumber}?text=${waMessage}`;

  const filteredArticles = activeCategory === 'Semua' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticles = articles.filter(a => a.featured);

  return (
    <>
      <Helmet>
        <title>Insight & Edukasi Legalitas Bisnis - Silantara</title>
        <meta name="description" content="Temukan panduan mendalam tentang pendirian PT, CV, pendaftaran merek, dan regulasi OSS RBA terbaru." />
      </Helmet>

      <div className="min-h-screen bg-slate-50/50">
        <Header />

        {/* Hero & Slider Section */}
        <section className="pt-20 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-left">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4"
              >
                Insight & <span className="text-blue-600">Edukasi Legalitas</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-500 max-w-2xl"
              >
                Update terbaru mengenai regulasi bisnis, tips legalitas UMK, dan panduan hukum praktis untuk pertumbuhan usaha Anda.
              </motion.p>
            </div>

            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              navigation
              spaceBetween={20}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px]"
            >
              {featuredArticles.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-full">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-16 text-white">
                      <span className="bg-blue-600 text-[10px] font-bold px-4 py-1.5 rounded-full w-fit mb-4 uppercase tracking-widest">
                        {item.category}
                      </span>
                      <h2 className="text-2xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-6 text-sm text-slate-300 mb-6">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-400"/> {item.date}</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4 text-blue-400"/> {item.author}</span>
                      </div>
                      <Link to={`/artikel/${item.title.toLowerCase().replace(/ /g, '-')}`}>
                        <Button className="bg-white text-black hover:bg-blue-600 hover:text-white rounded-full px-8 font-bold transition-all">
                          Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Categories & Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              <AnimatePresence mode='popLayout'>
                {filteredArticles.map((article, index) => (
                  <motion.div
                    layout
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ArticleCard {...article} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
                  Butuh Bantuan Legalitas yang Lebih Spesifik?
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                  Jangan biarkan urusan birokrasi menghambat visi besar Anda. Konsultasikan kebutuhan pendirian PT, CV, atau izin usaha Anda secara gratis bersama tim Silantara.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href={waBase} target="_blank" rel="noreferrer">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-7 rounded-2xl text-lg font-bold w-full sm:w-auto">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      Chat WhatsApp
                    </Button>
                  </a>
                  <Link to="/kontak">
                    <Button size="lg" variant="outline" className="border-white/20 hover:bg-white text-slate-900 px-8 py-7 rounded-2xl text-lg font-bold w-full sm:w-auto">
                      Hubungi Kami
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}

export default ArtikelPage;