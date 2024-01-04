import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import WishlistButton from './wishlistButton';
import * as styles from "./product.module.css"; 

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')     
    .replace(/[^\w\-]+/g, '') 
    .replace(/\-\-+/g, '-')   
    .trim();                  
};

const ProductItem = ({ product, imageMap }) => {
    const imageData = imageMap.get(product.image);
    const slug = product.name ? slugify(product.name) : '#';
    return (
      <div style={{ position: 'relative' }} className={styles.productItem}>
          <Link to={product.name ? `/fridge-magnets/${slug}` : '#'} >
            {imageData && (
              <GatsbyImage
                image={getImage(imageData.gatsbyImageData)}
                alt={`Fridge Magnet ${product.name}`}
                className={styles.productImage}
              />
            )}
          </Link>
          {product.availability !== "in stock" && (
            <div style={{
              position: `absolute`,
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: `rgba(0, 0, 0, 1)`,
              color: `white`,
              padding: `10px`,
              textAlign: `center`,
              textTransform: `uppercase`}}>
              {product.availability}
            </div>
        )}
        <WishlistButton productId={product.sKU} />
      </div>
    );
  };


  export default ProductItem;