import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ArrowLeft, Calendar, User, MessageCircle, CheckCircle } from 'lucide-react';

function DetailArtikelPage() {
  const { id } = useParams();

  // BANK DATA ARTIKEL SILANTARA
  const dataArtikel = {
    // Ganti bagian 'panduan-lengkap-mendirikan-pt-di-indonesia-tahun-2026' dengan ini:

    'panduan-lengkap-mendirikan-pt-di-indonesia-tahun-2026': {
      title: "Panduan Lengkap Mendirikan PT di Indonesia Tahun 2026",
      content: (
        <div className="space-y-6">
          <p>Mendirikan Perseroan Terbatas (PT) di tahun 2026 kini jauh lebih efisien berkat sistem OSS RBA (Online Single Submission Risk-Based Approach) yang terintegrasi. PT tetap menjadi bentuk badan hukum terpopuler bagi pelaku usaha karena adanya pemisahan harta pribadi dan harta perusahaan yang jelas.</p>
          
          <h2 className="text-2xl font-bold text-blue-900 mt-8">Kenapa Memilih PT di Tahun 2026?</h2>
          <p>Selain kredibilitas yang tinggi di mata investor, PT memberikan perlindungan hukum yang maksimal. Jika terjadi risiko kerugian bisnis, tanggung jawab pemegang saham hanya sebatas modal yang disetorkan, sehingga aset pribadi Kamu tetap aman.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8">Syarat & Dokumen yang Diperlukan:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Data Pendiri:</strong> Minimal 2 orang (KTP & NPWP).</li>
            <li><strong>Nama Perusahaan:</strong> Harus unik dan terdiri dari 3 kata Bahasa Indonesia.</li>
            <li><strong>Modal Dasar:</strong> Menentukan skala usaha (Kecil, Menengah, atau Besar).</li>
            <li><strong>Alamat Usaha:</strong> Harus sesuai dengan zonasi peruntukan wilayah.</li>
            <li><strong>Klasifikasi Bisnis:</strong> Penentuan kode KBLI 2020 terbaru yang sesuai aktivitas usaha.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8">Alur Proses di Silantara:</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded">
              <p className="font-bold">1. Konsultasi & Cek Nama</p>
              <p className="text-sm">Kami membantu memastikan nama PT Kamu tersedia dan sesuai regulasi Kemenkumham.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded">
              <p className="font-bold">2. Penandatanganan Akta Notaris</p>
              <p className="text-sm">Pembuatan Anggaran Dasar perusahaan oleh Notaris rekanan resmi Silantara.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded">
              <p className="font-bold">3. Pengesahan Kemenkumham & NPWP</p>
              <p className="text-sm">Penerbitan SK resmi dan identitas pajak perusahaan.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded">
              <p className="font-bold">4. Aktivasi NIB di Sistem OSS</p>
              <p className="text-sm">Pengurusan Nomor Induk Berusaha agar operasional bisnis Kamu legal 100%.</p>
            </div>
          </div>

          <p className="mt-6">Silantara siap mengawal proses pendirian PT Kamu dari nol hingga tuntas dengan estimasi waktu hanya 5-7 hari kerja. Fokuslah pada pertumbuhan bisnis, urusan legalitas serahkan pada kami.</p>
        </div>
      )
    },
    'perbedaan-pt-dan-cv-mana-yang-tepat-untuk-bisnis-anda': {
      title: "Perbedaan PT dan CV: Mana yang Tepat untuk Bisnis Anda?",
      content: (
        <div className="space-y-8">
          <p className="text-lg">Memilih antara PT atau CV adalah keputusan strategis pertama yang harus Kamu ambil. Perbedaan paling mendasar bukan hanya soal biaya, tapi soal <strong>keamanan aset pribadi</strong> dan <strong>peluang masa depan bisnis</strong> Kamu.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" /> Perseroan Terbatas (PT)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Berstatus <strong>Badan Hukum</strong>. Artinya, PT adalah "subjek hukum" sendiri. Jika perusahaan memiliki masalah hutang, aset pribadi pemegang saham tidak bisa disita. Cocok untuk bisnis yang ingin skala besar, ekspor-impor, atau ikut tender pemerintah.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-slate-500" /> CV (Persekutuan Komanditer)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Bukan Badan Hukum</strong>. Pendiriannya lebih cepat dan murah, namun tidak ada pemisahan kekayaan yang tegas. Jika CV bangkrut, harta pribadi pemilik bisa ikut terseret untuk melunasi kewajiban perusahaan.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Tabel Perbandingan Detail</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm border">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 font-bold">Aspek Perbandingan</th>
                  <th className="p-4 font-bold">PT (Perseroan Terbatas)</th>
                  <th className="p-4 font-bold">CV (Commanditaire Vennootschap)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4 font-bold bg-slate-50">Status Hukum</td>
                  <td className="p-4">Badan Hukum Resmi</td>
                  <td className="p-4">Bukan Badan Hukum</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold bg-slate-50">Tanggung Jawab</td>
                  <td className="p-4">Terbatas (Hanya sebesar modal)</td>
                  <td className="p-4">Hingga ke harta pribadi</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold bg-slate-50">Kepemilikan</td>
                  <td className="p-4">Berdasarkan Saham</td>
                  <td className="p-4">Berdasarkan Sekutu Aktif & Pasif</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold bg-slate-50">Kredibilitas</td>
                  <td className="p-4">Sangat Tinggi (Bisa Tender Besar)</td>
                  <td className="p-4">Standar (Menengah ke Bawah)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Biaya Pendirian</td>
                  <td className="p-4">Lebih Tinggi</td>
                  <td className="p-4">Lebih Terjangkau</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-3xl mt-12">
            <h2 className="text-2xl font-bold mb-4">Jadi, Mana yang Lebih Baik?</h2>
            <div className="space-y-4">
              <p><strong>Pilih PT Jika:</strong> Kamu berencana mencari investor, membutuhkan perlindungan aset pribadi yang maksimal, atau ingin mengerjakan proyek-proyek besar dari pemerintah/perusahaan multinasional.</p>
              <p><strong>Pilih CV Jika:</strong> Bisnis Kamu masih skala UMKM, dikelola secara kekeluargaan, dan ingin legalitas yang cepat dengan budget yang lebih ekonomis.</p>
            </div>
          </div>

          <p className="italic text-gray-600 border-l-4 border-blue-600 pl-4 py-2">
            "Masih bingung menentukan pilihan? Tenang Kak, tim Silantara siap membantu menganalisis model bisnis Kamu agar pilihan legalitasnya tepat sasaran dan efisien."
          </p>
        </div>
      )
    },
    'cara-mengurus-nib-melalui-sistem-oss-terbaru': {
      title: "Cara Mengurus NIB Melalui Sistem OSS Terbaru 2026",
      content: (
        <div className="space-y-8">
          <p className="text-lg">Nomor Induk Berusaha (NIB) adalah identitas wajib bagi setiap pelaku usaha di Indonesia. Bayangkan NIB sebagai "KTP" untuk bisnis Kamu. Tanpa NIB, usaha Kamu tidak memiliki legalitas resmi dan akan sulit berkembang di mata hukum maupun perbankan.</p>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-amber-900 mb-2">Penting Diketahui!</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Di tahun 2026, sistem OSS RBA (Risk-Based Approach) membagi bisnis berdasarkan tingkat risiko. Jika salah memilih kode KBLI (Klasifikasi Bisnis), NIB Kamu bisa dianggap tidak valid dan menghambat proses izin lainnya seperti Sertifikasi Halal atau BPOM.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-10">Kenapa Kamu Wajib Punya NIB?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border rounded-xl hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <h4 className="font-bold mb-2">Legalitas Instan</h4>
              <p className="text-sm text-gray-600">Bisnis Kamu resmi terdaftar di database pemerintah dan diakui secara hukum.</p>
            </div>
            <div className="p-5 border rounded-xl hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <h4 className="font-bold mb-2">Akses Modal Bank</h4>
              <p className="text-sm text-gray-600">NIB adalah syarat utama untuk mengajukan KUR atau pinjaman modal usaha ke Bank.</p>
            </div>
            <div className="p-5 border rounded-xl hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <h4 className="font-bold mb-2">Bantuan Pemerintah</h4>
              <p className="text-sm text-gray-600">Hanya pelaku usaha ber-NIB yang bisa mendapatkan program bantuan atau hibah dari pemerintah.</p>
            </div>
            <div className="p-5 border rounded-xl hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <h4 className="font-bold mb-2">Syarat Izin Lanjutan</h4>
              <p className="text-sm text-gray-600">Wajib punya NIB dulu sebelum mengurus PIRT, BPOM, Halal, atau SNI.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-10">Langkah Mudah Mengurus NIB (Tanpa Ribet):</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-bold text-blue-900">Siapkan KTP & NPWP</p>
                <p className="text-sm text-gray-600">Pastikan NIK Kamu sudah sinkron dengan data Dukcapil.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-bold text-blue-900">Tentukan Kode KBLI yang Tepat</p>
                <p className="text-sm text-gray-600">Ini bagian tersulit! Salah pilih kode bisa berakibat fatal. Tim Silantara akan membantu riset kode yang paling pas buat bisnis Kamu.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-bold text-blue-900">Registrasi di Portal OSS</p>
                <p className="text-sm text-gray-600">Pendaftaran akun dan pengisian detail usaha secara online.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <p className="font-bold text-blue-900">NIB Terbit!</p>
                <p className="text-sm text-gray-600">Setelah semua data diverifikasi, NIB akan terbit dan bisa langsung Kamu gunakan.</p>
              </div>
            </li>
          </ol>

          <div className="bg-blue-50 p-6 rounded-2xl mt-10 border border-blue-100">
            <p className="text-blue-900 font-medium">
              <strong>Males ribet urus sendiri?</strong> Serahkan ke Silantara. Kamu tinggal kirim data lewat WhatsApp, kami yang kerjakan sampai NIB jadi. Cepat, tepat, dan anti ditolak!
            </p>
          </div>
        </div>
      )
    },
    'pentingnya-legalitas-bisnis-untuk-pertumbuhan-jangka-panjang': {
      title: "Pentingnya Legalitas Bisnis untuk Pertumbuhan Jangka Panjang",
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">Banyak pengusaha pemula menganggap legalitas hanyalah tumpukan kertas atau formalitas yang membuang biaya. Padahal, di tahun 2026 ini, <strong>legalitas adalah pondasi utama</strong>. Tanpa pondasi yang kuat, bisnis Kamu akan sulit untuk "naik kelas" dan rentan roboh saat menghadapi masalah hukum.</p>
          
          <h2 className="text-2xl font-bold text-blue-900 mt-10">Kenapa Legalitas Itu Investasi, Bukan Beban?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">Meningkatkan Kredibilitas & Kepercayaan</h3>
                <p className="text-sm text-gray-600">Calon investor, mitra besar, dan supplier lebih tenang bekerja sama dengan bisnis yang punya NIB dan Akta resmi. Legalitas membuktikan bahwa bisnis Kamu serius dan profesional.</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">Syarat Utama Ekspansi Bisnis</h3>
                <p className="text-sm text-gray-600">Mau buka rekening bank atas nama perusahaan? Mau ekspor barang ke luar negeri? Atau mau masuk ke rak minimarket modern? Semua pintu itu hanya bisa dibuka dengan kunci bernama legalitas.</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">Perlindungan Hukum & Nama Merek</h3>
                <p className="text-sm text-gray-600">Dengan legalitas yang jelas, Kamu bisa mendaftarkan Hak Kekayaan Intelektual (HAKI). Jangan sampai saat bisnis sudah besar, nama merek Kamu dicuri orang lain karena Kamu lupa mengurus legalitasnya.</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">4</div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">Akses Tender & Proyek Strategis</h3>
                <p className="text-sm text-gray-600">Banyak proyek pemerintah maupun swasta mensyaratkan dokumen legalitas yang lengkap. Tanpanya, Kamu akan kehilangan peluang emas untuk mendapatkan kontrak bernilai besar.</p>
              </div>
            </div>
          </div>

          <div className="my-10 p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2rem] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Tidur Lebih Nyenyak dengan Bisnis yang Taat Hukum</h3>
              <p className="text-gray-700 leading-relaxed">
                Bayangkan Kamu menjalankan usaha tanpa rasa khawatir akan razia atau teguran dari pihak berwenang. Dengan dokumen yang lengkap dari <strong>Silantara</strong>, Kamu bisa fokus penuh pada strategi penjualan dan pengembangan produk, sementara urusan "belakang layar" sudah aman terkendali.
              </p>
            </div>
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
          </div>

          <p className="text-center font-medium text-blue-600">
            "Jangan tunggu bisnis bermasalah baru mengurus legalitas. Mulailah dengan langkah yang benar bersama Silantara."
          </p>
        </div>
      )
    },
    'dokumen-penting-yang-harus-dimiliki-setiap-perusahaan': {
      title: "Dokumen Penting yang Harus Dimiliki Setiap Perusahaan",
      content: (
        <div className="space-y-8">
          <p className="text-lg">Memiliki administrasi hukum yang rapi bukan cuma soal patuh aturan, tapi soal kesiapan bisnis Kamu untuk menerima proyek besar. Berikut adalah "Checklist Wajib" dokumen yang harus ada di dalam map perusahaan Kamu:</p>
          
          <div className="space-y-4">
            <div className="p-5 bg-white border rounded-2xl shadow-sm hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> NIB (Nomor Induk Berusaha)
              </h3>
              <p className="text-sm text-gray-600">Ini adalah "KTP" bisnis Kamu. Satu nomor untuk semua urusan perizinan, berlaku sebagai TDP, API, dan akses kepabeanan.</p>
            </div>

            <div className="p-5 bg-white border rounded-2xl shadow-sm hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Akta Pendirian & SK Kemenkumham
              </h3>
              <p className="text-sm text-gray-600">Bukti lahirnya badan hukum (PT/CV/Yayasan). SK Kemenkumham adalah pengesahan resmi dari negara bahwa perusahaan Kamu sah secara hukum.</p>
            </div>

            <div className="p-5 bg-white border rounded-2xl shadow-sm hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> NPWP Badan Usaha
              </h3>
              <p className="text-sm text-gray-600">Identitas pajak perusahaan. Wajib punya untuk buka rekening bank atas nama PT/CV dan untuk transaksi dengan faktur pajak.</p>
            </div>

            <div className="p-5 bg-white border rounded-2xl shadow-sm hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> PKKPR (Izin Tata Ruang)
              </h3>
              <p className="text-sm text-gray-600">Konfirmasi bahwa lokasi usaha Kamu sudah sesuai dengan rencana tata ruang kota. Sangat penting agar usaha tidak digusur atau disegel.</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="text-sm text-blue-800 italic">
              *Catatan: Tim Silantara berfokus membantu Kamu mendapatkan dokumen dasar (Akta, SK, NPWP, hingga terbit NIB). Pastikan pondasi ini beres dulu sebelum melangkah ke izin operasional yang lebih rumit!
            </p>
          </div>
        </div>
      )
    },
    'perubahan-regulasi-perizinan-usaha-tahun-2026': {
      title: "Perubahan Regulasi Perizinan Usaha Tahun 2026",
      content: (
        <div className="space-y-8">
          <p className="text-lg">Dunia perizinan di tahun 2026 kini menggunakan sistem <strong>OSS RBA (Risk-Based Approach)</strong>. Artinya, perizinan dibedakan berdasarkan tingkat risiko bisnis Kamu. Semakin tinggi risikonya, semakin banyak syarat tambahannya.</p>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold text-blue-900 mb-3">1. Usaha Risiko Rendah</h3>
              <p className="text-gray-700">Kabar baik buat UMKM! Untuk risiko rendah, Kamu cukup memiliki <strong>NIB</strong> saja sebagai izin tunggal. Begitu NIB terbit, Kamu sudah bisa langsung jualan secara legal.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-blue-900 mb-3">2. Sertifikat Standar & PB UMKU</h3>
              <p className="text-gray-700 mb-4">Untuk usaha risiko Menengah atau Tinggi (seperti klinik, apotek, atau pabrik makanan), NIB saja tidak cukup. Kamu membutuhkan izin tambahan:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li><strong>Sertifikat Standar:</strong> Pernyataan bahwa usaha Kamu sudah memenuhi standar operasional tertentu.</li>
                <li><strong>PB UMKU:</strong> Perizinan Berusaha Untuk Menunjang Kegiatan Usaha (seperti izin edar BPOM, Sertifikasi Halal, atau izin angkut logistik).</li>
              </ul>
            </section>
          </div>

          <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-3xl mt-10">
            <h4 className="font-bold text-amber-900 mb-3">Penting untuk Dipahami Bersama:</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Layanan utama Silantara difokuskan untuk <strong>pendampingan hingga penerbitan NIB (Nomor Induk Berusaha)</strong>. Mengingat PB UMKU dan Sertifikat Standar memerlukan validasi teknis dari kementerian terkait (seperti cek lab, survei lapangan, atau sertifikasi khusus), maka pengurusan dokumen tersebut <strong>di luar paket dasar</strong> dan akan dikenakan biaya tambahan sesuai kerumitan masing-masing izin.
            </p>
            <p className="text-sm text-amber-900 mt-4 font-bold">Konsultasikan dulu dengan kami agar Kamu tahu izin mana yang benar-benar wajib diurus sekarang!</p>
          </div>
        </div>
      )
    },
    'tips-memilih-konsultan-hukum-bisnis-yang-tepat': {
      title: "Tips Memilih Konsultan Hukum Bisnis yang Tepat & Terpercaya",
      content: (
        <div className="space-y-8">
          <p className="text-lg">Menyerahkan urusan legalitas ke tangan yang salah bisa berakibat fatal—mulai dari izin yang ditolak, kode KBLI yang ngawur, hingga biaya yang membengkak di tengah jalan. Jangan sampai Kamu salah pilih! Berikut adalah tips memilih partner legalitas yang benar:</p>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-blue-600 rounded-lg text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">Paham Update Regulasi KBLI</h3>
                <p className="text-sm text-gray-600">Dunia perizinan itu dinamis. Pilih konsultan yang paham aturan KBLI terbaru. Salah pilih kode bisnis bisa membuat Kamu sulit mengurus izin operasional di kemudian hari. Di Silantara, kami riset mendalam dulu sebelum eksekusi.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-blue-600 rounded-lg text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">Transparansi Biaya Sejak Awal</h3>
                <p className="text-sm text-gray-600">Hati-hati dengan harga yang terlalu murah di depan tapi banyak "biaya siluman" di belakang. Konsultan yang baik akan merinci apa saja yang didapat dan apa yang di luar paket layanan secara jujur.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-blue-600 rounded-lg text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">Responsif & Mudah Dihubungi</h3>
                <p className="text-sm text-gray-600">Legalitas itu urusan penting yang seringkali butuh waktu cepat. Pastikan konsultan Kamu mudah diajak diskusi dan tidak "menghilang" setelah pembayaran dilakukan.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-blue-600 rounded-lg text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">Memberikan Solusi, Bukan Sekadar Jasa</h3>
                <p className="text-sm text-gray-600">Konsultan yang tepat akan bertanya dulu rencana bisnis Kamu 5 tahun ke depan, baru menyarankan bentuk badan usaha (PT atau CV) yang paling efisien untuk budget Kamu.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-[2rem] mt-10 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Kenapa Silantara Adalah Pilihan Tepat?</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Kami di <strong>Silantara</strong> memposisikan diri sebagai mitra tumbuh kembang bisnis Kamu. Kami tidak hanya menjual dokumen, tapi memberikan edukasi agar Kamu paham apa yang Kamu miliki.
              </p>
              <ul className="space-y-2 text-sm text-blue-200">
                <li className="flex items-center gap-2">• Konsultasi Gratis sebelum mulai</li>
                <li className="flex items-center gap-2">• Pendampingan pemilihan KBLI yang presisi</li>
                <li className="flex items-center gap-2">• Proses cepat, legal, dan aman 100%</li>
              </ul>
            </div>
          </div>

          <p className="italic text-center text-gray-500 mt-6">
            "Keamanan legalitas Kamu adalah prioritas kami. Mari bangun bisnis yang sehat bersama Silantara."
          </p>
        </div>
      )
    },
    'kesalahan-umum-dalam-pendirian-perusahaan-dan-cara-menghindarinya': {
      title: "Kesalahan Umum dalam Pendirian Perusahaan & Cara Menghindarinya",
      content: (
        <div className="space-y-8">
          <p className="text-lg">
            Banyak pengusaha terjebak dalam masalah legalitas yang rumit hanya karena kesalahan sepele di awal pendirian. 
            Alih-alih hemat, kesalahan ini justru sering berujung pada denda besar atau izin yang dibekukan. 
            Yuk, pelajari agar Kamu tidak mengalaminya!
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <span className="text-xl">❌</span> Salah Memilih Kode KBLI
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ini kesalahan paling umum. Kode KBLI menentukan apa yang boleh dan tidak boleh Kamu kerjakan. 
                Jika kodenya salah, Kamu tidak bisa mengurus izin operasional seperti BPOM atau Sertifikasi Halal. 
                <strong> Solusi:</strong> Konsultasikan aktivitas bisnis Kamu secara detail kepada Silantara sebelum mendaftarkan NIB.
              </p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <span className="text-xl">❌</span> Alamat Usaha Tidak Sesuai Zonasi
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Tidak semua lokasi bisa dijadikan tempat bisnis. Menggunakan alamat rumah di zona pemukiman murni untuk pabrik atau gudang besar seringkali ditolak oleh sistem PKKPR.
                <strong> Solusi:</strong> Pastikan zonasi lokasi usaha Kamu sudah sesuai dengan aturan tata ruang daerah setempat.
              </p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <span className="text-xl">❌</span> Masalah Pajak Pengurus
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Banyak yang lupa bahwa NPWP pengurus harus dalam status "Valid" agar NIB bisa terbit. Jika ada tunggakan pajak pribadi, proses legalitas perusahaan bisa terhambat total.
              </p>
            </div>

            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <span className="text-xl">❌</span> Nama PT yang Terlalu Umum
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Menggunakan nama yang sudah ada atau terlalu mirip dengan brand besar akan membuat pengajuan Akta ditolak oleh Kemenkumham.
                <strong> Solusi:</strong> Siapkan minimal 3 pilihan nama unik yang terdiri dari 3 kata dalam bahasa Indonesia.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mt-10">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Kenapa Risiko Ini Tidak Perlu Kamu Tanggung Sendiri?</h3>
            <p className="text-gray-700 mb-4">
              Mendirikan perusahaan itu seperti membangun rumah; jika pondasinya salah, seluruh bangunan terancam rubuh. Di <strong>Silantara</strong>, kami melakukan verifikasi berlapis sebelum mendaftarkan dokumen Kamu ke sistem negara.
            </p>
            <ul className="space-y-2 text-sm font-medium text-blue-800">
              <li>✅ Verifikasi Kode KBLI sesuai aktivitas riil</li>
              <li>✅ Pengecekan Nama Perusahaan di database Kemenkumham</li>
              <li>✅ Konsultasi Zonasi dan Tata Ruang</li>
              <li>✅ Pendampingan sampai NIB Terbit 100%</li>
            </ul>
          </div>

          <p className="text-center italic text-gray-500 mt-6">
            "Fokuslah pada pertumbuhan bisnis Kamu, biar Silantara yang menjaga keamanan legalitasnya."
          </p>
        </div>
      )
    },
    'daftar-merek-vs-operasional-mana-yang-harus-jadi-prioritas': {
    title: "Daftar Merek vs Operasional: Mana yang Harus Jadi Prioritas?",
    content: (
      <div className="space-y-8">
        <p className="text-lg">
          Banyak pengusaha pemula berpikir, "Jualan saja dulu, kalau sudah laku baru daftar merek." 
          Namun, tahukah Kamu bahwa di Indonesia berlaku sistem <strong>First to File</strong>? Siapa yang mendaftar duluan, dialah pemegang sah hak atas merek tersebut.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-amber-50 border-t-4 border-amber-500 rounded-b-2xl shadow-sm">
            <h3 className="font-bold text-amber-900 mb-2">Risiko Menunda</h3>
            <p className="text-sm text-gray-700">
              Nama bisnis yang sudah Kamu bangun dengan biaya iklan besar bisa "dicuri" orang lain secara legal hanya karena mereka mendaftar lebih dulu ke DJKI.
            </p>
          </div>
          <div className="p-6 bg-green-50 border-t-4 border-green-500 rounded-b-2xl shadow-sm">
            <h3 className="font-bold text-green-900 mb-2">Keuntungan Prioritas</h3>
            <p className="text-sm text-gray-700">
              Merek adalah aset tetap (intangible asset). Dengan sertifikat merek, bisnis Kamu memiliki nilai jual lebih tinggi di mata investor.[cite: 2]
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl">
          <h3 className="font-bold text-gray-900 mb-3">Strategi Silantara:</h3>
          <p className="text-gray-700 text-sm mb-4">
            Kami menyarankan Bapak/Ibu untuk melakukan <strong>Pengecekan Merek</strong> secara mendalam sebelum mencetak kemasan produk. Tim kami siap membantu verifikasi kelas barang dan potensi kemiripan secara manual agar lebih akurat.[cite: 2]
          </p>
          {/* Tombol diubah menjadi fungsi hubungiWA yang sudah Bapak buat di bawah */}
          <button 
            onClick={() => {
              const pesan = encodeURIComponent("Halo Silantara, saya ingin dibantu cek merek bisnis saya.");
              window.open(`https://wa.me/62859106885925?text=${pesan}`, '_blank');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition"
          >
            Konsultasi Merek via WhatsApp
          </button>
        </div>
      </div>
    )
    },
    'membangun-bisnis-di-atas-pasir-bahaya-mengabaikan-legalitas': {
      title: "Membangun Bisnis di Atas Pasir: Bahaya Mengabaikan Legalitas",
      content: (
        <div className="space-y-8">
          <p className="text-lg">
            Banyak pengusaha merasa bahwa legalitas hanyalah soal formalitas dokumen di atas kertas. 
            Padahal, legalitas adalah fondasi utama agar operasional bisnis tidak terhenti di tengah jalan saat sedang tumbuh besar. 
            Menjalankan usaha tanpa izin yang lengkap ibarat membangun gedung mewah di atas pasir—sangat rapuh dan berisiko runtuh kapan saja.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <span className="text-xl">⚠️</span> Risiko Sanksi & Penutupan
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Tanpa NIB atau izin lokasi yang sesuai, bisnis Bapak/Ibu berisiko terkena sanksi administratif hingga penutupan paksa oleh pihak berwenang.
              </p>
            </div>

            <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <span className="text-xl">🛑</span> Terhambatnya Skala Bisnis
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bisnis yang tidak legal akan sulit menjalin kerja sama dengan perusahaan besar (B2B) atau mengikuti tender pemerintah yang mewajibkan dokumen resmi.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Mengapa Legalitas Itu Investasi?</h3>
            <p className="text-gray-700">
              Legalitas memberikan kepastian hukum dan perlindungan bagi aset pribadi Bapak/Ibu, terutama jika menggunakan badan usaha seperti PT. 
              Dengan legalitas yang rapi, kepercayaan konsumen dan mitra bisnis pun akan meningkat secara otomatis.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mt-10">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Solusi Cerdas dari Silantara</h3>
            <p className="text-gray-700 mb-4">
              Bapak/Ibu tidak perlu pusing memikirkan birokrasi yang rumit. 
              Tim ahli kami siap mendampingi proses pendirian badan usaha secara profesional:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-blue-800">
              <li>✅ Pengurusan NIB & Izin Usaha Terintegrasi</li>
              <li>✅ Pendirian PT, CV, hingga Yayasan</li>
              <li>✅ Audit Kepatuhan Dokumen Hukum</li>
              <li>✅ Konsultasi Zonasi Lokasi Usaha</li>
            </ul>
          </div>

          <p className="text-center italic text-gray-500 mt-6">
            "Jangan biarkan kerja keras Anda hilang dalam sekejap karena kelalaian legalitas. Mari bangun fondasi yang kokoh bersama Silantara."
          </p>
        </div>
      )
    },
    '5-ide-bisnis-menjanjikan-di-2026-dengan-kebutuhan-legalitas-khusus': {
    title: "5 Ide Bisnis Menjanjikan di 2026 dengan Kebutuhan Legalitas Khusus",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          Tahun 2026 membawa pergeseran besar dalam lanskap ekonomi Indonesia. Munculnya teknologi AI yang semakin matang dan kesadaran lingkungan yang tinggi menciptakan peluang bisnis baru. Namun, peluang besar selalu dibarengi dengan regulasi yang lebih ketat. 
          <strong> Silantara</strong> merangkum 5 sektor bisnis masa depan beserta rambu-rambu legalitas yang wajib Anda siapkan.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {/* Ide 1 */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-3">
              <span className="bg-blue-100 p-2 rounded-lg">01</span> Agensi Konsultan Berbasis AI
            </h3>
            <p className="text-gray-700 mb-4">
              Bukan sekadar agensi konten biasa, agensi ini menawarkan otomatisasi alur kerja perusahaan menggunakan kecerdasan buatan.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl text-sm">
              <p className="font-semibold text-slate-900 mb-2">Tantangan Legalitas:</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Pemilihan <strong>KBLI Aktivitas Konsultasi Komputer (6202)</strong> atau <strong>Aktivitas Pemrograman Komputer (6201)</strong> yang tepat agar bisa mengikuti tender pengadaan barang/jasa pemerintah.</li>
                <li>Penyusunan Perjanjian Kerahasiaan (NDA) yang kuat terkait penggunaan data klien dalam model AI.</li>
              </ul>
            </div>
          </div>

          {/* Ide 2 */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-3">
              <span className="bg-green-100 p-2 rounded-lg">02</span> Layanan Pengolahan Limbah & Ekonomi Sirkular
            </h3>
            <p className="text-gray-700 mb-4">
              Bisnis yang mengubah limbah rumah tangga atau industri menjadi produk bernilai ekonomi tinggi (upcycling).
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl text-sm">
              <p className="font-semibold text-slate-900 mb-2">Tantangan Legalitas:</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Wajib memiliki <strong>Izin Lingkungan (SPPL atau UKL-UPL)</strong> yang disetujui sistem OSS.</li>
                <li>Izin khusus pengangkutan dan pengelolaan limbah jika menangani material kategori B3.</li>
              </ul>
            </div>
          </div>

          {/* Ide 3 */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-amber-600 mb-4 flex items-center gap-3">
              <span className="bg-amber-100 p-2 rounded-lg">03</span> Cloud Kitchen & Produksi Makanan Sehat
            </h3>
            <p className="text-gray-700 mb-4">
              Tren katering sehat berlangganan tanpa outlet fisik (delivery only) yang semakin diminati pekerja urban.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl text-sm">
              <p className="font-semibold text-slate-900 mb-2">Tantangan Legalitas:</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Pemenuhan standar <strong>PIRT</strong> untuk skala rumah tangga atau <strong>Izin MD BPOM</strong> untuk skala industri.</li>
                <li>Kewajiban <strong>Sertifikasi Halal</strong> yang kini menjadi syarat mutlak peredaran produk makanan di Indonesia.</li>
              </ul>
            </div>
          </div>

          {/* Ide 4 */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-3">
              <span className="bg-purple-100 p-2 rounded-lg">04</span> EduTech & Kursus Keterampilan Digital
            </h3>
            <p className="text-gray-700 mb-4">
              Platform kursus online yang spesifik mengajarkan keterampilan yang tidak ada di sekolah formal.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl text-sm">
              <p className="font-semibold text-slate-900 mb-2">Tantangan Legalitas:</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Izin LPK (Lembaga Pelatihan Kerja) dari Dinas Tenaga Kerja setempat.</li>
                <li>Pendaftaran HAKI (Hak Kekayaan Intelektual) atas materi kurikulum agar tidak dibajak kompetitor.</li>
              </ul>
            </div>
          </div>

          {/* Ide 5 */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-3">
              <span className="bg-red-100 p-2 rounded-lg">05</span> Micro-Influencer & Content Creation Agency
            </h3>
            <p className="text-gray-700 mb-4">
              Membangun badan hukum untuk para kreator agar bisa bekerja sama secara profesional dengan brand besar atau instansi pemerintah.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl text-sm">
              <p className="font-semibold text-slate-900 mb-2">Tantangan Legalitas:</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Legalitas badan usaha (PT/CV) sangat krusial untuk urusan perpajakan dan kontrak legal dengan nilai besar.</li>
                <li>KBLI Aktivitas Kantor Berita atau Periklanan yang sesuai.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] mt-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Kesimpulan: Jangan Mulai Tanpa Fondasi</h3>
            <p className="text-blue-100 mb-6">
              Memiliki ide bisnis brilian hanyalah 50% dari perjalanan. 50% sisanya adalah memastikan bisnis tersebut aman secara hukum agar Anda bisa tidur nyenyak saat bisnis mulai tumbuh besar.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/62859106885925?text=Halo%20Silantara%2C%20saya%20tertarik%20konsultasi%20mengenai%20bisnis%20masa%20depan.', '_blank')}
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              Konsultasi Legalitas Bisnis Anda Gratis
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        </div>
      </div>
    )
    },
      'meningkatkan-kepercayaan-konsumen-melalui-izin-resmi-di-landing-page': {
    title: "Meningkatkan Kepercayaan Konsumen melalui Izin Resmi di Landing Page",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          Pernahkah Kamu membatalkan pesanan di sebuah website hanya karena merasa "ragu" apakah produknya aman? Dalam dunia digital, <strong>Trust (Kepercayaan)</strong> adalah mata uang utama. Tanpa tatap muka, konsumen hanya bisa menilai bisnis Kamu dari apa yang mereka lihat di layar. 
          Menampilkan logo NIB, PIRT, atau sertifikasi Halal bukan sekadar formalitas, melainkan strategi <em>Psychological Trigger</em> untuk mempercepat keputusan pembeli.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">1</span>
              Efek Otoritas dalam Penjualan
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Secara psikologis, manusia cenderung lebih percaya pada entitas yang memiliki "pengakuan" dari pihak ketiga yang lebih tinggi (dalam hal ini, Pemerintah). Saat calon pembeli melihat nomor NIB atau izin edar di <em>footer</em> landing page Kamu, otak mereka secara otomatis mengkategorikan bisnis Kamu sebagai <strong>"Aman & Terverifikasi"</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">2</span>
              Menghilangkan "Buyer's Remorse"
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ketakutan terbesar pembeli online adalah tertipu atau mendapatkan produk yang membahayakan kesehatan. Izin resmi seperti PIRT untuk makanan atau Izin Edar untuk kosmetik berfungsi sebagai jaminan kualitas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="font-bold text-blue-900 mb-1">Sebelum Ada Izin:</p>
                <p className="text-sm text-blue-700">"Barangnya bagus, tapi aman gak ya kalau dikonsumsi anak-anak?"</p>
              </div>
              <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                <p className="font-bold text-green-900 mb-1">Sesudah Ada Izin:</p>
                <p className="text-sm text-green-700">"Sudah ada izin resminya, langsung pesan sekarang!"</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">3</span>
              Meningkatkan Conversion Rate (CR)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Data internal kami menunjukkan bahwa landing page yang mencantumkan legalitas secara jelas memiliki tingkat konversi hingga 40% lebih tinggi dibanding yang tidak. Konsumen tidak butuh waktu lama untuk berpikir (<em>overthinking</em>) karena keraguan teknis sudah dijawab oleh kehadiran logo izin resmi.
            </p>
          </section>
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white">
          <h4 className="text-xl font-bold mb-4 italic">Tips Dari Tim Silantara:</h4>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">●</span>
              Jangan sembunyikan legalitas di halaman "Tentang Kami" saja. Letakkan di dekat tombol <strong>Add to Cart</strong> atau di bagian bawah landing page.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">●</span>
              Pastikan NIB Kamu sesuai dengan <strong>KBLI</strong> produk yang Kamu jual agar tidak terjadi masalah saat ada audit.
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              onClick={() => window.open('https://wa.me/62859106885925?text=Halo%20Silantara%2C%20saya%20ingin%20mengurus%20izin%20agar%20landing%20page%20saya%20lebih%20dipercaya.', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50"
            >
              Urus Izin Bisnis Sekarang
            </button>
          </div>
        </div>
      </div>
    )
    },
        'kenapa-investor-hanya-melirik-bisnis-yang-bersih-secara-hukum': {
    title: "Kenapa Investor Hanya Melirik Bisnis yang Bersih Secara Hukum?",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          Banyak pemilik bisnis fokus 100% pada produk dan pemasaran, namun lupa bahwa investor tidak hanya membeli "ide", mereka membeli <strong>"aset yang aman"</strong>. Dalam tahap <em>Due Diligence</em> (pemeriksaan mendalam), ketidakteraturan dokumen legalitas adalah alasan nomor satu mengapa suntikan modal dibatalkan di menit-menit terakhir.
        </p>

        <div className="space-y-10">
          {/* Poin 1 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">1</span>
              Legalitas Adalah Mitigasi Risiko
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Investor sangat menghindari risiko hukum. Jika sebuah bisnis belum memiliki NIB yang sesuai, Akta Pendirian yang sah, atau izin lokasi yang benar, investor melihatnya sebagai potensi masalah hukum di masa depan yang bisa membakar uang mereka. Bisnis yang bersih secara hukum menunjukkan bahwa pendirinya memiliki manajemen risiko yang baik.
            </p>
          </section>

          {/* Poin 2 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">2</span>
              Struktur Kepemilikan yang Jelas
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tanpa Akta Pendirian dan pengesahan Kemenkumham, pembagian saham hanyalah "janji di atas kertas". Investor membutuhkan kepastian hukum mengenai berapa persen kepemilikan yang mereka dapatkan secara resmi untuk melindungi hak suara dan bagi hasil mereka.
            </p>
          </section>

          {/* Poin 3 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">3</span>
              Kesiapan Skalabilitas (Scale-up)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Bisnis yang ingin ekspansi ke pasar internasional atau melakukan IPO (melantai di bursa saham) wajib memiliki rekam jejak legalitas yang sempurna sejak awal. Memperbaiki dokumen legalitas yang "berantakan" di tengah jalan jauh lebih mahal dan memakan waktu daripada membangunnya dengan benar sejak hari pertama.
            </p>
          </section>
        </div>

        <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-r-3xl my-10">
          <h4 className="text-xl font-bold text-amber-900 mb-2">Peringatan Untuk Startup:</h4>
          <p className="text-amber-800 italic leading-relaxed">
            "Jangan biarkan kerja keras Kamu membangun produk selama bertahun-tahun sia-sia hanya karena masalah sepele seperti NPWP pengurus yang tidak valid atau kode KBLI yang tidak sinkron."
          </p>
        </div>

        {/* Call to Action */}
        <div className="p-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] text-white text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Siapkan Bisnis Kamu Menjemput Investasi</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Tim Silantara siap membantu merapikan seluruh dokumen legalitas perusahaan Bapak/Ibu, mulai dari verifikasi KBLI hingga pendampingan izin operasional agar bisnis Bapak/Ibu layak di mata investor.
          </p>
          <button 
            onClick={() => {
              const pesan = encodeURIComponent("Halo Silantara, saya ingin merapikan legalitas bisnis saya agar siap menerima pendanaan/investor.");
              window.open(`https://wa.me/62859106885925?text=${pesan}`, '_blank');
            }}
            className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Konsultasi Persiapan Pendanaan
          </button>
        </div>
      </div>
    )
    },
      'mending-jalan-tanpa-merek-atau-daftar-dulu-ini-jawaban-pakarnya': {
    title: "Mending Jalan Tanpa Merek atau Daftar Dulu? Ini Jawaban Pakarnya",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          "Nama bisnis saya sudah dipakai orang lain!" Ini adalah jeritan hati yang paling sering kami dengar di Silantara. Banyak pengusaha merasa merek bisa diurus nanti kalau sudah besar, padahal di Indonesia, hukum tidak memihak siapa yang memakai nama lebih dulu, melainkan siapa yang <strong>mendaftarkan</strong> lebih dulu (<em>First to File</em>).
        </p>

        <div className="space-y-10">
          {/* Kasus Nyata */}
          <section className="p-8 bg-slate-50 rounded-3xl border-l-8 border-blue-600">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Bedah Kasus: Tragedi Rebranding Paksa</h3>
            <p className="text-gray-700 leading-relaxed italic">
              Bayangkan Anda sudah menghabiskan ratusan juta untuk neon box, kemasan produk, dan iklan media sosial selama 3 tahun. Tiba-tiba, Anda menerima surat somasi karena nama tersebut sudah dimiliki orang lain secara sah di DJKI. Anda dipaksa mengganti nama (rebranding) dan kehilangan seluruh reputasi yang sudah dibangun. Biaya rebranding jauh lebih mahal daripada biaya pendaftaran merek di awal.
            </p>
          </section>

          {/* Manfaat Utama */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <h4 className="font-bold text-blue-600 mb-2">Perlindungan Hukum 10 Tahun</h4>
              <p className="text-sm text-gray-600">Sertifikat merek memberikan Anda hak eksklusif untuk menggunakan nama tersebut dan melarang orang lain menggunakan nama yang mirip di kelas bisnis yang sama.</p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <h4 className="font-bold text-blue-600 mb-2">Aset yang Bisa Diwariskan</h4>
              <p className="text-sm text-gray-600">Merek adalah properti intelektual. Anda bisa menjualnya, mewariskannya, atau menjadikannya objek waralaba (franchise) yang menghasilkan royalti.</p>
            </div>
          </div>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Kenapa Harus Lewat Silantara?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pendaftaran merek bukan sekadar mengisi formulir. Risiko ditolak sangat tinggi jika Anda tidak melakukan pengecekan mendalam terhadap kemiripan fonetik (bunyi) dan visual dengan merek yang sudah ada.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2">✅ Analisis Kelas Barang/Jasa yang Tepat</li>
              <li className="flex items-center gap-2">✅ Pengecekan Kemiripan Nama & Logo</li>
              <li className="flex items-center gap-2">✅ Pendampingan Jika Ada Sanggahan</li>
              <li className="flex items-center gap-2">✅ Monitoring Sampai Sertifikat Terbit</li>
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-10 bg-blue-600 rounded-[3rem] text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Jangan Tunggu Disomasi Baru Bertindak!</h3>
            <p className="text-blue-100 mb-8 max-w-2xl">
              Lindungi identitas bisnis Anda sekarang juga. Investasi pendaftaran merek adalah biaya termurah untuk mengamankan masa depan usaha Anda.
            </p>
            <button 
              onClick={() => {
                const pesan = encodeURIComponent("Halo Silantara, saya ingin segera mendaftarkan merek bisnis saya agar aman dari sengketa.");
                window.open(`https://wa.me/62859106885925?text=${pesan}`, '_blank');
              }}
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              Daftarkan Merek Saya Sekarang
            </button>
          </div>
          {/* Dekorasi Elemen */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Ditulis oleh: <strong>Mohamad Lutvi</strong> | CEO Silantara
        </p>
      </div>
    )
    },
      'transformasi-nib-menjadi-identitas-bisnis-tunggal-di-tahun-2026': {
    title: "Transformasi NIB Menjadi Identitas Bisnis Tunggal di Tahun 2026",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          Memasuki tahun 2026, Nomor Induk Berusaha (NIB) bukan lagi sekadar formalitas pendaftaran usaha. NIB telah resmi menjadi <strong>Identitas Bisnis Tunggal</strong> yang mengintegrasikan berbagai fungsi perizinan dalam satu nomor sakti. Jika bisnis Kamu belum memiliki NIB yang terupdate, Kamu mungkin kehilangan akses ke berbagai fasilitas negara yang sangat menguntungkan.
        </p>

        <div className="space-y-10">
          {/* Manfaat 1 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">1</span>
              Akses Langsung ke Kepabeanan (Ekspor-Impor)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dulu, pengusaha harus mengurus Angka Pengenal Importir (API) secara terpisah. Kini, NIB Bapak/Ibu otomatis berlaku sebagai API dan Akses Kepabeanan. Ini memangkas birokrasi berbulan-bulan menjadi hanya hitungan menit, memungkinkan bisnis lokal untuk langsung "go international" tanpa hambatan dokumen.
            </p>
          </section>

          {/* Manfaat 2 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">2</span>
              Integrasi Sertifikasi Halal & SNI Bina-Umer
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Bagi pelaku usaha mikro dan kecil (UMK) dengan risiko rendah, NIB kini berfungsi sebagai <strong>perizinan tunggal</strong> yang mencakup izin usaha, SNI Bina-Umer, dan pernyataan mandiri sertifikasi halal. Ini adalah jalur hijau bagi produk Bapak/Ibu untuk bisa masuk ke rak-rak ritel modern dengan legalitas lengkap.
            </p>
          </section>

          {/* Manfaat 3 */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">3</span>
              Syarat Mutlak Perbankan & Tender
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Di tahun 2026, institusi keuangan mewajibkan NIB berbasis risiko sebagai syarat verifikasi profil nasabah bisnis. Tanpa NIB yang valid dan sinkron dengan KBLI terbaru, pengajuan pinjaman modal atau keikutsertaan dalam tender pengadaan barang/jasa pemerintah akan otomatis tertolak oleh sistem.
            </p>
          </section>
        </div>

        <div className="bg-blue-50 border-2 border-dashed border-blue-200 p-8 rounded-3xl my-10">
          <h4 className="text-xl font-bold text-blue-900 mb-3">Checklist NIB Bapak/Ibu:</h4>
          <ul className="space-y-2 text-blue-800 font-medium">
            <li>✅ Apakah Kode KBLI sudah sesuai dengan aturan terbaru 2026?</li>
            <li>✅ Apakah status NPWP Pengurus sudah tervalidasi di sistem OSS?</li>
            <li>✅ Apakah lokasi usaha sudah sesuai dengan RDTR (tata ruang) terbaru?</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">Jangan Biarkan Bisnis Kamu Tertinggal!</h3>
            <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
              Banyak pengusaha memiliki NIB, tapi isinya tidak valid atau tidak sesuai dengan aktivitas riil di lapangan. Tim <strong>Silantara</strong> siap melakukan audit legalitas dan membantu Bapak/Ibu menerbitkan NIB yang 100% aman dan fungsional.
            </p>
            <Link to="/layanan/nib">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
              >
                Lihat Detail Layanan NIB
              </button>
            </Link>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <p className="text-center italic text-slate-500 mt-6">
          "Fokuslah pada ekspansi pasar, urusan birokrasi NIB biar Silantara yang tangani."
        </p>
      </div>
    )
    },
  };

  // --- LOGIKA NAVIGASI (Tambahkan ini) ---
  const keys = Object.keys(dataArtikel);
  const currentIndex = keys.indexOf(id);
  const prevId = keys[currentIndex - 1];
  const nextId = keys[currentIndex + 1];

  const artikel = dataArtikel[id] || { 
    title: "Detail Artikel", 
    content: <p>Kami sedang menyiapkan materi terbaik untuk membantu kebutuhan legalitas Kamu.</p> 
  };

  const hubungiWA = () => {
    const pesan = `Halo Silantara, saya ingin konsultasi mengenai: ${artikel.title}`;
    window.open(`https://wa.me/62859106885925?text=${encodeURIComponent(pesan)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/artikel" className="inline-flex items-center gap-2 text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Artikel
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-blue-900 leading-tight">
          {artikel.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-400 mb-10 pb-6 border-b">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2026</span>
          <span className="flex items-center gap-1"><User className="w-4 h-4" /> Tim Ahli Silantara</span>
        </div>

        <div className="text-gray-700 leading-relaxed text-lg mb-20">
          {artikel.content}
        </div>

        {/* --- TOMBOL NAVIGASI --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 pt-10 border-t">
          {prevId ? (
            <Link to={`/artikel/${prevId}`} className="group p-6 border rounded-2xl hover:border-blue-600 transition-all hover:bg-blue-50 text-left">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Sebelumnya</span>
              <div className="flex items-center gap-2 mt-2 text-blue-900 font-bold group-hover:text-blue-700">
                <ArrowLeft className="w-4 h-4" /> {dataArtikel[prevId].title}
              </div>
            </Link>
          ) : <div />}

          {nextId ? (
            <Link to={`/artikel/${nextId}`} className="group p-6 border rounded-2xl hover:border-blue-600 transition-all hover:bg-blue-50 text-right">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Selanjutnya</span>
              <div className="flex items-center gap-2 mt-2 text-blue-900 font-bold justify-end group-hover:text-blue-700">
                {dataArtikel[nextId].title} <ArrowLeft className="w-4 h-4 rotate-180" />
              </div>
            </Link>
          ) : <div />}
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-10 rounded-[2rem] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Butuh Jasa atau Konsultasi?</h2>
            <p className="text-blue-100 text-lg">Konsultasikan kebutuhan legalitas bisnis Kamu sekarang, gratis!</p>
          </div>
          <button 
            onClick={hubungiWA}
            className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-7 h-7" />
            Tanya Admin via WA
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailArtikelPage;