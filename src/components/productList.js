import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProductItem from './productItem';
import * as styles from "./product.module.css"; 

const ProductList = ({ products, imageMap, qty, showWishlistButton }) => {
  const data = useStaticQuery(graphql`
    query {
      allGooglePimSheet {
        nodes {
          sKU
          name
          image
          availability
        }
      }
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 300, quality: 90, layout: CONSTRAINED)
          }
          name
        }
      }
    }
  `);

  const defaultProducts = products || data.allGooglePimSheet.nodes;
  const defaultImageMap = imageMap || new Map(
    data.allFile.nodes.map(node => [node.name, node.childImageSharp])
  );

  const [displayProducts, setDisplayProducts] = useState(defaultProducts);

  useEffect(() => {
    if (qty && qty < defaultProducts.length) {
      const shuffled = [...defaultProducts].sort(() => 0.5 - Math.random());
      setDisplayProducts(shuffled.slice(0, qty));
    } else {
      setDisplayProducts(defaultProducts);
    }
  }, [defaultProducts, qty]);

  return (
    <div className={styles.imageGallery}>
      {displayProducts.map((product, index) => (
        <ProductItem
          key={index} 
          product={product}
          imageMap={defaultImageMap}
          showWishlistButton={showWishlistButton}
        />
      ))}
    </div>
  );
};

export default ProductList;