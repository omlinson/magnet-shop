import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')     // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-')   // Replace multiple - with single -
      .trim();                  // Trim - from start and end of text
  };

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
          const slug = magnet.name ? slugify(magnet.name) : '#';
          return (
            <div key={index} style={{ position: 'relative' }}>
                <Link to={magnet.name ? `/fridge-magnets/${slug}` : '#'} key={index}>
                {imageData && (
                    <GatsbyImage
                    image={getImage(imageData.gatsbyImageData)}
                    alt={`Fridge Magnet ${magnet.name}`}
                    />
                )}
                </Link>
                {magnet.availability !== "in stock" && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        color: 'white',
                        padding: '10px',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                        }}>
                        {magnet.availability}
                    </div>
                    )}
            </div>
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