import React, { useEffect, useState } from 'react';
import ProductItem from './productItem';
import * as styles from "./product.module.css"; 

const ProductList = ({ products, imageMap, qty, showWishlistButton }) => {
  // Removed the defaulting logic to rely solely on props

  const [displayProducts, setDisplayProducts] = useState(products);

  useEffect(() => {
    if (qty && qty < products.length) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setDisplayProducts(shuffled.slice(0, qty));
    } else {
      setDisplayProducts(products);
    }
  }, [products, qty]);

  return (
    <div className={styles.imageGallery}>
      {displayProducts.map((product, index) => (
        <ProductItem
          key={index} 
          product={product}
          imageMap={imageMap} // Directly using the provided imageMap prop
          showWishlistButton={showWishlistButton}
        />
      ))}
    </div>
  );
};

export default ProductList;
