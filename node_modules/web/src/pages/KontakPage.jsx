import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { MapPin, Mail, Phone, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { WhatsappIcon, TiktokIcon } from '@/components/Icons';


function KontakPage() {
  const waNumber = "62859106885925";
  const waMessage = encodeURIComponent("Halo Silantara, saya ingin konsultasi mengenai legalitas bisnis saya.");
  
  // URL Embed Google Maps Sampit sesuai referensi gambar Kakak
  const gmapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9233784532566!2d112.95851427410715!3d-2.531902038254411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de2bfe780fb00dd%3A0x73ccff9837d72ce!2sBiro%20Jasa%20Pembuatan%20Legalitas%20Izin%20Usaha%20NIB%2C%20PT%2C%20CV%2C%20Yayasan%2C%20NPWP!5e0!3m2!1sid!2sid!4v1775625240282!5m2!1sid!2sid";
  const contactInfo = [
    { icon: MapPin, title: 'LOKASI OPERASIONAL', content: 'Jl. Kapuas No.54, Baamang Hilir, Sampit, Kalimantan Tengah' },
    { icon: Mail, title: 'EMAIL RESMI', content: 'admin@silantara.id' },
    { icon: WhatsappIcon, title: 'WHATSAPP BUSINESS', content: '0859-1068-85925' },
    { icon: Clock, title: 'JAM OPERASIONAL', content: 'Senin – Jumat: 08.00 – 17.00 | Sabtu: 08.00 – 12.00 WIB' },
  ];

  return (
    <>
      <Helmet>
        <title>Kontak & Konsultasi - Silantara</title>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

       {/* HERO SECTION: Menggunakan Gradient Biru ke Indigo sesuai permintaan */}
<section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {/* Warna teks span disesuaikan agar tetap kontras di atas gradient biru */}
      <span className="text-blue-100 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
        CONTACT US
      </span>
      <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
        Butuh Bantuan <span className="text-blue-500">Legalitas?</span>
      </h1>
      <p className="text-blue-50 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
        Tim ahli kami siap membantu proses perizinan bisnis Kakak dengan cepat dan transparan.
      </p>
    </motion.div>
  </div>
  
  {/* Efek overlay agar gradient terlihat lebih dalam dan tidak flat */}
  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
</section>

        {/* CONTENT SECTION: Info & Maps */}
        <section className="py-16 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Info Cards (Kiri) */}
            <div className="lg:col-span-5 space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-5 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-white text-blue-600 rounded-xl shadow-sm border border-slate-100">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{info.title}</h3>
                    <p className="text-base font-bold text-slate-800 leading-snug">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section (Kanan) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-100 p-2 rounded-[2.5rem] h-[450px] overflow-hidden shadow-inner border">
                <iframe 
                  title="Lokasi Silantara"
                  src={gmapsEmbedUrl}
                  width="100%" height="100%" 
                  style={{ border: 0 }} 
                  className="rounded-[2rem]"
                  allowFullScreen="" loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* BAR BIRU MEMANJANG (Full Width CTA) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black mb-2 tracking-tight">Konsultasi Gratis Sekarang!</h2>
              <p className="text-blue-100 text-lg opacity-90">Jangan biarkan bisnis Anda tanpa izin. Tanya admin kami sekarang juga.</p>
            </div>
            <a 
              href={`https://wa.me/${waNumber}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-[#20ba5a] hover:scale-105 transition-all shadow-xl shadow-green-200/50 group whitespace-nowrap"
              >
                <WhatsappIcon size={20} className="fill-white/20" />
                Chat Admin Silantara
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
          </motion.div>
        </section>

        <Footer />
      <WhatsAppFloat />Error Lens
      </div>
    </>
  );
}

export default KontakPage;