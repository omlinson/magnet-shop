import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductList from "../components/productList"; 

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [imageMap, setImageMap] = useState(new Map());

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
            gatsbyImageData(width: 300, quality: 80, layout: CONSTRAINED)
          }
          name
        }
      }
    }
  `);

  useEffect(() => {
    // Fetch favorites from local storage
    let favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];

    // Filter products that are marked as favorites
    const favoriteProducts = data.allGooglePimSheet.nodes.filter(product => 
      favoriteIds.includes(product.sKU)
    );

    // Create an image map from the queried image data
    const newImageMap = new Map(
      data.allFile.nodes.map(fileNode => [fileNode.name, fileNode.childImageSharp])
    );

    setFavorites(favoriteProducts);
    setImageMap(newImageMap);
  }, [data.allGooglePimSheet.nodes, data.allFile.nodes]);

  return (
    <Layout>
      <Seo title="Your Favorite Magnets" />
      <div>
        <h1>Your Favorite Magnets</h1>
        <p>These are stored in your browser's local storage and will not follow you between devices.</p>
        <ProductList products={favorites} imageMap={imageMap} />
      </div>
    </Layout>
  );
};


export const Head = () => <Seo title="Your Favorite Magnets" />

export default Favorites;