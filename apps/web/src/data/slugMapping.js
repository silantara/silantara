/**
 * Mapping dari title di services2.js ke slug di services.js
 * Digunakan untuk link "Selengkapnya" di LayananPage
 */

export const titleToSlugMap = {
  // PT Perorangan
  'PT Perorangan LENGKAP': 'pt-perorangan',
  'PT Perorangan Lite': 'pt-perorangan',
  
  // PT Perseroan
  'PT Perseroan LENGKAP': 'pt-perseroan',
  'PT Perseroan LITE': 'pt-perseroan',
  
  // CV
  'CV LENGKAP': 'cv',
  'CV LITE': 'cv',
  
  // Yayasan
  'Yayasan LENGKAP': 'yayasan',
  'Yayasan Lite': 'yayasan',
  
  // Izin Dasar
  'NIB Perorangan': 'nib',
  'PIRT Lengkap': 'pirt',
  'HAKI / Merek': 'merek',
  
  // Pajak
  'Pembuatan NPWP Baru': 'npwp-pribadi',
  'NPWP Badan Usaha': 'npwp-badan',
  'SPT Tahunan Pribadi': 'spt-tahunan-pribadi',
  'SPT Tahunan Badan': 'spt-tahunan-badan',
  'Aktivasi PKP': 'aktivasi-pkp',
  'Revive Akun Coretax': 'revive-coretax',
  
  // Digital (fallback ke modal quick view)
  'Website Perusahaan': 'website-perusahaan',
  'Jasa Desain Logo': 'jasa-desain-logo',
  'Company Profile (E-Book)': 'company-profile',
  'Jasa Desain Grafis': 'jasa-desain-grafis',
};

/**
 * Fungsi untuk mendapatkan slug dari item services2
 */
export function getServiceSlug(item) {
  // Cek dari mapping berdasarkan title
  if (titleToSlugMap[item.title]) {
    return titleToSlugMap[item.title];
  }
  
  // Jika tidak ada, gunakan category sebagai fallback
  return item.category || null;
}