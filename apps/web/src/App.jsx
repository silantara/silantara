import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import TentangPage from './pages/TentangPage.jsx';
import LayananPage from './pages/LayananPage';
import Keranjang from './pages/KeranjangPage.jsx';
import KontakPage from './pages/KontakPage.jsx';
import ArtikelPage from './pages/ArtikelPage.jsx';
import KerjasamaPage from './pages/KerjasamaPage';
import DetailArtikelPage from './pages/DetailArtikelPage.jsx'; // 1. Import file baru
import DetailLayananPage from './pages/DetailLayananPage.jsx'; // 1. Import file baru
import PembayaranPage from '@/pages/PembayaranPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/kerjasama" element={<KerjasamaPage />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/layanan/:id" element={<DetailLayananPage />} />
        <Route path="/artikel/:id" element={<DetailArtikelPage />} />
        <Route path="/pembayaran" element={<PembayaranPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;