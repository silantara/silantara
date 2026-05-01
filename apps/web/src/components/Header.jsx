import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart, Trash2 } from 'lucide-react'; 
import { Button } from '@/components/ui/button'; 

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isKerjasamaOpen, setIsKerjasamaOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const updateCartStatus = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const items = JSON.parse(savedCart);
        setCartCount(items.length);
        const total = items.reduce((sum, item) => {
          const rawPrice = item.price || item.harga || "0";
          const priceNumber = parseInt(rawPrice.toString().replace(/[^0-9]/g, '')) || 0;
          return sum + priceNumber;
        }, 0);
        setTotalPrice(total);
      } else {
        setCartCount(0);
        setTotalPrice(0);
      }
    } catch (error) {
      console.error("Gagal sinkronisasi keranjang:", error);
      setCartCount(0);
      setTotalPrice(0);
    }
  };

  const clearCart = () => {
    if(window.confirm("Kosongkan semua pilihan layanan?")) {
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  useEffect(() => {
    updateCartStatus();
    window.addEventListener('cartUpdated', updateCartStatus);
    window.addEventListener('storage', updateCartStatus); 
    return () => {
      window.removeEventListener('cartUpdated', updateCartStatus);
      window.removeEventListener('storage', updateCartStatus);
    };
  }, []);

  const waBase = "https://wa.me/62859106885925";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo-silantaraweb.png" 
              alt="Logo Silantara" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-blue-800 leading-none">Silantara</span>
              <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase">Sinergi Konsultama</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7">
            <Link to="/" className={`text-sm font-bold transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Home</Link>
            
            {/* Dropdown Layanan (Mega Menu) */}
            <div onMouseEnter={() => setIsLayananOpen(true)} onMouseLeave={() => setIsLayananOpen(false)}>
            {/* Hapus class "relative" di atas agar dropdown bisa bebas ke tengah layar */}
            <button className={`flex items-center gap-1 text-sm font-bold py-8 transition-colors ${isLayananOpen ? 'text-blue-600' : 'text-slate-600'}`}>
              Layanan <ChevronDown className={`w-4 h-4 transition-transform ${isLayananOpen ? 'rotate-180' : ''}`} />
            </button>
  
  {isLayananOpen && (
    /* Posisi diatur ke tengah dengan left-1/2 dan transform -translate-x-1/2 */
    <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl bg-white border border-slate-100 shadow-2xl rounded-[2.5rem] p-10 z-50 animate-in fade-in slide-in-from-top-2">
      <div className="grid grid-cols-12 gap-10">
        
        {/* Kolom 1-3: Daftar Layanan */}
        <div className="col-span-9 grid grid-cols-3 gap-8">
          {/* Sub Kolom 1: Pendirian */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-600">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m0 10V4m-4 11h.01" /></svg>
              </div>
              <h4 className="font-bold text-slate-800">Pendirian Usaha</h4>
            </div>
            <div className="flex flex-col gap-5 pl-2">
              <Link to="/layanan/pt-perorangan" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">PT Perorangan</p>
                <p className="text-xs text-slate-400">Badan usaha untuk Usaha Mandiri</p>
              </Link>
              <Link to="/layanan/pt-perseroan" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">PT Umum</p>
                <p className="text-xs text-slate-400">Badan usaha untuk Kemitraan & Investasi</p>
              </Link>
              <Link to="/layanan/cv" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Persekutuan Komanditer (CV)</p>
                <p className="text-xs text-slate-400">Legalitas tepat untuk kemitraan bisnis</p>
              </Link>
              <Link to="/layanan/yayasan" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Yayasan</p>
                <p className="text-xs text-slate-400">Badan Hukum Sosial & Nirlaba</p>
              </Link>
            </div>
          </div>

          {/* Sub Kolom 2: Izin & Sertifikasi */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-green-600">
              <div className="p-2 bg-green-50 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="font-bold text-slate-800">Izin & Sertifikasi</h4>
            </div>
            <div className="flex flex-col gap-5 pl-2">
              <Link to="/layanan/nib" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-green-600 transition-colors">NIB (Nomor Induk Berusaha)</p>
                <p className="text-xs text-slate-400">Izin usaha tunggal untuk semua jenis usaha</p>
              </Link>
              <Link to="/layanan/merek" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-green-600 transition-colors">Merek (HAKI)</p>
                <p className="text-xs text-slate-400">Amankan nama & logo bisnis Anda</p>
              </Link>
              <Link to="/layanan/halal-pirt" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-green-600 transition-colors">Sertifikasi Halal</p>
                <p className="text-xs text-slate-400">Izin resmi produk makanan</p>
              </Link>
              <Link to="/layanan/pirt" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-green-600 transition-colors">Izin PIRT</p>
                <p className="text-xs text-slate-400">Standar keamanan pangan rumah tangga</p>
              </Link>
            </div>
          </div>

          {/* Sub Kolom 3: Pajak */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-orange-600">
              <div className="p-2 bg-orange-50 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-slate-800">Perpajakan</h4>
            </div>
            <div className="flex flex-col gap-5 pl-2">
              <Link to="/layanan/aktivasi-pkp" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-orange-600 transition-colors">Aktivasi PKP</p>
                <p className="text-xs text-slate-400">Persiapan transaksi pajak perusahaan</p>
              </Link>
              <Link to="/layanan/spt-tahunan-pribadi" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-orange-600 transition-colors">SPT Tahunan Pribadi</p>
                <p className="text-xs text-slate-400">Pelaporan pajak tahunan individu</p>
              </Link>
              <Link to="/layanan/spt-tahunan-badan" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-orange-600 transition-colors">SPT Tahunan Badan</p>
                <p className="text-xs text-slate-400">Pelaporan pajak tahunan perusahaan</p>
              </Link>
              <Link to="/layanan/npwp-pribadi" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-orange-600 transition-colors">NPWP Pribadi</p>
                <p className="text-xs text-slate-400">Pendaftaran NPWP untuk individu</p>
              </Link>
              <Link to="/layanan/npwp-badan" className="group">
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-orange-600 transition-colors">NPWP Badan</p>
                <p className="text-xs text-slate-400">Pendaftaran NPWP untuk perusahaan</p>
              </Link>
              <Link to="/layanan" className="text-sm font-black text-blue-600 hover:underline pt-2">Semua Layanan →</Link>
            </div>
          </div>
        </div>

        {/* Kolom 4: Kotak Biru (CTA) */}
        <div className="col-span-3">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[2rem] p-7 h-full text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-black italic leading-tight">Wujudkan Bisnis Legal</h3>
              <p className="text-xs text-blue-100 font-medium">Konsultasi gratis dengan tim legal Silantara.</p>
            </div>
            
            {/* Tombol Sejajar / Satu Baris */}
            <div className="relative z-10 flex flex-col gap-3 mt-8">
              <a href={waBase} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white text-blue-800 py-3.5 rounded-xl font-black text-xs hover:bg-slate-50 transition-all whitespace-nowrap shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.435l.301.179c1.55.921 3.324 1.408 5.135 1.41h.001c5.446 0 9.874-4.43 9.876-9.877 0-2.639-1.027-5.118-2.892-6.984s-4.345-2.892-6.984-2.893c-5.447 0-9.875 4.43-9.877 9.877 0 1.808.483 3.57 1.397 5.116l.197.331-1.007 3.68 3.771-.989zm11.332-6.326c-.322-.161-1.905-.94-2.201-1.047-.297-.108-.512-.161-.726.161-.215.322-.832 1.047-1.02 1.262-.188.216-.376.242-.698.081-.323-.161-1.363-.502-2.596-1.602-.959-.856-1.607-1.912-1.795-2.234-.188-.322-.02-.497.141-.657.145-.144.322-.376.484-.564.161-.188.215-.322.322-.537.108-.215.054-.403-.027-.564-.081-.161-.726-1.747-.995-2.393-.261-.63-.529-.544-.726-.554l-.618-.01c-.215 0-.564.081-.86.403s-1.129 1.047-1.129 2.553c0 1.505 1.096 2.959 1.248 3.16.152.201 2.155 3.289 5.22 4.618.729.316 1.298.505 1.741.646.732.233 1.398.2 1.925.122.587-.087 1.905-.779 2.174-1.532.269-.753.269-1.4.188-1.532-.081-.133-.296-.215-.618-.376z"/></svg>
                Chat Konsultan
              </a>
              <Link to="/layanan" className="flex items-center justify-center gap-2 bg-white/10 text-white py-3.5 rounded-xl font-black text-xs hover:bg-white/20 transition-all border border-white/20 whitespace-nowrap">
                Semua Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Megamenu - DIKEMBALIKAN */}
      <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            80+ Layanan Tersedia
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span className="text-orange-400 font-bold">★</span> Rating 4.9/5 di Google
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Proses Cepat & Transparan
          </div>
        </div>
        <Link to="/keranjang" className="text-xs font-black text-blue-600 hover:underline flex items-center gap-2">
          Lihat Daftar Harga Lengkap <span className="text-sm">→</span>
        </Link>
      </div>
    </div>
  )}
</div>

            <Link to="/tentang" className={`text-sm font-bold transition-colors ${isActive('/tentang') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Tentang Kami</Link>
            <Link to="/artikel" className={`text-sm font-bold transition-colors ${isActive('/artikel') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Artikel</Link>

            {/* Dropdown Kerjasama */}
            <div className="relative group" onMouseEnter={() => setIsKerjasamaOpen(true)} onMouseLeave={() => setIsKerjasamaOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-bold py-4 transition-colors ${isKerjasamaOpen ? 'text-blue-600' : 'text-slate-600'}`}>
                Kerjasama <ChevronDown className={`w-4 h-4 transition-transform ${isKerjasamaOpen ? 'rotate-180' : ''}`} />
              </button>
              {isKerjasamaOpen && (
                <div className="absolute top-[85%] left-0 w-72 bg-white border border-slate-100 shadow-2xl rounded-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-5 py-2 mb-1 border-b border-slate-50">
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.15em]">Partnership Program</p>
                  </div>
                  <a href={`${waBase}?text=Halo%20Silantara%2C%20saya%20tertarik%20bergabung%20sebagai%20Rekan%20Notaris.`} target="_blank" rel="noreferrer" className="group flex flex-col px-5 py-3 hover:bg-blue-50 transition-all">
                    <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700">Rekanan Notaris</span>
                    <span className="text-[11px] text-slate-500">Kolaborasi integrasi akta & legalitas resmi.</span>
                  </a>
                  <a href={`${waBase}?text=Halo%20Silantara%2C%20saya%20tertarik%20bergabung%20sebagai%20Rekan%20Legal.`} target="_blank" rel="noreferrer" className="group flex flex-col px-5 py-3 hover:bg-blue-50 transition-all">
                    <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700">Rekanan Legal</span>
                    <span className="text-[11px] text-slate-500">Kolaborasi Rekanan Legalitas Resmi.</span>
                  </a>
                  <a href={`${waBase}?text=Halo%20Silantara%2C%20saya%20ingin%20mendiskusikan%20Kemitraan%20Bisnis%20Strategis.`} target="_blank" rel="noreferrer" className="group flex flex-col px-5 py-3 hover:bg-blue-50 transition-all">
                    <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700">Kemitraan Bisnis</span>
                    <span className="text-[11px] text-slate-500">Perluas jangkauan layanan bersama kami.</span>
                  </a>
                </div>
              )}
            </div>

            <Link to="/kontak" className={`text-sm font-bold transition-colors ${isActive('/kontak') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Kontak</Link>
          </nav>


          {/* Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/keranjang" className={`flex items-center gap-3 p-2 px-4 rounded-full transition-all border ${cartCount > 0 ? 'bg-blue-600 border-blue-700 shadow-lg' : 'bg-slate-50 border-slate-100'}`}>
              <div className="relative">
                <ShoppingCart className={`w-5 h-5 ${cartCount > 0 ? 'text-white' : 'text-slate-500'}`} />
                {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-[10px] font-black px-1.5 py-0.5 rounded-full ring-2 ring-blue-600">{cartCount}</span>}
              </div>
              {cartCount > 0 && (
                <div className="flex flex-col border-l pl-3 border-blue-500/50">
                  <span className="text-sm font-black text-white leading-none">Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
              )}
            </Link>
            <Link to="/kontak">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-7 py-6 rounded-full uppercase tracking-tighter italic shadow-lg active:scale-95 transition-all">
                Konsultasi Gratis
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-blue-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;