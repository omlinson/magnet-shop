import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WishlistButton from "../components/wishlistButton"


const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .trim();                  // Trim - from start and end of text
};


const ProductTemplate = ({ data }) => {
  const product = data.googlePimSheet 
  const productImageData = data.file.childImageSharp.gatsbyImageData


  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'view_item',
      'currency': "CAD",
      'value': product.price,
      'ecommerce':{
      'currency': "CAD",
      'value': product.price,
      'items': [
        {
          'item_id': product.sKU, 
          'item_name': product.name, 
          'affiliation': "omlinson",
          'item_brand': "omlinson",
          'item_category': "Fridge Magnets",
          'price': product.price,
          'quantity': 1,
        }
      ]
      }
    });
  }, [product]);


  return (
    <Layout>
      <Seo title={product.name + " Fridge Magnet"} />
      <div>
        <Link style={{fontSize:`small`}} to={`/fridge-magnets`}>All Fridge Magnets</Link>
        <h1>{product.name}</h1>
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 0 0' }}>
          <GatsbyImage image={getImage(productImageData)} alt={product.name} />
          {product.availability !== "in stock" && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 1)', // Semi-transparent black
              color: 'white',
              padding: '10px',
              textAlign: 'center',
              textTransform:`uppercase`
            }}>
              {product.availability}
            </div>
          )}
        </div>
        <div>
          <p>Size: {product.size} ({product.sizeMm} mm / {product.sizeInch} in)</p>
          <p>Suggested Price: ${product.price} + SHIPPING</p>
        <div>
        <WishlistButton productId={product.sKU} />
          <a  className="button" href="https://www.instagram.com/_omlinson" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          DM 4 MAGNET$
          </a>     
        </div>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($sKU: Int!, $imageName: String!) {
    googlePimSheet(sKU: { eq: $sKU }) {
      sKU
      name
      image
      price
      size
      sizeMm
      sizeInch
      availability
      tag1
    }
    file(name: { eq: $imageName }) {
      childImageSharp {
        gatsbyImageData(width: 600, quality: 80, layout: CONSTRAINED)
      }
    }
  }
`

export default ProductTemplate