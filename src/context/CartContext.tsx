import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/Product";
import type { CartProduct } from "../types/CartContext";

type CartContextType = {
  cart: CartProduct[];
  isInCart: (id: number) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  total: number;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getProductQuantity: (id: number) => number;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const isInCart = (id: number) => {
    return cart.some((product) => product.id === id);
  };

  const getProductQuantity = (id: number) => {
    const product = cart.find((p) => p.id === id);
    return product?.quantity || 0;
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 0) + 1 } : p
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };
  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, (product.quantity || 1) - 1), 
            }
          : product
      )
    );
  };

  const total = cart.reduce((sum, product) => sum + product.price * (product.quantity || 0), 0);

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, isInCart, addToCart, removeFromCart, total, clearCart , increaseQuantity, decreaseQuantity, getProductQuantity}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
