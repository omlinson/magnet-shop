import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProductTemplate = ({ data }) => {
  const product = data.googlePimSheet // Adjust based on your actual query
  const productImageData = data.file.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo title={product.name + " Fridge Magnet"} />
      <div>
        <a href="/">All Fridge Magnets</a>
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
         <a href="https://www.instagram.com/_omlinson" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', margin: '20px 0', backgroundColor: '#7026b9', color: 'white', borderRadius: '5px', textDecoration: 'none', textAlign: 'center' }}>
          DM 4 MAGNET$
        </a>
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
    }
    file(name: { eq: $imageName }) {
      childImageSharp {
        gatsbyImageData(width: 600, quality: 80, layout: CONSTRAINED)
      }
    }
  }
`

export default ProductTemplate