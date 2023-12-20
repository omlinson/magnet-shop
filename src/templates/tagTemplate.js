import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const TagTemplate = ({ data, pageContext }) => {
    const { tag } = pageContext
    const magnets = data.allGooglePimSheet.nodes
    const images = data.allFile.nodes

  // Create a map of image names to image data
  const imageMap = new Map(images.map(image => [image.name, image.childImageSharp]));


  return (
    <Layout>
      <Seo title={`${tag} Fridge Magnets`} />
      <a href="/">All Fridge Magnets</a>
        <h1>{`${tag} Fridge Magnets`}</h1>
      
        <div className={styles.imageGallery}>
        {magnets.map((magnet, index) => {
          const imageData = imageMap.get(magnet.image);
          return (
            <Link to={`/fridge-magnets/${magnet.name}`} key={index}>
              {imageData && (
                <GatsbyImage
                  image={getImage(imageData.gatsbyImageData)}
                  alt={`Fridge Magnet ${magnet.name}`}
                />
              )}
            </Link>
          );
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allGooglePimSheet(filter: {tag1: {eq: $tag}}) {
      nodes {
        name
        image
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