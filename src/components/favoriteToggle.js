import React, { useState, useEffect } from "react";

const FavoriteToggle = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(productId));
  }, [productId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(productId);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(productId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite} style={{ display: 'inline-block' }}>
      {isFavorite ? 'UNLIKE' : 'LIKE'}
    </button>
  );
};

export default FavoriteToggle;