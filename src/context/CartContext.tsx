import { createContext, useState, useContext, ReactNode } from "react";
import type { Product } from "../types/Product";

type CartContextType = {
  cart: Product[];
  isInCart: (id: number) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  total: number;
  clearCart:()=>void;
  increaseQuantify:(id:number)=>void;
  decreaseQuantify:(id:number)=>void;
  getProductQuantify:(id:number)=>number;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const isInCart = (id: number) => {
    return cart.some((product) => product.id === id);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      if (!prevCart.some((p) => p.id === product.id)) {
        return [...prevCart, product];
      }
      return prevCart;
    });
  };


  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);
  
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, isInCart, addToCart, removeFromCart, total, clearCart }}
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
