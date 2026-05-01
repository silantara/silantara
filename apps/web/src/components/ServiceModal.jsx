import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, X, Clock, FileText, MessageCircle, AlertCircle, ShoppingCart, Trash2,
  // ✅ Import semua icon yang digunakan
  ShieldCheck, Building2, Briefcase, Receipt, Utensils, Award,
  Calculator, Landmark, MonitorSmartphone, Palette, BookOpen, Image
} from 'lucide-react';
import useCart from '@/data/useCart';

// ✅ Icon Mapping (sama seperti di LayananPage)
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

function ServiceModal({ isOpen, onClose, service }) {
  const { addToCart, isInCart } = useCart();
  
  if (!service) return null;

  // ✅ Dapatkan komponen icon yang benar
  const IconComponent = iconMap[service.icon] || FileText;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl max-h-[95vh] overflow-y-auto rounded-[2rem] border-none shadow-2xl p-0">
        <div className={`h-1.5 w-full ${service.btnColor || 'bg-blue-600'}`} />
        
        <div className="p-6">
          {/* Header Ringkas */}
          <div className="flex items-center gap-4 mb-4">
            {/* ✅ Gunakan IconComponent, bukan service.icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.color || 'bg-blue-50 text-blue-600'}`}>
              <IconComponent size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-lg font-black text-slate-900 leading-tight truncate">
                {service.title}
              </DialogTitle>
              <div className="flex items-center gap-3">
                <p className="text-lg font-bold text-blue-600">{service.price}</p>
                {service.timeline && (
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={12} /> {service.timeline}
                  </span>
                )}
              </div>
            </div>
            {isInCart(service.title) && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0">
                <ShoppingCart size={12} /> Di Keranjang
              </div>
            )}
          </div>

          <DialogDescription className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
            {service.fullDescription || service.description}
          </DialogDescription>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <h3 className="font-bold text-xs text-slate-800 mb-2 flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-green-500" /> Fitur
              </h3>
              <div className="space-y-1.5">
                {service.features?.slice(0, 6).map((feature, index) => {
                  const isObject = typeof feature === 'object' && feature !== null;
                  const text = isObject ? feature.text : feature;
                  const included = isObject ? feature.included : true;

                  return (
                    <div key={index} className="flex items-start gap-2">
                      {included ? (
                        <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={12} />
                      ) : (
                        <X className="text-red-400 mt-0.5 shrink-0" size={12} />
                      )}
                      <span className={`text-xs ${included ? 'text-slate-600' : 'text-slate-400 line-through'}`}>
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {service.requirements && (
              <div>
                <h3 className="font-bold text-xs text-slate-800 mb-2 flex items-center gap-1.5">
                  <AlertCircle size={14} className="text-orange-500" /> Syarat
                </h3>
                <div className="space-y-1.5">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1 h-1 bg-orange-400 rounded-full shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => addToCart(service)}
              className={`flex-1 h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                isInCart(service.title)
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600'
              }`}
            >
              {isInCart(service.title) ? (
                <><Trash2 size={16} /> Hapus</>
              ) : (
                <><ShoppingCart size={16} /> Keranjang</>
              )}
            </button>

            <a 
              href={`https://wa.me/62859106885925?text=Halo%20Silantara%2C%20saya%20ingin%20tanya%20paket%20${service.waMsg}`}
              target="_blank" rel="noreferrer"
              className="flex-[2]"
            >
              <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-green-100">
                <MessageCircle size={16} /> Konsultasi WA
              </Button>
            </a>

            <Button 
              variant="outline" 
              onClick={onClose} 
              className="h-12 w-12 rounded-xl font-bold text-slate-400 border-slate-200 hover:bg-slate-50 transition-all p-0 flex items-center justify-center"
            >
              <X size={18} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ServiceModal;