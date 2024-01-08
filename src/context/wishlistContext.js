import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setWishlistCount(favorites.length);
  }, []);

  const updateWishlist = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setWishlistCount(favorites.length);
  };

  return (
    <WishlistContext.Provider value={{ wishlistCount, updateWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};