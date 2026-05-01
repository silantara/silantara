import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, MessageCircle, Trash2, CreditCard } from 'lucide-react';
import useCart, { formatPrice } from './useCart';
import { Link } from 'react-router-dom';

function FloatingCart({ phoneNumber = '62859106885925' }) {
  const { 
    cart, 
    totalPrice, 
    removeFromCart, 
    clearCart, 
    openWhatsApp 
  } = useCart();

  return (
    <AnimatePresence>
      {cart.length > 0 && (
        <motion.div 
          initial={{ y: 200, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: 200, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-[400px] px-4 md:px-0" 
        >
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-600 overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Calculator size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-xl tracking-tight">RINCIAN PESANAN</h3>
                  <p className="text-sm text-blue-100 font-medium">{cart.length} Layanan Terpilih</p>
                </div>
              </div>
              <button 
                onClick={clearCart}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="p-6">
              <div className="max-h-[300px] overflow-y-auto mb-6 pr-2 custom-scrollbar">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg uppercase leading-tight">{item.title}</h4>
                      <p className="text-blue-600 font-black text-lg">{item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.title)}
                      className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="bg-blue-50 rounded-2xl p-5 mb-6 border border-blue-100">
                <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Total Estimasi Investasi</p>
                <p className="text-3xl font-black text-blue-700">
                  {formatPrice(totalPrice)}
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => openWhatsApp(phoneNumber)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-lg shadow-green-100 transition-all"
                >
                  <MessageCircle size={24} /> Pesan via WhatsApp
                </button>
                <Link
                    to="/pembayaran"
                    className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all"
                    >
                    <CreditCard size={24} /> Lanjut ke Pembayaran
                </Link>
                <div className="pt-1">
                  <div className="grid grid-cols-5 gap-1.5 items-center opacity-50 px-1 mb-1.5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Bank_Negara_Indonesia_logo_%282004%29.svg" alt="BNI" className="h-3 w-auto object-contain" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/BRI_2025.svg" alt="BRI" className="h-3 w-auto object-contain" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" alt="Mandiri" className="h-3 w-auto object-contain" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" alt="BCA" className="h-3 w-auto object-contain" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg" alt="DANA" className="h-3 w-auto object-contain" />
                  </div>
                  <div className="flex justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" alt="QRIS" className="h-3 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingCart;