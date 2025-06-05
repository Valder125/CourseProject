// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
  setCartItems((prev) => {
    const indexToRemove = prev.findIndex((item) => item.id === id);
    if (indexToRemove === -1) return prev;
    const updated = [...prev];
    updated.splice(indexToRemove, 1);
    return updated;
  });
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
