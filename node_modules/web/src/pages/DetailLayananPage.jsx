import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle, ShieldCheck, ArrowRight, Zap, 
  Receipt, Users, Clock, Star, ChevronRight, 
  CheckCircle2, XCircle, MessageCircle, Rocket, BadgeCheck,
  Calculator, Trash2, X, CreditCard, ShoppingCart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { allServices } from '@/data/services'; 
import { WhatsappIcon } from '@/components/Icons';
import useCart from '@/data/useCart'; // ✅ Import useCart
import FloatingCart from '@/data/FloatingCart'; // ✅ Import FloatingCart

function DetailLayananPage() {
  const { id } = useParams();
  const service = allServices.find((s) => s.slug === id);
  
  // ✅ Gunakan useCart hook (sama dengan halaman lain)
  const { cart, addToCart, removeFromCart, totalPrice, openWhatsApp, cartCount } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <div className="py-20 text-center font-bold">Layanan Tidak Ditemukan.</div>;

  // ✅ Add to Cart (pakai useCart)
  const handleAddToCart = (pkg) => {
    addToCart({
      title: `${service.title} - Paket ${pkg.name}`,
      price: `Rp ${pkg.price}`,
    });
};

  // ✅ Remove from Cart (pakai useCart - by title)
  const handleRemoveFromCart = (title) => {
    removeFromCart(title);
  };

  // WhatsApp untuk Paket Satuan
  const handleWhatsApp = (pkgName) => {
    const msg = `Halo Silantara, saya ingin daftar ${service.title} Paket ${pkgName}`;
    window.open(`https://wa.me/62859106885925?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* 1. HERO SECTION - TETAP SAMA */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck size={14} /> Verified & Official
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-slate-900 mb-6">
                {service.prefix || 'Layanan'} {service.title}: <br/>
                <span className="text-blue-600 italic">{service.tagline}</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl font-medium">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => handleWhatsApp('Konsultasi')} className="bg-blue-600 text-white px-8 py-4 rounded-full font-black flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  Mulai Sekarang <ArrowRight size={18}/>
                </button>
                <a href="#paket" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-black hover:bg-slate-50 transition-all">
                  Lihat Paket
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative">
               <div className="bg-blue-600 w-full h-[350px] rounded-[3rem] rotate-3 absolute inset-0 opacity-10"></div>
               <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="font-black text-2xl italic tracking-tighter text-blue-600">SILANTARA.</div>
                    <Star className="text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="space-y-6">
                    <div className="h-3 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-3 bg-slate-100 rounded-full w-5/6"></div>
                    <div className="pt-10 border-t border-dashed flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Estimasi Investasi</p>
                        <p className="text-3xl font-black text-slate-900">{service.priceRange}</p>
                      </div>
                      <div className="bg-green-500 text-white p-3 rounded-2xl shadow-lg shadow-green-100">
                        <CheckCircle size={24} />
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US - TETAP SAMA */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Kenapa Memilih Silantara?</h2>
          <p className="text-slate-500 font-bold italic">Solusi legalitas terbaik untuk membantu bisnis Anda berkembang lebih cepat.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="text-orange-500" />, title: 'Proses Kilat', desc: 'Selesai dalam 1-3 hari kerja tanpa hambatan birokrasi yang rumit.' },
            { icon: <Receipt className="text-blue-500" />, title: 'Harga Transparan', desc: 'Tanpa biaya tersembunyi. Semua biaya dijelaskan jujur sejak awal.' },
            { icon: <Users className="text-green-500" />, title: 'Tim Ahli', desc: 'Didampingi konsultan berpengalaman selama proses pendirian.' }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TIMELINE - TETAP SAMA */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Alur Pendirian {service.title}</h2>
            <p className="text-slate-400 font-bold">Transparan dari awal hingga legalitas Anda resmi terbit.</p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide">
            {service.steps.map((step, i) => (
              <div 
                key={i} 
                className="min-w-[300px] bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between 
                          transition-all duration-500 ease-out cursor-default relative overflow-hidden group
                          hover:border-blue-500/50 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-slate-800 border border-white/10 rounded-2xl flex items-center justify-center font-black mb-8 text-lg
                                  group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:rotate-[10deg] transition-all duration-500">
                    {i + 1}
                  </div>
                  <h4 className="text-2xl font-black mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
                <div className="relative z-10 pt-5 border-t border-white/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                  <Clock size={14} className="group-hover:animate-pulse" /> {step.info}
                </div>
              </div>
            ))}
            <div className="min-w-[300px] bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center 
                            shadow-2xl shadow-blue-900/50 transition-all duration-500 
                            hover:-translate-y-3 hover:shadow-blue-500/40 group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md text-white rounded-3xl flex items-center justify-center mb-6 
                              group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-500 border border-white/30">
                <Rocket size={40} strokeWidth={2.5} />
              </div>
              <h4 className="text-3xl font-black mb-2 text-white">Selesai!</h4>
              <p className="text-blue-100 text-sm font-bold opacity-80">Legalitas Terbit & Bisnis Siap Jalan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE - TETAP SAMA */}
      <section id="perbandingan" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Detail Perbandingan Fitur</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="p-8 text-[15px] font-black uppercase tracking-[0.2em] text-slate-700 w-1/3">Fitur Layanan</th>
                    {service.packages.map((pkg, i) => (
                      <th key={i} className={`p-8 text-center min-w-[200px] ${pkg.recommended ? 'bg-blue-50/30' : ''}`}>
                        <div className="text-lg font-black text-slate-900">Paket {pkg.name}</div>
                        <div className="text-sm font-bold text-slate-400">Rp {pkg.price}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {Object.keys(service.packages[0].features).map((featureName, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                      <td className="p-6 px-8 text-[15px] font-bold text-slate-700">{featureName}</td>
                      {service.packages.map((pkg, i) => (
                        <td key={i} className={`p-6 text-center ${pkg.recommended ? 'bg-blue-50/20' : ''}`}>
                          {pkg.features[featureName] ? (
                            <CheckCircle2 className="inline text-green-500" size={22} />
                          ) : (
                            <XCircle className="inline text-red-400" size={22} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING CARDS - TETAP SAMA DESIGN */}
      <section id="paket" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Paket Investasi Tunggal</h2>
            <p className="text-slate-500 font-bold text-lg">Satu harga jujur untuk kemajuan bisnis Anda tanpa biaya siluman.</p>
          </div>
          <div className="space-y-10">
            {service.packages.map((pkg, index) => (
              <div key={index} className="relative group">
                <div className={`bg-white border-2 ${pkg.recommended ? 'border-blue-600 shadow-2xl shadow-blue-100' : 'border-slate-100'} rounded-[3.5rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 transition-all`}>
                  <div className={`absolute top-0 right-0 ${pkg.recommended ? 'bg-blue-600' : 'bg-slate-800'} text-white px-10 py-3 rounded-bl-[2.5rem] text-[11px] font-black uppercase tracking-widest`}>
                    {pkg.recommended ? 'Paling Populer' : 'Pilihan Dasar'}
                  </div>
                  <div className="flex-1">
                    <div className="mb-8">
                      <h3 className="text-3xl font-black text-slate-900 mb-1">Paket {pkg.name}</h3>
                      <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Silantara Legal Service</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {Object.entries(pkg.features).map(([name, isIncluded], i) => (
                        <div key={i} className={`flex items-center gap-3 ${!isIncluded ? 'opacity-40' : ''}`}>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isIncluded ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                            {isIncluded ? <BadgeCheck size={14} /> : <XCircle size={14} />}
                          </div>
                          <span className="text-[14px] font-bold text-slate-700">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-[340px]">
                    <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 h-full flex flex-col justify-center text-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Investasi</span>
                      <div className="text-5xl font-black text-blue-600 mb-8 tracking-tighter italic">
                        Rp{pkg.price}
                      </div>
                      <div className="space-y-3">
                        {/* ✅ Tombol Cart - pakai useCart */}
                        <button 
                          onClick={() => handleAddToCart(pkg)}
                          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98]"
                        >
                          <ShoppingCart size={18} /> Tambah ke Keranjang
                        </button>
                        <button 
                          onClick={() => handleWhatsApp(pkg.name)}
                          className="w-full relative overflow-hidden bg-[#00D95F] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-200/50 hover:bg-[#00c855] hover:-translate-y-1 group"
                        >
                          <div className="relative z-10 flex items-center gap-2">
                            <MessageCircle size={18} className="group-hover:rotate-12 transition-transform duration-300" /> 
                            <span>Konsultasi Gratis</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA - TETAP SAMA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-600 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.25)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/40 rounded-full -ml-32 -mb-32 blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Siap Naik Kelas Bareng <br className="hidden md:block" /> Silantara?
              </h2>
              <div className="inline-block bg-blue-500/50 backdrop-blur-md text-blue-50 px-8 py-2 rounded-full text-sm font-bold mb-12 border border-blue-400/30">
                Dapatkan Konsultasi Gratis Sekarang!
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={() => handleWhatsApp('Konsultasi Final')}
                  className="bg-white text-blue-600 px-12 py-6 rounded-full font-black text-xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-blue-900/20"
                >
                  Hubungi Tim Kami <WhatsappIcon size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* ✅ Floating Cart (dari useCart) - Otomatis muncul jika ada item */}
      <FloatingCart />
    </div>
  );
}

export default DetailLayananPage;