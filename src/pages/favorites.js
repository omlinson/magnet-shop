import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductList from "../components/productList"; 
import { useWishlist } from "../context/wishlistContext"

const Favorites = () => {
  // useState to hold the array of favorite products
  const { favorites } = useWishlist();

  // useState to hold the map of images associated with the products
  const [favProducts, setFavProducts] = useState([]);
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
  
    const favProducts = data.allGooglePimSheet.nodes.filter(product => 
      favorites.includes(product.sKU)
    );
    setFavProducts(favProducts);

    // Create a new map for images where the key is the image name and value is the image data
    const newImageMap = new Map(
      data.allFile.nodes.map(fileNode => [fileNode.name, fileNode.childImageSharp])
    );
  
    // Update the state with the filtered favorite products and the new image map
    setImageMap(newImageMap);
  }, [favorites, data.allGooglePimSheet.nodes, data.allFile.nodes]);

  return (
    <Layout>
      <Seo title="Your Likes" />
      <div>
        <h1>Your Likes</h1>
        {/* Conditional rendering based on whether the favorites array is empty */}
        {favorites.length === 0 ? (
          <p>You have not liked any magnets.</p>
        ) : ( <ProductList products={favProducts} imageMap={imageMap} />)}
        
      </div>
      <div style={{marginTop:`2%`}}>
        <p>Your likes are stored in your browser's local storage and will not follow you between devices.</p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Your Favorite Magnets" />

export default Favorites;