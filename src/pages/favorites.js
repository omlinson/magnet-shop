import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductList from "../components/productList"; 

const Favorites = () => {
  // useState to hold the array of favorite products
  const [favorites, setFavorites] = useState([]);

  // useState to hold the map of images associated with the products
  const [imageMap, setImageMap] = useState(new Map());

  // Static query to fetch product and image data
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
    // useEffect hook to update the state whenever the component mounts or data changes

    // Fetch the list of favorite product IDs from local storage
    let favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];

    // Filter the products to get only those that are in the favorites list
    const favoriteProducts = data.allGooglePimSheet.nodes.filter(product => 
      favoriteIds.includes(product.sKU)
    );

    // Create a new map for images where the key is the image name and value is the image data
    const newImageMap = new Map(
      data.allFile.nodes.map(fileNode => [fileNode.name, fileNode.childImageSharp])
    );

    // Update the state with the filtered favorite products and the new image map
    setFavorites(favoriteProducts);
    setImageMap(newImageMap);
  }, [data.allGooglePimSheet.nodes, data.allFile.nodes]);

  return (
    <Layout>
      <Seo title="Your Likes" />
      <div>
        <h1>Your Likes</h1>
        {/* Conditional rendering based on whether the favorites array is empty */}
        {favorites.length === 0 ? (
          <p>You have not liked any magnets.</p>
        ) : ( <ProductList products={favorites} imageMap={imageMap} />)}
        
      </div>
      <div style={{marginTop:`2%`}}>
        <p>Your likes are stored in your browser's local storage and will not follow you between devices.</p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Your Favorite Magnets" />

export default Favorites;