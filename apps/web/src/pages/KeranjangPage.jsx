import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Search, Info, FileText,
  ShoppingCart, Trash2,
  ShieldCheck, Building2, Briefcase, Receipt, Utensils, Award, 
  Landmark, MonitorSmartphone, Palette, BookOpen, Image,
  FileSearch, RefreshCw, CheckCircle as CheckCircleIcon, FolderOpen, Send, Upload, ClipboardList
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceModal from '@/components/ServiceModal.jsx';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { WhatsappIcon } from '@/components/Icons';
import { allServices2 } from '@/data/services2';
import useCart from '@/data/useCart'; // ✅ Import useCart
import FloatingCart from '@/data/FloatingCart'; // ✅ Import FloatingCart

// ✅ ICON MAPPING
const iconMap = {
  'ShieldCheck': ShieldCheck,
  'Building2': Building2,
  'Briefcase': Briefcase,
  'FileText': FileText,
  'Receipt': Receipt,
  'Utensils': Utensils,
  'Award': Award,
  'Calculator': FileText, // fallback
  'Landmark': Landmark,
  'MonitorSmartphone': MonitorSmartphone,
  'Palette': Palette,
  'BookOpen': BookOpen,
  'Image': Image,
  'FileSearch': FileSearch,
  'RefreshCw': RefreshCw,
  'CheckCircle': CheckCircleIcon,
  'FolderOpen': FolderOpen,
  'Send': Send,
  'Upload': Upload,
  'ClipboardList': ClipboardList,
};

// 1. DATA KATEGORI
const categories = [
  { id: 'all', name: 'Semua Layanan' },
  { id: 'izin', name: 'Izin Dasar' },
  { id: 'pt-perorangan', name: 'PT Perorangan' },
  { id: 'pt-perseroan', name: 'PT Perseroan' },
  { id: 'cv', name: 'Pendirian CV' },
  { id: 'yayasan', name: 'Yayasan' },
  { id: 'pajak', name: 'Perpajakan' },
  { id: 'digital', name: 'Branding & Digital' },
];

const KeranjangPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Gunakan useCart (sama dengan halaman lain)
  const { addToCart, removeFromCart, isInCart } = useCart();

  const filteredServices = allServices2.filter(s => {
    const matchesCategory = filter === 'all' || s.category === filter;
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Katalog Layanan Silantara</h1>
            <p className="text-lg text-slate-600">Pilih layanan, hitung biaya transparan, dan mulai bisnis Anda dengan legalitas kuat.</p>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all
                  ${filter === cat.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Cari layanan Silantara..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-40">
        <div className="max-w-7xl mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-500">Tidak ada layanan ditemukan</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode='popLayout'>
                {filteredServices.map((pkg) => {
                  const IconComponent = iconMap[pkg.icon] || FileText;
                  
                  return (
                    <motion.div
                      key={pkg.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      whileHover={{ y: -10 }}
                      className={`group relative bg-white rounded-[2.5rem] transition-all duration-300 border-2 overflow-hidden ${
                        pkg.rekomendasi 
                          ? 'border-blue-600 shadow-2xl shadow-blue-100' 
                          : 'border-slate-100 shadow-sm hover:shadow-xl'
                      }`}
                    >
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div className={`p-3 rounded-2xl ${pkg.color || 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                            <IconComponent size={28} />
                          </div>
                          {pkg.rekomendasi && (
                            <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg uppercase tracking-wider">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                              </span>
                              Rekomendasi
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-black text-slate-800 tracking-tighter mb-2">
                          {pkg.title}
                        </h3>
                        <div className="text-2xl font-black text-blue-600 mb-4">{pkg.price}</div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                          {pkg.description}
                        </p>
                        <ul className="space-y-3 mb-6">
                          {pkg.features?.filter(ft => ft.included !== false).slice(0, 3).map((ft, j) => (
                            <li key={j} className="flex gap-3 text-sm items-start">
                              <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                              <span className="text-slate-600 font-medium">{ft.text}</span>
                            </li>
                          ))}
                          {pkg.features?.filter(ft => ft.included !== false).length > 3 && (
                            <li className="text-xs text-blue-600 font-black ml-7 uppercase tracking-wider">
                              + {pkg.features.filter(ft => ft.included !== false).length - 3} Item Kelengkapan Lainnya
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="p-8 pt-0 mt-auto flex flex-col gap-3">
                        {/* ✅ Tombol Cart - pakai useCart */}
                        <button
                          onClick={() => addToCart(pkg)}
                          className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-sm transition-all
                            ${isInCart(pkg.title)
                              ? 'bg-blue-50 text-blue-600 border-2 border-blue-600' 
                              : `${pkg.btnColor || 'bg-blue-700'} text-white hover:opacity-90 shadow-xl shadow-slate-100`}`}
                        >
                          {isInCart(pkg.title) ? <Trash2 size={18} /> : <ShoppingCart size={18} />}
                          {isInCart(pkg.title) ? 'Hapus dari Keranjang' : 'Tambah ke Keranjang'}
                        </button>
                        <div className="flex gap-2">
                          <button 
                            type="button"
                            onClick={(e) => { 
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedService(pkg); 
                              setIsModalOpen(true); 
                            }} 
                            className="flex-1 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl text-xs flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Info size={14} /> Detail
                          </button>
                          <a 
                            href={`https://wa.me/62859106885925?text=Halo%20Silantara%2C%20tanya%20layanan%20${pkg.waMsg || ''}`} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex-1 py-3 bg-green-50 text-green-600 font-bold rounded-xl text-xs flex items-center justify-center gap-1"
                          >
                            <WhatsappIcon size={14} /> Konsul
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <Footer />
      
      {/* ✅ Modal */}
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
      
      {/* ✅ FloatingCart (dari useCart) - muncul di semua halaman, ada tombol "Lanjut ke Pembayaran" */}
      <FloatingCart />
    </div>
  );
};

export default KeranjangPage;