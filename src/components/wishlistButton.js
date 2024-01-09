import React, { useState, useEffect } from "react";
import { useWishlist } from '../context/wishlistContext.js';

const WishlistButton = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(productId));
  }, [productId]);

  const { updateWishlist } = useWishlist();

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(productId);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(productId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateWishlist(); 
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite} className={isFavorite ? 'unlike' : 'like'}>
      {isFavorite ? 'UNLIKE' : 'LIKE'}
    </button>
  );
};

export default WishlistButton;