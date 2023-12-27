import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductList from "../components/productList"

const TagTemplate = ({ data, pageContext }) => {
    const { tag } = pageContext
    const images = data.allFile.nodes

  // Create a map of image names to image data
  const imageMap = new Map(images.map(image => [image.name, image.childImageSharp]));


  return (
    <Layout>
      <Seo title={`${tag} Fridge Magnets`} />
      <Link style={{fontSize:`small`}} to={`/fridge-magnets`}>All Fridge Magnets</Link>
        <div>
          <h1>{`${tag} Fridge Magnets`}</h1>
        </div> 
        <ProductList products={data.allGooglePimSheet.nodes} imageMap={imageMap} />

    </Layout>
  )
}



export const query = graphql`
  query($tag: String!) {
    allGooglePimSheet(filter: {tag1: {eq: $tag}}) {
      nodes {
        sKU
        name
        image
        availability
      }
    }
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 300, quality: 80, layout: CONSTRAINED)
        }
      }
    }
  }
`




export default TagTemplate