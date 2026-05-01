import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

function ServiceCard({ icon: Icon, title, price, description, timeline, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border-2 border-slate-100 rounded-2xl p-6 flex flex-col gap-3 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-200 group h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>

      <h3 className="text-lg font-bold text-slate-800">{title}</h3>

      {timeline && (
        <span className="inline-flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full font-medium w-fit">
          <Clock className="w-3 h-3" />
          {timeline}
        </span>
      )}

      {price && (
        <div className="text-2xl font-black text-blue-600">{price}</div>
      )}

      <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>

      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors mt-1">
        Lihat Detail
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

export default ServiceCard;