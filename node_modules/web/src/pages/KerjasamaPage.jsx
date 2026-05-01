import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Handshake, Gavel, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function KerjasamaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">Program Kemitraan Silantara</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami membuka peluang kolaborasi bagi para profesional hukum, notaris, dan agen legalitas untuk tumbuh bersama dalam ekosistem Silantara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 border rounded-3xl hover:shadow-xl transition-all border-blue-100">
            <Gavel className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Mitra Notaris</h3>
            <p className="text-gray-600 mb-6">Kolaborasi pengesahan akta badan hukum dengan sistem yang terintegrasi dan transparan.</p>
            <Button variant="outline" className="w-full">Hubungi Tim Kemitraan</Button>
          </div>

          {/* Card 2 */}
          <div className="p-8 border rounded-3xl hover:shadow-xl transition-all border-green-100 bg-green-50/30">
            <Handshake className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Aliansi Biro Jasa</h3>
            <p className="text-gray-600 mb-6">Saling melengkapi layanan perizinan khusus daerah atau sektor industri tertentu.</p>
            <Button variant="outline" className="w-full border-green-200">Gabung Aliansi</Button>
          </div>

          {/* Card 3 */}
          <div className="p-8 border rounded-3xl hover:shadow-xl transition-all border-orange-100">
            <Users className="w-12 h-12 text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Program Referral</h3>
            <p className="text-gray-600 mb-6">Dapatkan komisi menarik dengan merekomendasikan klien yang membutuhkan legalitas.</p>
            <Button variant="outline" className="w-full border-orange-200">Daftar Referral</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default KerjasamaPage;