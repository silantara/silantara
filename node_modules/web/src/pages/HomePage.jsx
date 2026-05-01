import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, Shield, Users, TrendingUp,
  CheckCircle2, FileText, MessageCircle, Star, X,
  ChevronDown, ChevronUp, Clock, ArrowRight, ShoppingCart, Trash2,
  ShieldCheck, Building2, Briefcase, Receipt, Utensils, Award,
  Calculator, Landmark, MonitorSmartphone, Palette, BookOpen, Image
} from 'lucide-react';

// Import Komponen
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import FloatingCart from '@/data/FloatingCart';
import useCart from '@/data/useCart';
import { allServices2 } from '@/data/services2';
import { getServiceSlug } from '@/data/slugMapping';
import { WhatsappIcon } from '@/components/Icons';

// ==========================================
// ICON MAPPING
// ==========================================
const iconMap = {
  'ShieldCheck': ShieldCheck,
  'Building2': Building2,
  'Briefcase': Briefcase,
  'FileText': FileText,
  'Receipt': Receipt,
  'Utensils': Utensils,
  'Award': Award,
  'Calculator': Calculator,
  'Landmark': Landmark,
  'MonitorSmartphone': MonitorSmartphone,
  'Palette': Palette,
  'BookOpen': BookOpen,
  'Image': Image,
};

// ==========================================
// DATA STATIS (Tidak berubah-ubah)
// ==========================================

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div 
      className="absolute inset-0 opacity-[0.1]" 
      style={{ 
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
        backgroundSize: '40px 40px' 
      }}
    />
    <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full" />
  </div>
);

// Stats
const stats = [
  { label: "Tahun Pengalaman", value: "2+", icon: <Briefcase size={20} /> },
  { label: "Klien Terbantu", value: "1000+", icon: <Users size={20} /> },
  { label: "Proses Kilat (Hari)", value: "5-7", icon: <Clock size={20} /> },
  { label: "Rating Kepuasan", value: "4.9/5", icon: <Star size={20} className="fill-yellow-400 text-yellow-400" /> },
];

// Feature Highlights
const featureHighlights = [
  { icon: Zap, title: 'Proses Cepat', description: 'Dokumen diproses segera setelah data lengkap.' },
  { icon: Shield, title: 'Terpercaya', description: 'Tim profesional berpengalaman mengurus legalitas.' },
  { icon: Users, title: 'Profesional', description: 'Konsultan siap mendampingi setiap langkah bisnis.' },
  { icon: TrendingUp, title: 'Harga Jujur', description: 'Transparan, tanpa biaya siluman di tengah jalan.' },
  { icon: MonitorSmartphone, title: 'Branding & Digital', description: 'Jasa desain, logo, dan website untuk visibilitas bisnis.' },
];

// Galeri Foto
const buktiPhotos = Array.from({ length: 10 }, (_, i) => ({
  url: `/galeri/silantara-jasa-pendirian-pt-${i + 1}.png`
}));

// Artikel
const recentArticles = [
  {
    title: "Panduan Lengkap Mendirikan PT di Indonesia Tahun 2026",
    slug: "panduan-lengkap-mendirikan-pt-di-indonesia-tahun-2026",
    excerpt: "Pelajari langkah-langkah praktis dan persyaratan terbaru untuk mendirikan Perseroan Terbatas.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    category: "Pendirian",
    date: "15 Maret 2026",
    author: "Tim Silantara"
  },
  {
    title: "Perbedaan PT dan CV: Mana yang Tepat untuk Bisnis Anda?",
    slug: "perbedaan-pt-dan-cv-mana-yang-tepat-untuk-bisnis-anda",
    excerpt: "Memahami karakteristik, kelebihan, dan kekurangan PT dan CV.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
    category: "Pendirian",
    date: "12 Maret 2026",
    author: "Tim Silantara"
  },
  {
    title: "Pentingnya Legalitas Bisnis untuk Pertumbuhan Jangka Panjang",
    slug: "pentingnya-legalitas-bisnis-untuk-pertumbuhan-jangka-panjang",
    excerpt: "Mengapa legalitas bisnis adalah kunci membuka peluang investasi dan ekspansi.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    category: "Perizinan",
    date: "5 Maret 2026",
    author: "Tim Silantara"
  }
];

// FAQ
const faqs = [
  { question: "Apa perbedaan PT dan CV?", answer: "PT adalah badan hukum dengan pemisahan harta pribadi, CV bukan badan hukum." },
  { question: "Berapa lama mendirikan PT?", answer: "PT Perorangan 1-2 hari, PT Perseroan 3-7 hari kerja." },
  { question: "Mengapa harus daftar merek?", answer: "Perlindungan hukum eksklusif, cegah pencurian merek, tingkatkan nilai aset." },
  { question: "Apa beda Yayasan dan PT?", answer: "PT berorientasi profit, Yayasan bersifat nirlaba." },
  { question: "Apa itu NIB?", answer: "Nomor Induk Berusaha, identitas tunggal pelaku usaha pengganti TDP, API, dll." },
  { question: "Beda NPWP Pribadi dan Badan?", answer: "NPWP Pribadi pakai NIK, NPWP Badan atas nama perusahaan." },
  { question: "Bagaimana cara tahu KBLI yang tepat?", answer: "Konsultasi gratis dengan tim Silantara untuk pencocokan aktivitas bisnis." },
  { question: "Apakah bisa konsultasi dulu?", answer: "Tentu! Konsultasi gratis via WhatsApp sebelum pilih paket." },
  { question: "Beda layanan LITE dan LENGKAP?", answer: "LITE: legalitas dasar. LENGKAP: all-in-one siap operasional." },
  { question: "Berapa lama proses PT Perorangan?", answer: "1-2 hari kerja setelah dokumen lengkap diterima." },
];

// Kategori Tab
const pricingCategories = [
  { id: 'izin', name: 'Izin Dasar' },
  { id: 'pt-perorangan', name: 'PT Perorangan' },
  { id: 'pt-perseroan', name: 'PT Perseroan' },
  { id: 'cv', name: 'CV' },
  { id: 'yayasan', name: 'Yayasan' },
  { id: 'pajak', name: 'Perpajakan' },
  { id: 'digital', name: 'Digital' },
];

// ==========================================
// KOMPONEN HOME PAGE
// ==========================================
function HomePage() {
  const [activeTab, setActiveTab] = useState('izin');
  const [openFaq, setOpenFaq] = useState(null);
  const { addToCart, isInCart } = useCart();

  // ✅ Ambil layanan unggulan (rekomendasi) dari allServices2
  const layananUnggulan = allServices2
    .filter(p => p.rekomendasi)
    .slice(0, 6);

  // ✅ Filter pricing dari allServices2
  const filteredPricing = allServices2.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <section className="relative min-h-[85dvh] flex items-center bg-gradient-to-br from-[#1800ad] to-[#0d7bff] text-white pt-20">
        <GridBackground />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Solusi Legalitas Bisnis <span className="text-yellow-300">Terpercaya</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl">
              Silantara membantu Anda membangun fondasi hukum yang kuat — dari pendirian perusahaan hingga perizinan, cepat dan transparan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/layanan" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl text-center hover:bg-blue-50 transition-all shadow-lg">
                Lihat Semua Layanan
              </Link>
              <a href="https://wa.me/62859106885925" className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                <WhatsappIcon size={20} /> Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* STATS SECTION */}
      {/* ========================================== */}
      <section className="relative z-30 -mt-10 md:-mt-14 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group border-r last:border-0 border-slate-100 px-2">
              <div className="flex justify-center mb-2 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xl md:text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-[9px] md:text-xs text-slate-500 font-bold uppercase tracking-tighter md:tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* MENGAPA KAMI */}
      {/* ========================================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Mengapa Memilih Silantara?</h2>
            <p className="text-slate-500 mt-2">Kami hadir untuk mempermudah urusan legalitas bisnis Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featureHighlights.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-500 transition-colors text-center group">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600 mx-auto group-hover:scale-110 transition-transform">
                  <f.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* LAYANAN UNGGULAN */}
      {/* ========================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[11px] font-bold px-4 py-1.5 rounded-full border border-blue-100 mb-4 uppercase tracking-widest">
              <Star size={12} className="fill-blue-600" /> Paling Diminati
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Layanan <span className="text-blue-600">Unggulan</span> Kami
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Layanan terpopuler yang paling banyak dipilih klien untuk memulai bisnis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layananUnggulan.map((s) => {
              const IconComponent = iconMap[s.icon] || FileText;
              const slug = getServiceSlug(s);
              
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.color || 'bg-blue-50 text-blue-600'}`}>
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{s.title}</h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={12} /> {s.timeline}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-black text-blue-600 mb-3">{s.price}</div>
                  <p className="text-sm text-slate-500 mb-4 flex-grow line-clamp-2">{s.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {s.features?.filter(f => f.included !== false).slice(0, 3).map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={12} className="text-green-500 shrink-0" />
                        {f.text}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Buttons */}
                  <div className="flex items-center gap-2 mt-auto">
                    {slug ? (
                      <Link
                        to={`/layanan/${slug}`}
                        className="flex-1 py-3 bg-slate-800 text-white rounded-xl font-bold text-sm text-center hover:bg-slate-700 transition-all flex items-center justify-center gap-1"
                      >
                        Detail <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <button className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all">
                        Detail
                      </button>
                    )}
                    
                    <button
                      onClick={() => addToCart(s)}
                      className={`p-3 rounded-xl transition-all ${
                        isInCart(s.title)
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                      }`}
                    >
                      {isInCart(s.title) ? <Trash2 size={18} /> : <ShoppingCart size={18} />}
                    </button>
                    
                    <a
                      href={`https://wa.me/62859106885925?text=Halo%20Silantara%2C%20saya%20tertarik%20dengan%20${s.waMsg}`}
                      target="_blank" rel="noreferrer"
                      className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Link ke semua layanan */}
          <div className="text-center mt-10">
            <Link to="/layanan" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
              Lihat Semua Layanan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* GALERI BUKTI */}
      {/* ========================================== */}
      <section 
        className="py-24 overflow-hidden relative"
        style={{ 
          backgroundColor: '#f8fafc', 
          backgroundImage: `linear-gradient(rgba(148,163,184,0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(148,163,184,0.15) 1.5px, transparent 1.5px)`, 
          backgroundSize: '60px 60px', 
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-32 z-20 backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[11px] font-bold px-4 py-1.5 rounded-full border border-blue-100 mb-4 uppercase tracking-widest">
              <FileText size={12} /> Bukti Penyerahan
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Dokumen Selesai <span className="text-blue-600">Tepat Waktu</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Dokumentasi asli penyerahan legalitas sebagai bentuk transparansi layanan.
            </p>
          </div>

          <div className="flex flex-col gap-6 relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 hidden md:block" />

            <div className="flex">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }} 
                className="flex gap-6"
              >
                {[...buktiPhotos, ...buktiPhotos, ...buktiPhotos, ...buktiPhotos].map((foto, idx) => (
                  <div key={`r1-${idx}`} className="w-56 h-72 md:w-64 md:h-80 shrink-0 group">
                    <img 
                      src={foto.url} 
                      className="w-full h-full object-cover rounded-[2rem] border-8 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" 
                      alt="Dokumentasi Silantara" 
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* HARGA TRANSPARAN (Tab Kategori dari services2) */}
      {/* ========================================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Harga Transparan, Tanpa Kejutan</h2>
          <p className="text-slate-500 mb-12">Pilih kategori dan temukan paket sesuai kebutuhan bisnis Anda.</p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {pricingCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full font-bold transition-all border-2 text-sm
                  ${activeTab === cat.id
                    ? 'bg-white text-blue-600 border-blue-600 shadow-sm'
                    : 'bg-transparent text-slate-500 border-slate-200 hover:border-blue-300'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredPricing.map((pkg) => {
                const IconComponent = iconMap[pkg.icon] || FileText;
                const slug = getServiceSlug(pkg);
                
                return (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`p-8 bg-white rounded-[2rem] text-left relative flex flex-col border-2 
                      ${pkg.rekomendasi ? 'border-blue-600 shadow-xl' : 'border-slate-200'}`}
                  >
                    {pkg.rekomendasi && (
                      <div className="absolute top-0 left-8 -translate-y-1/2">
                        <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                          Rekomendasi <Star size={12} fill="#FBBF24" color="#FBBF24" />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-3 mt-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pkg.color || 'bg-blue-50 text-blue-600'}`}>
                        <IconComponent size={18} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-800">{pkg.title}</h3>
                    </div>
                    
                    <div className="text-3xl font-black text-blue-600 my-3">{pkg.price}</div>

                    <ul className="space-y-2.5 mb-8 text-sm flex-grow">
                      {pkg.features?.slice(0, 5).map((ft, j) => (
                        <li key={j} className={`flex gap-2 items-start ${ft.included !== false ? 'text-slate-600' : 'text-red-400 line-through'}`}>
                          {ft.included !== false ? (
                            <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                          ) : (
                            <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                          )}
                          <span>{ft.text}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2">
                      <div className="flex gap-2">
                        {slug && (
                          <Link
                            to={`/layanan/${slug}`}
                            className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm text-center hover:bg-slate-200 transition-all"
                          >
                            Detail
                          </Link>
                        )}
                        <button
                          onClick={() => addToCart(pkg)}
                          className={`p-3 rounded-xl transition-all ${
                            isInCart(pkg.title)
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                          }`}
                        >
                          {isInCart(pkg.title) ? <Trash2 size={18} /> : <ShoppingCart size={18} />}
                        </button>
                      </div>
                      <a
                        href={`https://wa.me/62859106885925?text=Halo%20Silantara%2C%20saya%20ingin%20pesan%20${pkg.waMsg}`}
                        target="_blank" rel="noreferrer"
                        className="block text-center py-3 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-all"
                      >
                        <WhatsappIcon size={16} className="inline mr-1" /> Pesan via WA
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* INSIGHT & ARTIKEL */}
      {/* ========================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Insight & <span className="text-blue-600 italic">Edukasi Bisnis</span>
              </h2>
              <p className="text-slate-500 max-w-xl">
                Pelajari regulasi terbaru agar bisnis Anda tetap patuh dan kompetitif.
              </p>
            </div>
            <Link to="/artikel" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
              Lihat Semua Artikel <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/artikel/${article.slug}`} className="group">
                  <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                        <div className="flex items-center gap-1"><Clock size={14} /> {article.date}</div>
                        <div className="flex items-center gap-1"><Users size={14} /> {article.author}</div>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 font-bold text-sm border-t pt-4">
                        Baca Selengkapnya <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link to="/artikel" className="inline-flex items-center gap-2 text-blue-600 font-bold">
              Lihat Semua Artikel <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FAQ */}
      {/* ========================================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Pertanyaan Sering Diajukan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-slate-100 bg-white rounded-xl overflow-hidden cursor-pointer hover:border-blue-200 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="p-5 flex justify-between items-center">
                  <h4 className="font-bold text-slate-800 text-sm">{faq.question}</h4>
                  {openFaq === index ? <ChevronUp size={20} className="text-blue-600 shrink-0" /> : <ChevronDown size={20} className="text-slate-400 shrink-0" />}
                </div>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* CTA FINAL */}
      {/* ========================================== */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Memulai Bisnis Anda?</h2>
          <p className="text-lg mb-10 opacity-90">Jangan biarkan masalah legalitas menghambat pertumbuhan usaha Anda.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/layanan" className="px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg">
              Lihat Layanan
            </Link>
            <a href="https://wa.me/62859106885925" className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <WhatsappIcon size={20} /> Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <FloatingCart />
    </div>
  );
}

export default HomePage;