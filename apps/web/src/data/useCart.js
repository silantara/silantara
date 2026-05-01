import { useState, useEffect, useMemo, useCallback } from 'react';

/**
 * Custom Hook untuk Keranjang (Cart)
 * Bisa digunakan di semua halaman: LayananPage, KeranjangPage, dll
 */

const CART_STORAGE_KEY = 'silantara_cart';

// Fungsi helper untuk format harga
export const parsePrice = (priceString) => {
  if (!priceString) return 0;
  // Hapus "Mulai", "Rp", titik, spasi
  const cleaned = priceString
    .replace(/Mulai|Rp|\./gi, '')
    .replace(/\s+/g, '')
    .trim();
  return parseInt(cleaned) || 0;
};

export const formatPrice = (number) => {
  return `Rp ${number.toLocaleString('id-ID')}`;
};

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      return [];
    }
  });

  // Listen for cart updates from other pages
  useEffect(() => {
    const handleCartUpdate = () => {
      try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        if (saved) {
          setCart(JSON.parse(saved));
        }
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  // Save cart to localStorage whenever it changes
  const updateCartStorage = useCallback((newCart) => {
    setCart(newCart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    setCart(newCart);
    // ✅ Dispatch event untuk sinkronisasi
     window.dispatchEvent(new Event('cartUpdated'));
  
  console.log('✅ Cart updated:', newCart); // Debug
  return newCart;
}, [cart]);

  // Add item to cart (toggle: if exists, remove it)
  const addToCart = useCallback((item) => {
  const cartItem = {
    id: item.id || item.title || item.slug || Date.now().toString(),
    title: item.title || item.name || 'Layanan',
    price: item.price || item.priceRange || 'Rp 0',
    slug: item.slug || '',
    category: item.category || '',
  };

  const existingIndex = cart.findIndex(i => i.title === cartItem.title);
  let newCart;

  if (existingIndex > -1) {
    newCart = cart.filter(i => i.title !== cartItem.title);
  } else {
    newCart = [...cart, cartItem];
  }

    updateCartStorage(newCart);
    return newCart;
  }, [cart, updateCartStorage]);

  // Add item to cart (always add, don't toggle)
  const addToCartOnly = useCallback((item) => {
    const cartItem = {
      id: item.id || item.title || item.slug,
      title: item.title || item.name,
      price: item.price || item.priceRange,
      slug: item.slug || '',
      category: item.category || '',
    };

    const existingIndex = cart.findIndex(i => i.title === cartItem.title);
    
    if (existingIndex === -1) {
      const newCart = [...cart, cartItem];
      updateCartStorage(newCart);
      return newCart;
    }
    
    return cart;
  }, [cart, updateCartStorage]);

  // Remove specific item
  const removeFromCart = useCallback((title) => {
    const newCart = cart.filter(item => item.title !== title);
    updateCartStorage(newCart);
    return newCart;
  }, [cart, updateCartStorage]);

  // Remove by index
  const removeFromCartByIndex = useCallback((index) => {
    const newCart = cart.filter((_, i) => i !== index);
    updateCartStorage(newCart);
    return newCart;
  }, [cart, updateCartStorage]);

  // Clear cart
  const clearCart = useCallback(() => {
    updateCartStorage([]);
  }, [updateCartStorage]);

  // Check if item is in cart
  const isInCart = useCallback((title) => {
    return cart.some(item => item.title === title);
  }, [cart]);

  // Get cart count
  const cartCount = useMemo(() => cart.length, [cart]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => {
      return sum + parsePrice(item.price);
    }, 0);
  }, [cart]);

  // Generate WhatsApp message
  const generateWhatsAppMessage = useCallback((phoneNumber = '62859106885925') => {
    const message = `Halo Silantara! Saya ingin pesan layanan ini:\n\n` +
      cart.map(item => `• ${item.title}: ${item.price}`).join('\n') +
      `\n\nTotal Estimasi: ${formatPrice(totalPrice)}\n\nMohon info lengkap ya! 🙏`;
    
    return { message, url: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` };
  }, [cart, totalPrice]);

  // Open WhatsApp
  const openWhatsApp = useCallback((phoneNumber = '62859106885925') => {
    const { url } = generateWhatsAppMessage(phoneNumber);
    window.open(url, '_blank');
  }, [generateWhatsAppMessage]);

  return {
    // State
    cart,
    cartCount,
    totalPrice,
    
    // Actions
    addToCart,
    addToCartOnly,
    removeFromCart,
    removeFromCartByIndex,
    clearCart,
    isInCart,
    
    // Helpers
    generateWhatsAppMessage,
    openWhatsApp,
    formatPrice: (num) => formatPrice(num),
  };
}

export default useCart;