import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ShieldCheck, ShoppingBag, CreditCard, 
  Copy, ExternalLink, CheckCircle, QrCode, Building2, Check,
  Clock, MessageCircle, Sparkles, AlertCircle, Zap, Star,
  TrendingUp, Gift, ChevronDown, ChevronUp, Info, 
  Trash2, Square, CheckSquare, X, Calculator
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import useCart, { formatPrice } from '@/data/useCart'; // ✅ Import useCart

function PembayaranPage() {
  const [copied, setCopied] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null);
  const [selectAll, setSelectAll] = useState(true); // ✅ Pilih semua
  const [selectedItems, setSelectedItems] = useState([]); // ✅ Item yang dipilih

  // ✅ Gunakan useCart
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  const dataPembayaran = {
    bca: {
      nomor: "6695775044",
      atasNama: "SILANTARA SINERGI KONSULTAMA",
      display: "669 577 5044"
    },
    shopee: "https://shopee.co.id/silantara.id",
    qrisImage: "/galeri/qris-dana-silantara.png",
    waNumber: "62859106885925"
  };

  // ✅ Hitung total yang dipilih
  const selectedTotal = cart.reduce((sum, item) => {
    const priceNumber = parseInt(item.price?.replace(/[^0-9]/g, '')) || 0;
    return sum + priceNumber;
  }, 0);

  // ✅ DP 50%
  const dpAmount = Math.round(selectedTotal * 0.5);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    }).catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const waPesan = (topik) => {
    const itemsList = cart.map(item => `• ${item.title}: ${item.price}`).join('\n');
    const pesan = {
      dp: "Halo%20Silantara!%20Saya%20ingin%20konsultasi%20dulu%20sebelum%20DP.",
      langsung: `Halo%20Silantara!%20Saya%20tertarik%20dengan%20layanan%20ini:%0A%0A${encodeURIComponent(itemsList)}%0A%0ATotal:%20${formatPrice(selectedTotal)}%0ADP%2050%25:%20${formatPrice(dpAmount)}%0A%0AMau%20booking%20dan%20bayar%20DP.`,
      konfirmasi: `Halo%20Silantara!%20Saya%20sudah%20transfer%20DP%20sebesar%20${formatPrice(dpAmount)}%20via%20...%0A%0A${encodeURIComponent(itemsList)}%0A%0AMohon%20dicek%20ya!`
    };
    return pesan[topik] || pesan.dp;
  };

  const metodePembayaran = [
    {
      id: 'qris',
      icon: QrCode,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      badge: '⚡ Termudah',
      title: 'Scan QRIS',
      subtitle: 'GoPay, DANA, OVO, LinkAja, semua mobile banking',
    },
    {
      id: 'bca',
      icon: Building2,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      badge: '🏦 Resmi',
      title: 'Transfer Bank BCA',
      subtitle: 'Rekening resmi atas nama PT',
    },
    {
      id: 'shopee',
      icon: ShoppingBag,
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      badge: '🛡️ Terlindungi',
      title: 'Via Shopee',
      subtitle: 'Official Store • Shopee Guarantee',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-3xl border border-white/30">
              <ShieldCheck size={48} />
            </div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Mulai dengan <span className="text-yellow-300">DP 50%</span>,<br />
            Sisanya Setelah Beres!
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Bayar separuh dulu, lunasi setelah dokumen jadi.
          </motion.p>
        </div>
      </section>

      {/* ✅ RINGKASAN PESANAN DARI KERANJANG */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4">
          {cart.length === 0 ? (
            <div className="text-center py-10">
              <div className="flex justify-center mb-4">
                <Calculator size={48} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Keranjang Kosong</h3>
              <p className="text-slate-500 mb-6">Anda belum menambahkan layanan ke keranjang.</p>
              <Link to="/layanan" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                <ArrowLeft size={18} /> Lihat Layanan
              </Link>
            </div>
          ) : (
            <>
              {/* Header dengan Select All & Hapus */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  📋 Ringkasan Pesanan
                </h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectAll(!selectAll)}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 font-medium"
                  >
                    {selectAll ? <CheckSquare size={18} className="text-blue-600" /> : <Square size={18} />}
                    Pilih Semua
                  </button>
                  <button
                    onClick={clearCart}
                    className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 font-medium"
                  >
                    <Trash2 size={16} /> Hapus Semua
                  </button>
                </div>
              </div>

              {/* Daftar Item */}
              <div className="space-y-3 mb-6">
                {cart.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between bg-slate-50 rounded-2xl p-4 border border-slate-100"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                        <p className="text-blue-600 font-black">{item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.title)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                      title="Hapus item"
                    >
                      <X size={18} />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Total & DP */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Total Layanan</span>
                    <span className="font-bold text-slate-800">{formatPrice(selectedTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">DP 50% (Bayar Sekarang)</span>
                    <span className="font-black text-green-600 text-lg">{formatPrice(dpAmount)}</span>
                  </div>
                  <div className="border-t border-blue-200 pt-3 flex justify-between">
                    <span className="text-slate-500 text-xs">Sisa Pelunasan</span>
                    <span className="text-slate-400 text-xs">{formatPrice(selectedTotal - dpAmount)} (setelah dokumen jadi)</span>
                  </div>
                </div>
              </div>

              {/* Info DP */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-bold mb-1">Pembayaran DP 50%</p>
                  <p>Bayar <strong>{formatPrice(dpAmount)}</strong> sekarang sebagai DP. Sisa <strong>{formatPrice(selectedTotal - dpAmount)}</strong> dibayar setelah dokumen selesai dan preview kami kirimkan.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ✅ METODE PEMBAYARAN - Hanya muncul jika ada item */}
      {cart.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Pilih Metode Pembayaran
              </h2>
              <p className="text-slate-500">
                Bayar DP sebesar <span className="font-black text-green-600">{formatPrice(dpAmount)}</span>
              </p>
            </div>

            <div className="space-y-4">
              {metodePembayaran.map((metode, index) => (
                <motion.div
                  key={metode.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl ${
                    activeMethod === metode.id 
                      ? `${metode.borderColor} shadow-lg ring-2 ring-offset-2` 
                      : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveMethod(activeMethod === metode.id ? null : metode.id)}
                    className="w-full p-5 flex items-center gap-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className={`p-3.5 rounded-2xl ${metode.bgColor} ${metode.textColor} shadow-sm`}>
                      <metode.icon size={26} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-800 text-lg">{metode.title}</h3>
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${metode.bgColor} ${metode.textColor} border ${metode.borderColor}`}>
                          {metode.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{metode.subtitle}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      activeMethod === metode.id ? `${metode.bgColor} ${metode.textColor}` : 'bg-slate-100 text-slate-400'
                    }`}>
                      {activeMethod === metode.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeMethod === metode.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-5 border-t-2 border-slate-100 bg-slate-50/50">
                          
                          {/* QRIS */}
                          {metode.id === 'qris' && (
                            <div className="text-center">
                              <div className="bg-white rounded-2xl p-6 mb-4 shadow-inner border border-purple-100 inline-block">
                                <img src={dataPembayaran.qrisImage} alt="QRIS" className="w-72 h-auto rounded-xl mx-auto" />
                              </div>
                              <p className="text-sm text-slate-500 mb-2">Scan untuk bayar <strong>{formatPrice(dpAmount)}</strong></p>
                              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                                <p className="text-sm text-purple-700">💡 Scan QR, bayar DP, langsung kami proses!</p>
                              </div>
                            </div>
                          )}

                          {/* BCA */}
                          {metode.id === 'bca' && (
                            <div>
                              <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 mb-4 shadow-md">
                                <div className="flex items-center justify-between mb-3">
                                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" alt="BCA" className="h-6" />
                                  <span className="text-[10px] font-black text-blue-500 uppercase bg-blue-50 px-3 py-1 rounded-full">Rekening Resmi PT</span>
                                </div>
                                <div className="bg-blue-50/50 rounded-xl p-4 mb-3 text-center">
                                  <p className="text-xs text-slate-500 mb-1">Jumlah Transfer</p>
                                  <p className="text-2xl font-black text-green-600">{formatPrice(dpAmount)}</p>
                                </div>
                                <div className="bg-blue-50/50 rounded-xl p-4 mb-3">
                                  <p className="text-4xl font-black text-slate-800 tracking-wider mb-1">{dataPembayaran.bca.display}</p>
                                  <p className="text-sm text-slate-500">a.n. {dataPembayaran.bca.atasNama}</p>
                                </div>
                                <button
                                  onClick={() => copyToClipboard(dataPembayaran.bca.nomor, 'bca')}
                                  className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                                    copied === 'bca' ? 'bg-green-500 text-white' : 'bg-white text-blue-600 border-2 border-blue-300 hover:bg-blue-50'
                                  }`}
                                >
                                  {copied === 'bca' ? <><Check size={16} /> Tersalin!</> : <><Copy size={16} /> Salin Nomor Rekening</>}
                                </button>
                              </div>
                              <a
                                href={`https://wa.me/${dataPembayaran.waNumber}?text=${waPesan('konfirmasi')}`}
                                target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-md"
                              >
                                <MessageCircle size={20} /> Konfirmasi Transfer
                              </a>
                            </div>
                          )}

                          {/* Shopee */}
                          {metode.id === 'shopee' && (
                            <div>
                              <div className="bg-white border-2 border-orange-200 rounded-2xl p-5 mb-4 shadow-md">
                                <div className="bg-orange-50 rounded-xl p-4 mb-4 text-center">
                                  <p className="text-xs text-slate-500 mb-1">Jumlah Pembayaran</p>
                                  <p className="text-2xl font-black text-green-600">{formatPrice(dpAmount)}</p>
                                </div>
                                <div className="bg-orange-100/50 border border-orange-200 rounded-xl p-4 text-center">
                                  <p className="text-sm text-slate-700 font-bold">shopee.co.id/silantara.id</p>
                                </div>
                              </div>
                              <a
                                href={dataPembayaran.shopee}
                                target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md"
                              >
                                <ExternalLink size={20} /> Buka Official Store Shopee
                              </a>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 bg-white rounded-2xl p-6 border-2 border-dashed border-amber-300 text-center">
              <CreditCard size={20} className="text-amber-600 mx-auto mb-2" />
              <h3 className="font-bold text-slate-800 mb-1">Payment Gateway & Virtual Account</h3>
              <span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-black">Coming Soon</span>
            </motion.div>
          </div>
        </section>
      )}

      {/* Keunggulan */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <Star size={16} className="fill-white inline mr-2" />
              <h3 className="text-2xl font-extrabold text-slate-900 inline">Pembayaran Aman, Proses Cepat</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-sm">
              {[
                { icon: ShieldCheck, title: 'Rekening Resmi PT', desc: 'BCA atas nama perusahaan' },
                { icon: ShoppingBag, title: 'Official Store', desc: 'Shopee terverifikasi' },
                { icon: QrCode, title: 'QRIS All Payment', desc: 'Semua e-wallet & bank' },
                { icon: Gift, title: 'DP 50% Saja', desc: 'Bayar separuh, lunasi nanti' }
              ].map((item, i) => (
                <div key={i} className="p-4">
                  <div className="flex justify-center mb-2"><item.icon size={24} className="text-blue-600" /></div>
                  <p className="font-bold text-slate-700 mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Siap Mulai?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`https://wa.me/${dataPembayaran.waNumber}?text=${waPesan('langsung')}`} target="_blank" rel="noreferrer" className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3">
              <Zap size={22} className="text-yellow-300" /> Booking & Bayar DP
            </a>
            <Link to="/layanan" className="px-10 py-5 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:border-blue-300 transition-all flex items-center justify-center gap-3">
              <ArrowLeft size={22} /> Kembali ke Layanan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default PembayaranPage;