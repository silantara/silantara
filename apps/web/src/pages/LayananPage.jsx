import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, MessageCircle, Search, Briefcase, FileText,
  Building2, Award, Receipt, Landmark, MonitorSmartphone, 
  ChevronRight, Utensils, ShieldCheck, Palette, BookOpen, Image, 
  X, ShoppingCart, Trash2, Calculator, ArrowRight, Clock
} from 'lucide-react';

// Import Komponen
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceModal from '@/components/ServiceModal.jsx';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import FloatingCart from '@/data/FloatingCart';
import useCart from '@/data/useCart';
import { allServices2 } from '@/data/services2';
import { getServiceSlug } from '@/data/slugMapping'; // ✅ Import slug mapping

// ✅ Icon mapping untuk services2
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

// ✅ DATA KATEGORI
const categories = [
  { id: 'all', name: 'Semua Layanan' },
  { id: 'izin', name: 'Izin Dasar' },
  { id: 'pt-perorangan', name: 'Pendirian PT-Perorangan (UMKM)' },
  { id: 'pt-perseroan', name: 'Pendirian PT-Perseroan' },
  { id: 'cv', name: 'Pendirian CV' },
  { id: 'yayasan', name: 'Yayasan' },
  { id: 'pajak', name: 'Perpajakan' },
  { id: 'digital', name: 'Branding & Digital' },
];

function LayananPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart, isInCart } = useCart();

  const filteredServices = allServices2.filter(s => {
    const matchesCategory = filter === 'all' || s.category === filter;
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Katalog Layanan Silantara</h1>
          <p className="text-slate-500 text-lg">Solusi legalitas terintegrasi untuk pertumbuhan bisnis Anda.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
          
          {/* SIDEBAR */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Cari layanan..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-100 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-3 ml-2">Kategori</h3>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-bold text-left transition-all
                      ${filter === cat.id ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' : 'text-slate-600 hover:bg-white hover:text-slate-900'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN GRID */}
          <main className="flex-grow">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-slate-500">Tidak ada layanan ditemukan</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode='popLayout'>
                  {filteredServices.map((pkg) => {
                    const IconComponent = iconMap[pkg.icon] || FileText;
                    const serviceSlug = getServiceSlug(pkg); // ✅ Dapatkan slug
                    
                    return (
                      <motion.div
                        key={pkg.title}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`group relative bg-white rounded-[2.5rem] p-8 border transition-all duration-500 flex flex-col overflow-hidden
                          ${pkg.rekomendasi 
                            ? 'border-blue-600 border-2 shadow-xl shadow-blue-100'
                            : 'border-slate-100 shadow-sm hover:shadow-2xl'
                          }`}
                      >
                        {/* LABEL REKOMENDASI */}
                        {pkg.rekomendasi && (
                          <div className="absolute top-6 left-6 z-20">
                            <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-blue-200 uppercase tracking-wider">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                              </span>
                              Rekomendasi ⭐
                            </div>
                          </div>
                        )}

                        <IconComponent className="absolute -right-6 -top-6 size-40 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${pkg.color || 'bg-blue-50 text-blue-700'} ${pkg.rekomendasi ? 'mt-10 mb-6' : 'mb-6'}`}>
                            <IconComponent size={28} />
                          </div>

                          <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight">{pkg.title}</h3>
                          <div className="text-2xl font-black text-slate-900 mb-2">{pkg.price}</div>
                          
                          {pkg.timeline && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                              <Clock size={12} />
                              <span>{pkg.timeline}</span>
                            </div>
                          )}
                          
                          <p className="text-sm text-slate-500 mb-4 line-clamp-2">{pkg.description}</p>

                          <ul className="space-y-2 mb-6">
                            {pkg.features?.filter(ft => ft.included !== false).slice(0, 4).map((ft, j) => (
                              <li key={j} className="flex gap-2 text-xs items-start">
                                <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                <span className="text-slate-600">{ft.text}</span>
                              </li>
                            ))}
                          </ul>

                          {/* ✅ TOMBOL SELENGKAPNYA - Gunakan serviceSlug */}
                          {serviceSlug ? (
                            <Link
                              to={`/layanan/${serviceSlug}`}
                              className="flex items-center justify-center gap-2 w-full py-3 mb-3 bg-slate-800 text-white rounded-2xl font-bold text-sm hover:bg-slate-700 transition-all group/link"
                            >
                              Selengkapnya
                              <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          ) : (
                            <button
                              onClick={() => { setSelectedService(pkg); setIsModalOpen(true); }}
                              className="flex items-center justify-center gap-2 w-full py-3 mb-3 bg-slate-100 text-slate-700 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all"
                            >
                              Lihat Detail
                              <ChevronRight size={14} />
                            </button>
                          )}

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => { setSelectedService(pkg); setIsModalOpen(true); }}
                              className={`flex-grow py-3 px-4 ${pkg.btnColor || 'bg-slate-900'} text-white rounded-2xl font-bold text-sm hover:brightness-110 transition-all flex items-center justify-between group/btn`}
                            >
                              Quick View
                              <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                            
                            <button
                              onClick={() => addToCart(pkg)}
                              className={`p-3 rounded-2xl transition-all shadow-sm ${
                                isInCart(pkg.title)
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                              }`}
                            >
                              {isInCart(pkg.title) ? <Trash2 size={20} /> : <ShoppingCart size={20} />}
                            </button>

                            <a
                              href={`https://wa.me/62859106885925?text=Halo%20Silantara%2C%20saya%20ingin%20tanya%20paket%20${pkg.waMsg}`}
                              target="_blank" rel="noreferrer"
                              className="p-3 bg-green-50 text-green-600 rounded-2xl hover:bg-green-600 hover:text-white transition-all shadow-sm"
                            >
                              <MessageCircle size={20} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </main>
        </div>
      </section>

      <Footer />
      
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <ServiceModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            service={selectedService} 
          />
        )}
      </AnimatePresence>
      
      <WhatsAppFloat />
      <FloatingCart />
    </div>
  );
}

export default LayananPage;