"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
  category: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("jebba_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart data:", e);
      }
    }
  }, []);

  // Save cart to localStorage on changes
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem("jebba_cart", JSON.stringify(items));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newItem.id && item.size === newItem.size
    );

    let updatedCart: CartItem[];

    if (existingItemIndex > -1) {
      updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart = [...cartItems, { ...newItem, quantity: 1 }];
    }

    saveCart(updatedCart);
    showToast(`Ajouté au panier: ${newItem.name} (Taille ${newItem.size})`);
  };

  const removeFromCart = (id: string, size: string) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === id && item.size === size)
    );
    saveCart(updatedCart);
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.size === size ? { ...item, quantity } : item
    );
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
