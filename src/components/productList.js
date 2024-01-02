import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css"; // Adjust the import path as needed

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .trim();                  // Trim - from start and end of text
};

const ImageGallery = ({ products, imageMap }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (product) => {
    const updatedFavorites = [...favorites];
    const productIndex = updatedFavorites.indexOf(product.sKU);

    if (productIndex > -1) {
      updatedFavorites.splice(productIndex, 1);
    } else {
      updatedFavorites.push(product.sKU);
    }

    setFavorites(updatedFavorites); // Update state
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update local storage
  };

  const isFavorite = (product) => {
    return favorites.includes(product.sKU);
  };

  return (
    <div className={styles.imageGallery}>
    {products.map((product, index) => {
      const imageData = imageMap.get(product.image);
      const slug = product.name ? slugify(product.name) : '#';
      const favoriteStatus = isFavorite(product) ? 'Unlike' : 'Like';
      return (
        <div key={index} style={{ position: 'relative' }} className={styles.productItem}>
          <Link to={product.name ? `/fridge-magnets/${slug}` : '#'}>
            {imageData && (
              <GatsbyImage
              className={styles.productImage}
                image={getImage(imageData.gatsbyImageData)}
                alt={`Fridge Magnet ${product.name}`}
              />
            )}
          </Link>
          {product.availability !== "in stock" && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)',
              color: 'white',
              padding: '10px',
              textAlign: 'center',
              textTransform: 'uppercase'
            }}>
              {product.availability}
            </div>
          )}
          <button onClick={() => toggleFavorite(product)} style={{ marginTop: '10px' }}>
          {favoriteStatus}
          </button>
        </div>
      );
    })}
  </div>
);
};

export default ImageGallery;