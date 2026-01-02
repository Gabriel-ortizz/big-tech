'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextData {
  items: CartItem[];
  addToCart: (product: Product) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  total: number;
}

const CartContext = createContext<CartContextData | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Carregar do localStorage (client only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cart');
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, loaded]);

  const addToCart = (product: Product) => {
    setItems(prev => {
      const exists = prev.find(item => item.id === product.id);

      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increase = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id: number) => {
    setItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const remove = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clear = () => setItems([]);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increase,
        decrease,
        remove,
        clear,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }

  return context;
}
