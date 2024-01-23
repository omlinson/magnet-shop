import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const newFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(newFavorites);
    setWishlistCount(newFavorites.length);
  }, []);

  const updateWishlist = () => {
    const newFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(newFavorites);
    setWishlistCount(newFavorites.length);
  };

  const [consentDefined, setConsentDefined] = useState(null);

  useEffect(() => {
    // Load consent state from localStorage
    const cookieConsent = localStorage.getItem('cookieConsent');
    setConsentDefined(cookieConsent);
  }, []);

  const handleConsentChange = (consent) => {
    setConsentDefined(consent);
    localStorage.setItem('cookieConsent', consent);
  };


  return (
    <WishlistContext.Provider value={{ wishlistCount, updateWishlist, favorites,consentDefined, handleConsentChange }}>
      {children}
    </WishlistContext.Provider>
  );
};