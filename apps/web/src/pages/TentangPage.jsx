import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { 
  Target, Eye, Award, Building2, History, 
  MessageCircle, ArrowRight, CheckCircle, 
  Users2, Globe2, Briefcase, Shield, TrendingUp, Rocket,
  UserCheck, Scale
} from 'lucide-react';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

function TentangPage() {
  const stats = [
    { label: 'Klien Terbantu', value: '200+', icon: Users2 },
    { label: 'Izin Terbit', value: '500+', icon: Briefcase },
    { label: 'Layanan', value: 'Nasional', icon: Globe2 },
    { label: 'Status', value: 'Resmi PT', icon: Shield },
  ];

  const waNumber = "62859106885925";
  const waMessage = encodeURIComponent("Halo Silantara, saya ingin konsultasi mengenai Personal Legal Assistance untuk bisnis saya.");
  
  const reasons = [
    {
      icon: UserCheck,
      title: 'Personal Legal Assistance',
      description: 'Layanan privat khusus untuk Para Pengusaha. Anda akan didampingi Paralegal profesional yang fokus pada kebutuhan legalitas spesifik Anda.',
    },
    {
      icon: Award,
      title: 'Praktisi Berpengalaman',
      description: 'Lahir dari pengalaman nyata menangani kompleksitas birokrasi, memastikan izin usaha Anda terbit tanpa hambatan.',
    },
    {
      icon: Shield,
      title: 'Privasi Terjamin',
      description: 'Kami memperlakukan dokumen perusahaan Anda dengan standar kerahasiaan ketat layaknya aset berharga milik kami sendiri.',
    },
    {
      icon: TrendingUp,
      title: 'Solusi Pertumbuhan',
      description: 'Legalitas bukan sekadar dokumen, tapi fondasi utama bagi Para Pengusaha untuk naik kelas dan ekspansi bisnis.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tentang Kami - Silantara | Solusi Izin Legalitas Nusantara</title>
        <meta
          name="description"
          content="Silantara menyediakan jasa pendirian PT/CV, pendaftaran merek, dan perizinan usaha dengan pendampingan personal legal assistance profesional."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* 1. Hero Section */}
        <section className="relative py-28 bg-gradient-to-br from-[#1800ad] via-[#1800ad] to-[#0d7bff] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Official Company Profile
              </span>
              <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
                Personal Legal <br /> Assistance.
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
                Solusi Izin Legalitas Nusantara yang menghadirkan pendampingan hukum privat profesional untuk Para Pengusaha di seluruh Nusantara.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Stats Bar */}
        <section className="relative -mt-12 z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 text-center hover:border-blue-200 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-[#0d7bff] mx-auto mb-3" />
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Our First Chapter Section */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#1800ad] text-sm font-bold mb-6">
                  <History size={16} /> OUR FIRST CHAPTER
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  Berangkat dari Kepercayaan, <br/>Tumbuh Menjadi Profesional.
                </h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Perjalanan <strong>Silantara</strong> dimulai dari inisiatif freelance perorangan. Kami tumbuh secara organik berkat kepercayaan dari mulut ke mulut dengan dua layanan fokus: <strong>Pendirian PT</strong> dan <strong>Pendaftaran Merek</strong>.
                  </p>
                  <p>
                    Seiring meningkatnya kebutuhan legalitas yang lebih terstruktur, kami bertransformasi menjadi <strong>PT Silantara Sinergi Konsultama</strong> untuk memberikan layanan yang lebih akuntabel dan profesional.
                  </p>
                  <p className="font-medium text-slate-800">
                    Kami menghadirkan konsep <strong>Personal Legal Assistance</strong>, memastikan <strong>Para Pengusaha</strong> mendapatkan pendampingan privat dalam setiap langkah pengurusan izin usaha dan kepatuhan hukum.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {['Pendirian PT/CV/Yayasan', 'Pendaftaran Merek', 'OSS RBA & NIB', 'Konsultan Pajak'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-green-500" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 rotate-2 hover:rotate-0 transition-transform duration-500">
                   <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"alt="Business Partnership" 
                    className="w-full aspect-[4/5] object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1800ad]/40 to-transparent"></div>
                   <Rocket size={60} className="text-white absolute top-20 right-20 animate-bounce" />
                </div>
                <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-[#1800ad] rounded-[3rem] opacity-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Vision & Mission Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-[#1800ad]" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Visi Kami</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Menjadi pendorong utama pertumbuhan ekonomi nasional melalui layanan legalitas terintegrasi yang transparan dan mudah diakses oleh seluruh lapisan pengusaha di Indonesia.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1800ad] rounded-[2.5rem] p-10 shadow-xl text-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Scale className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Misi Kami</h2>
                <ul className="space-y-4 opacity-90 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="font-black text-blue-400">01.</span>
                    <span>Menyediakan jasa legalitas standar korporasi dengan pendekatan personal yang fleksibel.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-blue-400">02.</span>
                    <span>Menjamin efisiensi waktu dan transparansi proses melalui sistem OSS RBA.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-blue-400">03.</span>
                    <span>Mengedukasi <strong>Para Pengusaha</strong> mengenai pentingnya kepatuhan hukum sebagai kunci ekspansi.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Kenapa Harus Silantara?</h2>
              <div className="w-20 h-2 bg-[#0d7bff] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-300"
                >
                  <reason.icon className="h-10 w-10 text-[#0d7bff] mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">{reason.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-24 px-4">
          <motion.div 
            whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-[#1800ad] to-[#0d7bff] rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-none">Siap Legalkan <br/>Bisnis Anda?</h2>
              <p className="text-blue-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
                Jangan biarkan kendala izin menghambat langkah sukses Anda. Konsultasikan legalitas bisnis Anda sekarang, gratis & tanpa komitmen!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#20ba5a] hover:scale-105 transition-all shadow-xl shadow-green-200/50 group whitespace-nowrap"
                >
                  <MessageCircle className="group-hover:rotate-12 transition-transform" />
                  KONSULTASI GRATIS
                </a>
                <a 
                  href="/layanan" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg transition-all border border-white/30"
                >
                  Lihat Katalog <ArrowRight size={20} />
                </a>
              </div>
              <p className="mt-10 text-xs text-blue-200 font-bold tracking-[0.2em] uppercase">
                ⚡ Konsultasikan Legalitas Bisnis Anda Sekarang! ⚡
              </p>
            </div>
          </motion.div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}

export default TentangPage;