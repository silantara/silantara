import React from 'react';

const WhatsAppFloat = () => {
  const phoneNumber = "62859106885925";
  const message = "Halo Silantara, saya ingin konsultasi mengenai legalitas bisnis saya.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Logo WA Base64 yang sudah saya ganti warnanya jadi putih (%23FFFFFF) 
  // agar terlihat jelas di atas background hijau.
  const waLogoBase64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xNi42IDE0Yy0uMi0uMS0xLjUtLjctMS43LS44Yy0uMi0uMS0uNC0uMS0uNi4xYy0uMi4yLS42LjgtLjggMWMtLjEuMi0uMy4yLS41LjFjLS43LS4zLTEuNC0uNy0yLTEuMmMtLjUtLjUtMS0xLjEtMS40LTEuN2MtLjEtLjIgMC0uNC4xLS41Yy4xLS4xLjItLjMuNC0uNGMuMS0uMS4yLS4zLjItLjRjLjEtLjEuMS0uMyAwLS40Yy0uMS0uMS0uNi0xLjMtLjgtMS44Yy0uMS0uNy0uMy0uNy0uNS0uN2gtLjVjLS4yIDAtLjUuMi0uNi4zYy0uNi42LS45IDEuMy0uOSAyLjFjLjEuOS40IDEuOCAxIDIuNmMxLjEgMS42IDIuNSAyLjkgNC4yIDMuN2MuNS4yLjkuNCAxLjQuNWMuNS4yIDEgLjIgMS42LjFjLjctLjEgMS4zLS42IDEuNy0xLjJjLjItLjQuMi0uOC4xLTEuMmwtLjQtLjJtMi41LTkuMUMxNS4yIDEgOC45IDEgNSA0LjljLTMuMiAzLjItMy44IDguMS0xLjYgMTJMMiAyMmw1LjMtMS40YzEuNS44IDMuMSAxLjIgNC43IDEuMmM1LjUgMCA5LjktNC40IDkuOS05LjljLjEtMi42LTEtNS4xLTIuOC03bS0yLjcgMTRjLTEuMy44LTIuOCAxLjMtNC40IDEuM2MtMS41IDAtMi45LS40LTQuMi0xLjFsLS4zLS4ybC0zLjEuOGwuOC0zbC0uMi0uM2MtMi40LTQtMS4yLTkgMi43LTExLjVTMTYuNiAzLjcgMTkgNy41YzIuNCAzLjkgMS4zIDktMi42IDExLjQiLz48L3N2Zz4=";

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-all group"
    >
      {/* Efek Ping */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
      
      {/* Logo WhatsApp dari Base64 */}
      <img 
        src={waLogoBase64} 
        alt="WhatsApp" 
        className="w-10 h-10 relative z-10" 
      />

      {/* Tooltip */}
      <span className="absolute right-20 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Konsultasi Gratis
      </span>
    </a>
  );
};

export default WhatsAppFloat;