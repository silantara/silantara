import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, MapPin, Facebook, Instagram, 
  Linkedin, ArrowRight, Star // Tambah Star jika ingin dipakai
} from 'lucide-react';

// Import Komponen Ikon Kustom Kita
import { WhatsappIcon, TiktokIcon } from '@/components/Icons';

function Footer() {
  const waChat = "https://wa.me/62859106885925?text=Halo%20Silantara,%20saya%20ingin%20konsultasi%20mengenai%20legalitas%20bisnis.";

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Brand & Social Media */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                PT<span className="text-blue-500">.</span> Silantara Sinergi Konsultama
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Partner strategis legalitas bisnis Anda. Kami bantu bangun pondasi hukum yang kuat untuk usaha Kakak agar siap naik kelas.
            </p>
            
            {/* Bagian Media Sosial dengan Ikon Kustom */}
            <div className="flex gap-4 flex-wrap">
              {/* Instagram */}
              <a href="http://instagram.com/silantara.id" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a> 

              {/* WhatsApp - MENGGUNAKAN WHATSAPP ICON KUSTOM */}
              <a href={waChat} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300">
                <WhatsappIcon className="w-6 h-6" />
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61560835560290" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/pt-silantara-sinergi-konsultama" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>

              {/* TikTok - MENGGUNAKAN TIKTOK ICON KUSTOM */}
              <a 
                href="http://www.tiktok.com/@silantara.idn" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-black transition-all duration-300"
              >
                <img 
                  src="https://api.iconify.design/logos:tiktok-icon.svg" 
                  alt="TikTok" 
                  className="w-5 h-5 brightness-0 invert" // Supaya jadi putih
                />
              </a>
            </div>
          </div>

          {/* 2. Navigasi Halaman */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs border-l-4 border-blue-600 pl-3">Halaman</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Beranda</Link></li>
              <li><Link to="/layanan" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Katalog Layanan</Link></li>
              <li><Link to="/artikel" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Artikel & Berita</Link></li>
              <li><Link to="/tentang" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Tentang Kami</Link></li>
            </ul>
          </div>

          {/* 3. Kontak */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs border-l-4 border-blue-600 pl-3">Hubungi Kami</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="block font-medium text-slate-200">Kalimantan Tengah, Indonesia</span>
                  <span className="text-[10px] text-slate-500 italic leading-tight">
                    Melayani Legalitas & Perizinan Seluruh Indonesia
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                {/* Pakai ikon kustom di list kontak juga */}
                <WhatsappIcon className="h-5 w-5 text-green-500 shrink-0" />
                <a href={waChat} className="hover:text-green-400 font-medium transition-colors">
                  0859-1068-85925
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:admin@silantara.id" className="hover:text-blue-400 transition-colors">
                  admin@silantara.id
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Jam Operasional */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs border-l-4 border-blue-600 pl-3">Jam Kerja</h3>
            <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between text-sm mb-3">
                <span>Senin - Jumat</span>
                <span className="font-bold text-white">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Sabtu</span>
                <span className="font-bold text-slate-200">09:00 - 15:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-medium">
            &copy; 2026 <span className="text-white">PT Silantara Sinergi Konsultama</span>. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;