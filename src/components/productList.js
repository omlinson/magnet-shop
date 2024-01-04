import React from 'react';
import ProductItem from './productItem';
import * as styles from "./product.module.css"; 

const ProductList = ({ products, imageMap }) => {
  
  return (
    <div className={styles.imageGallery}>
      {products.map((product, index) => (
        <ProductItem
          product={product}
          imageMap={imageMap}
        />
      ))}
    </div>
  );
};

export default ProductList;