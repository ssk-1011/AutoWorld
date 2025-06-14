'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    // Calculate total
    const newTotal = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return sum + price;
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      // Check if item already exists in cart
      const exists = prevCart.find(cartItem => 
        cartItem.id === item.id && cartItem.type === item.type
      );
      
      if (exists) {
        return prevCart; // Item already in cart
      }
      
      return [...prevCart, item];
    });
  };

  const removeFromCart = (itemId, type) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === itemId && item.type === type))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      total, 
      addToCart, 
      removeFromCart, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 