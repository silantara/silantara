import { 
  ShieldCheck, Users, Clock, Bookmark, 
  Landmark, BadgeCheck, Zap, Receipt,
  Search, Check, FileText, Badge, PartyPopper, 
  Laptop, CheckCircle, FileSearch, RefreshCw, 
  Upload, CreditCard, Brush, ClipboardList, 
  FolderOpen, Calculator, Send, Award 
} from 'lucide-react';

export const allServices = [
  {
    slug: 'pt-perorangan',
    prefix: 'Pendirian',
    category: 'pt-perorangan',
    title: 'PT Perorangan',
    duration: '1-2 Hari Kerja',
    tagline: 'Cepat, Murah, & Resmi',
    heroDescription: 'Solusi legalitas terbaik untuk UMKM Indonesia. PT Perorangan memungkinkan Anda menjadi Direktur sekaligus Pemilik Tunggal dengan perlindungan aset penuh dan pemisahan harta pribadi.',
    priceRange: 'Mulai Rp 450.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20PT%20Perorangan',
    
    // Data paket yang digabung dari input Anda
    packages: [
      {
        name: 'Lite',
        price: '450.000',
        recommended: false,
        features: {
          'Akta & SK kemenkum': true,
          'SK kemenkum RI': true,
          'NPWP Pajak Badan': false,
          'SKT Pajak Badan': false,
          'Max 10 Usaha / KBLI': true,
          'Akun @gmail Perusahaan': true,
          'NIB a/n Perusahaan': false,
          'Akun OSS RBA Terbaru': false,
          'Pernyataan Tata Ruang': false,
          'SPPL (Dokumen Lingkungan)': false,
          'Sertifikat Standar (Bonus)': false,
          'Dokumen Fisik Lengkap': true,
        }
      },
      {
        name: 'LENGKAP',
        price: '750.000',
        recommended: true,
        features: {
          'Akta & SK kemenkum': true,
          'SK kemenkum RI': true,
          'NPWP Pajak Badan': true,
          'SKT Pajak Badan': true,
          'Max 10 Usaha / KBLI': true,
          'Akun @gmail Perusahaan': true,
          'NIB a/n Perusahaan': true,
          'Akun OSS RBA Terbaru': true,
          'Pernyataan Tata Ruang': true,
          'SPPL (Dokumen Lingkungan)': true,
          'Sertifikat Standar (Bonus)': true,
          'Dokumen Fisik Lengkap': true,
        }
      }
    ],

    // Alur proses detail berdasarkan permintaan (Langkah demi Langkah)
    steps: [
      { 
        title: 'Konsultasi', 
        desc: 'Diskusi kebutuhan legalitas dan pemilihan KBLI yang tepat.', 
        info: '15-30 menit', 
        icon: 'users' 
      },
      { 
        title: 'Validasi Dokumen', 
        desc: 'Pemeriksaan kelengkapan berkas KTP dan NPWP Pendiri.', 
        info: '1-2 Jam', 
        icon: 'check' 
      },
      { 
        title: 'Booking Nama', 
        desc: 'Pengecekan dan reservasi nama PT di sistem kemenkum.', 
        info: 'Instant', 
        icon: 'bookmark' 
      },
      { 
        title: 'SK kemenkum', 
        desc: 'Penerbitan pernyataan pendirian dan pengesahan badan hukum.', 
        info: 'Instant', 
        icon: 'landmark' 
      },
      { 
        title: 'NPWP Badan', 
        desc: 'Pendaftaran NPWP atas nama perusahaan secara resmi.', 
        info: '1 Hari', 
        icon: 'receipt' 
      },
      { 
        title: 'Penerbitan NIB', 
        desc: 'Penerbitan Nomor Induk Berusaha melalui sistem OSS RBA.', 
        info: '1 Hari', 
        icon: 'badge' 
      }
    ]
  },
  
  // Anda bisa menambahkan kategori lain (CV, Yayasan, dll) di bawah ini dengan format yang sama
// ==========================================
  // KATEGORI: PT PERSEROAN (PT UMUM)
  // ==========================================
  {
    slug: 'pt-perseroan',
    prefix: 'Pendirian',
    category: 'pt-perseroan',
    title: 'PT Perseroan (Umum)',
    duration: '3-7 Hari Kerja',
    tagline: 'Solusi Bisnis Skala Besar',
    heroDescription: 'Pendirian PT Perseroan (minimal 2 orang) dengan legalitas lengkap untuk kebutuhan tender, kerjasama pemerintah, dan operasional bisnis skala nasional.',
    priceRange: 'Mulai Rp 3.500.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20PT%20Perseroan%20Umum',
    
    // Data paket berdasarkan Paket Servisku.txt
    packages: [
      {
        name: 'LITE',
        price: '3.500.000',
        recommended: false,
        features: {
          'Cek Nama (Booking Nama)': true,
          'Akta Notaris Pendirian PT': true,
          'SK Kemenkumham RI': true,
          'Max 20 Bidang Usaha / KBLI': true,
          'NPWP a/n Perusahaan': false,
          'NIB a/n Perusahaan (SIUP)': false,
          'Dokumen Fisik Lengkap': true,
        }
      },
      {
        name: 'LENGKAP',
        price: '4.500.000',
        recommended: true,
        features: {
          'Cek Nama (Booking Nama)': true,
          'Akta Notaris Pendirian PT': true,
          'SK Kemenkumham RI': true,
          'Max 20 Bidang Usaha / KBLI': true,
          'NPWP a/n Perusahaan': true,
          'NIB a/n Perusahaan (SIUP)': true,
          'Akun OSS RBA Terbaru': true,
          'Pernyataan Tata Ruang & SPPL': true,
          'Dokumen Fisik Lengkap': true,
        }
      }
    ],

    // Alur proses PT Umum
    // Masukkan ke dalam objek layanan di allServices
steps: [
  {  title: 'Konsultasi', desc: 'Diskusi kebutuhan legalitas dan pemilihan KBLI.', info: '15-30 Mnt',     icon: 'users' },
  {  title: 'Validasi',     desc: 'Pemeriksaan berkas KTP & NPWP Pendiri.',    info: 'Instant',     icon: 'check' },
  {  title: 'Booking Nama',     desc: 'Reservasi nama badan usaha di sistem Kemenkumham.',    info: 'Instant',    icon: 'search' },
  {  title: 'Akta Notaris',     desc: 'Pembuatan rincian Akta Pendirian oleh Notaris.',   info: '2-3 Hari',    icon: 'file-text'},
  {  title: 'SK Kemenkum',     desc: 'Pengesahan resmi badan hukum oleh negara.',     info: '1 Hari',     icon: 'landmark'   },
  {  title: 'NPWP & SKT',     desc: 'Pendaftaran pajak badan dan terbit Kartu NPWP.',     info: '1 Hari',    icon: 'receipt'  },
  {  title: 'NIB',     desc: 'Penerbitan Nomor Induk Berusaha via OSS RBA.',     info: '1 Hari',     icon: 'badge' },
  {  title: 'Legalitas Terbit', desc: 'Seluruh dokumen selesai dan siap digunakan bisnis.', info: 'Selesai', icon: 'party-popper' }
]
  },

  // ==========================================
  // KATEGORI: CV
  // ==========================================
  {
    slug: 'cv',
    prefix: 'Pendirian',
    category: 'cv',
    title: 'Persekutuan Komanditer (CV)',
    duration: '3-7 Hari Kerja',
    tagline: 'Legalitas Fleksibel & Terpercaya',
    heroDescription: 'Bentuk usaha yang cocok untuk kemitraan bisnis dengan prosedur yang lebih sederhana namun tetap diakui secara hukum untuk kerjasama profesional.',
    priceRange: 'Mulai Rp 2.900.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20CV',
    
    // Data paket berdasarkan Paket Servisku.txt
    packages: [
      {
        name: 'LITE',
        price: '2.900.000',
        recommended: false,
        features: {
          'Cek Nama Perusahaan': true,
          'Akta Notaris Pendirian': true,
          'SK Kemenkumham RI': true,
          'NPWP a/n Perusahaan': false,
          'NIB a/n Perusahaan (SIUP)': false,
          'Dokumen Fisik Lengkap': true,
        }
      },
      {
        name: 'LENGKAP',
        price: '3.500.000',
        recommended: true,
        features: {
          'Cek Nama Perusahaan': true,
          'Akta Notaris Pendirian': true,
          'SK Kemenkumham RI': true,
          'NPWP a/n Perusahaan': true,
          'NIB a/n Perusahaan (SIUP)': true,
          'Akun OSS RBA Terbaru': true,
          'SPPL & Sertifikat Standar': true,
          'Dokumen Fisik Lengkap': true,
        }
      }
    ],

    // Alur proses CV
// Masukkan ke dalam objek layanan di allServices
steps: [
  { 
    title: 'Konsultasi', 
    desc: 'Diskusi kebutuhan legalitas dan pemilihan KBLI.', 
    info: '15-30 Mnt', 
    icon: 'users' 
  },
  { 
    title: 'Validasi', 
    desc: 'Pemeriksaan berkas KTP & NPWP Pendiri.', 
    info: 'Instant', 
    icon: 'check' 
  },
  { 
    title: 'Booking Nama', 
    desc: 'Reservasi nama badan usaha di sistem Kemenkumham.', 
    info: 'Instant', 
    icon: 'search' 
  },
  { 
    title: 'Akta Notaris', 
    desc: 'Pembuatan rincian Akta Pendirian oleh Notaris.', 
    info: '2-3 Hari', 
    icon: 'file-text' 
  },
  { 
    title: 'SK Kemenkum', 
    desc: 'Pengesahan resmi badan hukum oleh negara.', 
    info: '1 Hari', 
    icon: 'landmark' 
  },
  { 
    title: 'NPWP & SKT', 
    desc: 'Pendaftaran pajak badan dan terbit Kartu NPWP.', 
    info: '1 Hari', 
    icon: 'receipt' 
  },
  { 
    title: 'NIB', 
    desc: 'Penerbitan Nomor Induk Berusaha via OSS RBA.', 
    info: '1 Hari', 
    icon: 'badge' 
  },
  { 
    title: 'Legalitas Terbit', 
    desc: 'Seluruh dokumen selesai dan siap digunakan bisnis.', 
    info: 'Selesai', 
    icon: 'party-popper' 
  }
]
  },
  // ==========================================
// KATEGORI: YAYASAN
// ==========================================
    {
    slug: 'yayasan',
    prefix: 'Pendirian',
    category: 'yayasan',
    duration: '7-21 Hari Kerja',
    title: 'Yayasan (Sosial & Nirlaba)',
    tagline: 'Legalitas untuk Bakti Sosial & Kemanusiaan',
    heroDescription: 'Pendirian Yayasan resmi untuk kegiatan sosial, agama, atau kemanusiaan dengan pengesahan Kemenkumham RI dan integrasi sistem OSS terbaru.',
    priceRange: 'Mulai Rp 3.000.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20Pendirian%20Yayasan',
    
    // Data paket berdasarkan struktur Yayasan
    packages: [
        {
        name: 'LITE',
        price: '3.000.000',
        recommended: false,
        features: {
            'Cek Nama Yayasan': true,
            'Akta Notaris Pendirian Yayasan': true,
            'SK Kemenkumham RI': true,
            '20 Bidang Usaha / KBLI': true,
            'Akun@gmail.com Yayasan': true,
            'NPWP a/n Yayasan': false,
            'NIB a/n Yayasan (SIUP)': false,
            'Akun OSS Terbaru': false,
            'Pernyataan Tata Ruang & SPPL': false,
            'Sertifikat Standar*': false,
            'Dokumen Fisik Lengkap': true,
        }
        },
        {
        name: 'LENGKAP',
        price: '4.000.000',
        recommended: true,
        features: {
            'Cek Nama Yayasan': true,
            'Akta Notaris Pendirian Yayasan': true,
            'SK Kemenkumham RI': true,
            '20 Bidang Usaha / KBLI': true,
            'Akun@gmail.com Yayasan': true,
            'NPWP a/n Yayasan': true,
            'NIB a/n Yayasan (SIUP)': true,
            'Akun OSS Terbaru': true,
            'Pernyataan Tata Ruang & SPPL': true,
            'Sertifikat Standar*': true,
            'Dokumen Fisik Lengkap': true,
        }
        }
    ],

    // Alur proses Pendirian Yayasan
    steps: [
        { title: 'Konsultasi', desc: 'Diskusi tujuan yayasan (Sosial/Keagamaan) dan pemilihan KBLI.', info: '15-30 Mnt', icon: 'users' },
        { title: 'Validasi', desc: 'Pemeriksaan berkas KTP & NPWP Pendiri, Pembina, & Pengurus.', info: 'Instant', icon: 'check' },
        { title: 'Booking Nama', desc: 'Pengecekan dan reservasi nama Yayasan di Kemenkumham.', info: 'Instant', icon: 'search' },
        { title: 'Akta Notaris', desc: 'Proses penandatanganan dan pembuatan Akta Pendirian Yayasan.', info: '2-3 Hari', icon: 'file-text' },
        { title: 'SK Kemenkum', desc: 'Terbitnya SK pengesahan Yayasan sebagai Badan Hukum resmi.', info: '1 Hari', icon: 'landmark' },
        { title: 'NPWP Yayasan', desc: 'Pembuatan NPWP khusus atas nama badan hukum Yayasan.', info: '1 Hari', icon: 'receipt' },
        { title: 'NIB Yayasan', desc: 'Pendaftaran dan aktivasi NIB melalui portal OSS RBA.', info: '1 Hari', icon: 'badge' },
    ]
    },
    // ==========================================
// KATEGORI: Perizinan Lanjutan
// ==========================================
{
  slug: 'nib',
  prefix: 'Pembuatan',
  category: 'izin-dasar',
  duration: '1 Hari Kerja',
  title: 'NIB Perorangan',
  tagline: 'Identitas Resmi Pelaku Usaha UMKM',
  heroDescription: 'Pengurusan Nomor Induk Berusaha (NIB) untuk pelaku usaha perseorangan melalui sistem OSS RBA terbaru.',
  priceRange: 'Rp 200.000',
  // DIBUNGKUS DALAM PACKAGES AGAR MUNCUL DI DESIGN ANDA
  packages: [
    {
      name: 'NIB UMKM',
      price: '200.000',
      recommended: true,
      features: {
        'Pembuatan Akun OSS RBA': true,
        'Penerbitan NIB Resmi': true,
        'Konsultasi Pemilihan KBLI': true,
        'Pernyataan Mandiri K3L': true,
        'Dokumen Digital (PDF)': true
      }
    }
  ],
  steps: [
    { title: 'Konsultasi KBLI', desc: 'Menentukan kode bidang usaha yang tepat.', info: '10 Mnt', icon: 'search' },
    { title: 'Input Data', desc: 'Pendaftaran akun dan input NIK.', info: '30 Mnt', icon: 'file-text' },
    { title: 'Penerbitan', desc: 'NIB langsung terbit dari sistem OSS.', info: 'Instan', icon: 'award' }
  ]
},
{
  slug: 'merek',
  prefix: 'Pendaftaran',
  category: 'perlindungan-hukum',
  duration: '15 Hari Kerja',
  title: 'HAKI / Merek',
  tagline: 'Amankan Aset Intelektual Bisnis Anda',
  heroDescription: 'Lindungi nama dan logo brand Anda dari pencurian atau peniruan melalui pendaftaran resmi ke DJKI.',
  priceRange: 'Rp 2.900.000',
  packages: [
    {
      name: 'Merk UMKM',
      price: '2.900.000',
      recommended: true,
      features: {
        'Analisis Nama Merek': true,
        'Biaya PNBP Resmi 1 Kelas': true,
        'Pendaftaran Akun DJKI': true,
        'Upload Dokumen & Logo': true,
        'Monitoring Status (2 Thn)': true
      }
    }
  ],
  steps: [
    { title: 'Penelusuran', desc: 'Cek kemiripan merek di database.', info: '1 Hari', icon: 'search' },
    { title: 'Bayar PNBP', desc: 'Penyetoran biaya resmi negara.', info: 'Instan', icon: 'credit-card' },
    { title: 'Submit', desc: 'Input data teknis ke portal DJKI.', info: '1 Hari', icon: 'send' }
  ]
},
{
  slug: 'pirt',
  prefix: 'Pendaftaran',
  category: 'sertifikasi',
  duration: '1-2 Hari Kerja',
  title: 'PIRT Lengkap',
  tagline: 'Izin Edar Pangan Aman & Terpercaya',
  heroDescription: 'Solusi lengkap izin pangan industri rumah tangga meliputi NIB dan sertifikat PIRT.',
  priceRange: 'Rp 350.000',
  packages: [
        {
        name: 'Hanya PIRT',
        price: '200.000',
        recommended: false,
        features: {
            'Pendaftaran NIB RBA': false,
            'Desain Label Standar': false,
            'Pendaftaran SPP-IRT': true,
            'Komitmen Pemenuhan': false,
            'Sertifikat PIRT Digital': true
        }
        },
        {
        name: 'PIRT Paket Lengkap',
        price: '350.000',
        recommended: true,
        features: {
            'Pendaftaran NIB RBA': true,
            'Desain Label Standar': true,
            'Pendaftaran SPP-IRT': true,
            'Komitmen Pemenuhan': true,
            'Sertifikat PIRT Digital': true
        }
        }
  ],
  steps: [
    { title: 'Labeling', desc: 'Pembuatan desain label standar.', info: '2 Hari', icon: 'brush' },
    { title: 'Input SPP-IRT', desc: 'Registrasi ke sistem integrasi.', info: '1 Hari', icon: 'upload' },
    { title: 'Terbit', desc: 'Penerbitan nomor PIRT resmi.', info: 'Proses', icon: 'clipboard-list' }
  ]
},
// ==========================================
// KATEGORI: perpajakan (NPWP Pribadi, EFIN, dll)
// ==========================================
{
  slug: 'npwp-pribadi',
  prefix: 'Pengurusan',
  category: 'pajak',
  duration: '1 Hari Kerja',
  title: 'NPWP Baru & Coretax',
  tagline: 'Administrasi Pajak Berbasis NIK',
  heroDescription: 'Pendaftaran NPWP dari nol hingga aktif. Sudah termasuk sinkronisasi NIK sebagai NPWP dan aktivasi akun pada sistem Coretax terbaru.',
  priceRange: 'Rp 150.000', // Gunakan priceRange agar muncul di kartu investasi
  waMsg: 'Halo%20Silantara,%20saya%20ingin%20buat%20NPWP%20Baru',
  packages: [
    {
      name: 'Layanan Standar',
      price: '150.000',
      recommended: true,
      features: {
        'Pendaftaran Akun Pajak': true,
        'Validasi NIK/KTP': true,
        'Aktivasi Akun Coretax': true,
        'Penerbitan SKT Digital': true,
        'Panduan Lapor Pajak Awal': true
      }
    }
  ],
  steps: [
    { title: 'Validasi NIK', desc: 'Pengecekan kesiapan NIK untuk didaftarkan sebagai NPWP.', info: '5 Mnt', icon: 'user-check' },
    { title: 'Registrasi Online', desc: 'Pendaftaran melalui portal DJP dengan data profil lengkap.', info: '1 Jam', icon: 'laptop' },
    { title: 'Aktivasi', desc: 'Verifikasi email dan aktivasi akun portal pajak (EFIN/Coretax).', info: '1 Hari', icon: 'check-circle' }
  ]
},
{
  slug: 'npwp-badan',
  prefix: 'Pengurusan',
  category: 'pajak',
  duration: '1-2 Hari Kerja',
  title: 'NPWP Badan Usaha',
  tagline: 'Legalitas Pajak Perusahaan & Organisasi',
  heroDescription: 'Pendaftaran NPWP khusus untuk entitas bisnis (PT, CV, Yayasan). Termasuk pengurusan EFIN badan, aktivasi sistem Coretax, dan integrasi data perpajakan perusahaan.',
  priceRange: 'Rp 250.000',
  waMsg: 'Halo%20Silantara,%20saya%20ingin%20mengurus%20NPWP%20Badan%20Usaha',
  packages: [
    {
      name: 'Layanan Lengkap',
      price: '250.000',
      recommended: true,
      features: {
        'Pendaftaran Akun Pajak Badan': true,
        'Sinkronisasi NIK Pengurus': true, // Pengganti aktivasi akses manual
        'Validasi Data Akta & Kemenkumham': true,
        'Aktivasi Portal Coretax Terbaru': true,
        'Penerbitan SKT (Surat Keterangan Terdaftar)': true,
        'Penerbitan Kartu NPWP Digital Badan': true,
        'Panduan Hak & Kewajiban Pajak': true
      }
    }
  ],
  steps: [
    { 
      title: 'Validasi Dokumen', 
      desc: 'Pengecekan Akta Pendirian, SK Kemenkumham, dan NIK Pengurus secara sistem.', 
      info: '15 Mnt', 
      icon: 'file-search' 
    },
    { 
      title: 'Registrasi Coretax', 
      desc: 'Pendaftaran entitas bisnis pada sistem perpajakan terintegrasi terbaru.', 
      info: '1-2 Jam', 
      icon: 'landmark' 
    },
    { 
      title: 'Sinkronisasi NIK', 
      desc: 'Aktivasi NIK Pengurus sebagai basis akses portal pajak perusahaan.', 
      info: 'Instant', 
      icon: 'refresh-cw' 
    },
    { 
      title: 'Terbit SKT Digital', 
      desc: 'Penerbitan Surat Keterangan Terdaftar dan Kartu NPWP Digital.', 
      info: 'Selesai', 
      icon: 'check-circle' 
    }
  ]
},
{
  slug: 'spt-tahunan-pribadi',
  prefix: 'Pelaporan',
  category: 'pajak',
  duration: '1 Hari Selesai',
  title: 'SPT Tahunan Pribadi',
  tagline: 'Lapor Pajak Individu Praktis',
  heroDescription: 'Layanan asistensi pelaporan SPT Tahunan Pribadi (1770/1770S/1770SS) melalui sistem Coretax.',
  priceRange: 'Rp 500.000',
  waMsg: 'Halo%20Silantara,%20saya%20ingin%20lapor%20SPT%20Tahunan%20Pribadi',
  packages: [
    {
      name: 'Layanan Standar',
      price: '500.000',
      recommended: true,
      features: {
        'Analisis Bukti Potong': true,
        'Input Harta & Kewajiban': true,
        'Submit Portal Coretax': true,
        'Bukti Penerimaan Elektronik': true,
        'Konsultasi Pajak Ringan': true
      }
    }
  ], // Tutup array packages di sini
  steps: [ // Properti steps berdiri sendiri sejajar dengan slug/title
    { 
      title: 'Kumpulkan Bukti', 
      desc: 'Pengumpulan bukti potong (A1/A2/1721-VI) dan rekapitulasi harta/utang terbaru.', 
      info: '1 Jam', 
      icon: 'FolderOpen' 
    },
    { 
      title: 'Validasi & Draft', 
      desc: 'Pengecekan kesesuaian data dengan sistem Coretax dan penyusunan draft SPT.', 
      info: '30 Mnt', 
      icon: 'Calculator' 
    },
    { 
      title: 'Otorisasi Elektronik', 
      desc: 'Verifikasi identitas melalui Sertifikat Elektronik atau kode OTP di portal Coretax.', 
      info: '15 Mnt', 
      icon: 'ShieldCheck' 
    },
    { 
      title: 'Kirim & Submit', 
      desc: 'Proses finalisasi pengiriman SPT dan penerimaan tanda terima resmi.', 
      info: '10 Mnt', 
      icon: 'Send' 
    },
    { 
      title: 'BPE Terbit', 
      desc: 'Penyerahan Bukti Penerimaan Elektronik (BPE) kepada klien.', 
      info: 'Selesai', 
      icon: 'Award' 
    }
  ]
}, // Jangan lupa koma di sini jika ada layanan berikutnya (seperti SPT Badan) // <--- PASTIKAN ADA KOMA DI SINI
  {
    slug: 'spt-tahunan-badan',
    prefix: 'Pelaporan',
    category: 'pajak',
  duration: '3-5 Hari Kerja', // Sesuaikan dengan total hari di steps
  title: 'SPT Tahunan Badan',
  tagline: 'Lapor Pajak Perusahaan Akurat',
  heroDescription: 'Layanan profesional untuk rekonsiliasi fiskal dan pelaporan SPT Tahunan Badan melalui sistem Coretax untuk memastikan kepatuhan pajak perusahaan Anda.',
  priceRange: 'Rp 1.500.000',
  waMsg: 'Halo%20Silantara,%20saya%20ingin%20mengurus%20SPT%20Tahunan%20Badan',
  packages: [
    {
      name: 'SPT Tahunan Badan',
      price: '1.500.000',
      recommended: true,
      features: {
        'Rekonsiliasi Fiskal': true,
        'Penyusunan Laporan Keuangan': true,
        'Input Lampiran Khusus': true,
        'Submit Portal Coretax': true,
        'Evaluasi Risiko Pajak': true,
        'Arsip Dokumen Digital': true
      }
    }
  ],
  steps: [
    { 
      title: 'Data Gathering', 
      desc: 'Pengumpulan Laporan Keuangan (Neraca & Laba Rugi).', 
      info: '1-2 Hari', 
      icon: 'folder-open' 
    },
    { 
      title: 'Rekonsiliasi', 
      desc: 'Penyesuaian fiskal dan perhitungan pajak terutang perusahaan.', 
      info: '1-2 Hari', 
      icon: 'calculator' 
    },
    { 
      title: 'Reporting', 
      desc: 'Input data ke sistem Coretax dan lampiran dokumen pendukung.', 
      info: '2-4 Jam', 
      icon: 'send' 
    },
    { 
      title: 'BPE Terbit', 
      desc: 'Penyerahan bukti lapor resmi dari Direktorat Jenderal Pajak.', 
      info: 'Selesai', 
      icon: 'award' 
    }
  ]
},
{
  slug: 'aktivasi-pkp',
  prefix: 'Pengurusan',
  category: 'pajak',
  duration: '3-5 Hari Kerja',
  title: 'Aktivasi PKP',
  tagline: 'Legalitas Transaksi Ber-PPN',
  heroDescription: 'Layanan pengukuhan Pengusaha Kena Pajak (PKP) agar perusahaan Anda dapat menerbitkan Faktur Pajak resmi dan mengikuti tender besar.',
  priceRange: 'Rp 1.500.000',
  waMsg: 'Halo%20Silantara,%20saya%20ingin%20aktivasi%20PKP%20untuk%20perusahaan%20saya',
  packages: [
    {
      name: 'PKP Lengkap',
      price: '1.500.000',
      recommended: true,
      features: {
        'Pengajuan Kukuh PKP': true,
        'Aktivasi Sertifikat Elektronik': true,
        'Setting Akun Coretax PKP': true,
        'Panduan e-Faktur Terbaru': true,
        'Pendampingan Survei (Jika ada)': true,
        'Gratis PDF Kewajiban PKP': true
      }
    }
  ],
  steps: [
    { title: 'Persyaratan', desc: 'Pengecekan kelengkapan dokumen kantor dan omzet.', info: '1 Jam', icon: 'file-text' },
    { title: 'Submit Sistem', desc: 'Pengajuan permohonan melalui portal Coretax.', info: '1 Hari', icon: 'upload' },
    { title: 'Verifikasi', desc: 'Proses verifikasi data oleh petugas KPP.', info: '2-3 Hari', icon: 'shield-check' },
    { title: 'PKP Aktif', desc: 'Penerbitan surat pengukuhan dan aktivasi e-Faktur.', info: 'Selesai', icon: 'check-circle' }
  ]
},
  // ==========================================
  // KATEGORI: Revive Akun Coretax
  // ==========================================
  {
    slug: 'revive-coretax',
    prefix: 'Pemulihan',
    category: 'izin',
    duration: '1 Hari Kerja',
    title: 'Revive Akun Coretax',
    tagline: 'Pulihkan Akses Pajak Anda',
    heroDescription: 'Layanan pemulihan akun pajak yang terkunci, lupa email, atau lupa EFIN. Kami bantu akun Coretax/DJP Online Anda aktif kembali.',
    priceRange: 'Rp 250.000',
    waMsg: 'Halo%20Silantara,%20saya%20ingin%20memulihkan%20akun%20pajak%20saya',
    packages: [
      {
        name: 'Pemulihan Standar',
        price: '250.000',
        recommended: true,
        features: {
          'Pemulihan No. EFIN': true,
          'Reset Email Akun Pajak': true,
          'Sinkronisasi Data Coretax': true,
          'Reset Password Portal Pajak': true,
          'Panduan Login & Keamanan': true,
        }
      }
    ],
    steps: [
      { title: 'Cek Status Akun', desc: 'Pengecekan status akun pajak terkini.', info: '15 Mnt', icon: 'search' },
      { title: 'Reset EFIN/Email', desc: 'Proses pemulihan EFIN atau reset email terdaftar.', info: '1-2 Jam', icon: 'refresh-cw' },
      { title: 'Sinkronisasi Data', desc: 'Sinkronisasi data dengan sistem Coretax terbaru.', info: '30 Mnt', icon: 'upload' },
      { title: 'Konfirmasi Aktif', desc: 'Akun berhasil dipulihkan dan siap digunakan.', info: 'Selesai', icon: 'check-circle' }
    ]
  },
  // ==========================================
  // KATEGORI: DIGITAL & KREATIF
  // ==========================================
  {
    slug: 'website-perusahaan',
    prefix: 'Pembuatan',
    category: 'digital',
    duration: '7-14 Hari Kerja',
    title: 'Website Perusahaan',
    tagline: 'Kehadiran Digital Profesional',
    heroDescription: 'Website profil profesional, responsif, dan modern untuk kredibilitas bisnis Anda. Dilengkapi domain, hosting 1 tahun, dan integrasi WhatsApp.',
    priceRange: 'Rp 1.500.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20Website%20Perusahaan',
    packages: [
      {
        name: 'Website Pro',
        price: '1.500.000',
        recommended: true,
        features: {
          'Desain Profesional & Responsif': true,
          'Domain & Hosting 1 Tahun': true,
          'Integrasi WhatsApp & Maps': true,
          'Email Bisnis Profesional': true,
          'Maksimal 5 Halaman Utama': true,
        }
      }
    ],
    steps: [
      { title: 'Brief & Konsep', desc: 'Diskusi kebutuhan dan referensi desain website.', info: '1-2 Hari', icon: 'users' },
      { title: 'Desain Mockup', desc: 'Pembuatan tampilan visual halaman website.', info: '3-5 Hari', icon: 'brush' },
      { title: 'Development', desc: 'Coding website responsif dan integrasi fitur.', info: '3-5 Hari', icon: 'laptop' },
      { title: 'Review & Revisi', desc: 'Pengecekan dan perbaikan final.', info: '1-2 Hari', icon: 'refresh-cw' },
      { title: 'Go Live!', desc: 'Website online dan siap digunakan.', info: 'Selesai', icon: 'party-popper' }
    ]
  },
  {
    slug: 'jasa-desain-logo',
    prefix: 'Pembuatan',
    category: 'digital',
    duration: '3-5 Hari Kerja',
    title: 'Jasa Desain Logo',
    tagline: 'Identitas Visual Unik & Berkesan',
    heroDescription: 'Ciptakan logo profesional yang mencerminkan nilai bisnis Anda. Termasuk 3 opsi desain eksklusif dan file master lengkap.',
    priceRange: 'Rp 500.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20Desain%20Logo',
    packages: [
      {
        name: 'Logo Profesional',
        price: '500.000',
        recommended: true,
        features: {
          '3 Opsi Desain Eksklusif': true,
          'File Master (AI/EPS/PNG)': true,
          'Revisi Maksimal 3x': true,
          'Filosofi & Palet Warna': true,
        }
      }
    ],
    steps: [
      { title: 'Brief', desc: 'Diskusi konsep, warna, dan gaya logo.', info: '1 Hari', icon: 'users' },
      { title: 'Sketsa & Konsep', desc: 'Pembuatan 3 opsi desain awal.', info: '2-3 Hari', icon: 'brush' },
      { title: 'Revisi', desc: 'Perbaikan berdasarkan feedback.', info: '1 Hari', icon: 'refresh-cw' },
      { title: 'Finalisasi', desc: 'Penyerahan file master lengkap.', info: 'Selesai', icon: 'send' }
    ]
  },
  {
    slug: 'company-profile',
    prefix: 'Pembuatan',
    category: 'digital',
    duration: '5-7 Hari Kerja',
    title: 'Company Profile (E-Book)',
    tagline: 'Profil Perusahaan Profesional',
    heroDescription: 'Dokumen profil perusahaan yang persuasif dan menarik untuk keperluan presentasi, tender, atau pengajuan kerjasama.',
    priceRange: 'Rp 750.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20Company%20Profile',
    packages: [
      {
        name: 'Company Profile',
        price: '750.000',
        recommended: true,
        features: {
          'Desain Layout Profesional': true,
          'Copywriting Persuasif': true,
          'Format PDF Siap Cetak/Kirim': true,
          'Struktur Organisasi & Visi Misi': true,
        }
      }
    ],
    steps: [
      { title: 'Data Gathering', desc: 'Pengumpulan data dan materi perusahaan.', info: '1-2 Hari', icon: 'FolderOpen' },
      { title: 'Desain Layout', desc: 'Pembuatan tata letak dan konsep visual.', info: '2-3 Hari', icon: 'brush' },
      { title: 'Copywriting', desc: 'Penulisan konten persuasif.', info: '1-2 Hari', icon: 'file-text' },
      { title: 'Revisi & Final', desc: 'Perbaikan dan pengiriman file PDF.', info: 'Selesai', icon: 'send' }
    ]
  },
  {
    slug: 'jasa-desain-grafis',
    prefix: 'Pembuatan',
    category: 'digital',
    duration: '1-2 Hari Kerja',
    title: 'Jasa Desain Grafis',
    tagline: 'Konten Visual Cepat & Berkualitas',
    heroDescription: 'Layanan desain grafis untuk kebutuhan promosi digital: feed Instagram, banner, poster, dan lainnya.',
    priceRange: 'Mulai Rp 100.000',
    waMsg: 'Halo%20Silantara,%20saya%20tertarik%20dengan%20layanan%20Desain%20Grafis',
    packages: [
      {
        name: 'Desain Per Item',
        price: '100.000',
        recommended: true,
        features: {
          'Desain Konten Sosmed/Promosi': true,
          'Sesuai Ukuran (IG/FB/Banner)': true,
          'High Resolution File': true,
          'Pengerjaan Cepat (1-2 Hari)': true,
        }
      }
    ],
    steps: [
      { title: 'Brief', desc: 'Kirim materi dan konsep yang diinginkan.', info: 'Instant', icon: 'send' },
      { title: 'Desain', desc: 'Proses pembuatan desain.', info: '1 Hari', icon: 'brush' },
      { title: 'Revisi', desc: 'Revisi jika diperlukan.', info: '1 Hari', icon: 'refresh-cw' },
      { title: 'Delivery', desc: 'File desain siap digunakan.', info: 'Selesai', icon: 'check-circle' }
    ]
  },
];