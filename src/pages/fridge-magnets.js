import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allGooglePimSheet {
        nodes {
          name
          image
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "fridge-magnet-pics"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 300, quality: 80, layout: CONSTRAINED)
          }
          name
        }
      }
    }
  `);

  // Extract filenames from Google Sheets data
  const sheetImageNames = data.allGooglePimSheet.nodes.map(node => node.image);

  // Create a map of image names to product names
  const imageNameToProductNameMap = new Map(
    data.allGooglePimSheet.nodes.map(node => [node.image, node.name])
  );

  // Filter filesystem images to only those that match
  const matchingImages = data.allFile.nodes.filter(fileNode =>
    sheetImageNames.includes(fileNode.name)
  );

  // Shuffle and slice to get 10 random images
  // const randomImages = matchingImages.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <Layout>
      <Seo title="Fridge Magnets" />
      <div className={styles.textCenter}>
        <h1>Fridge Magnets</h1>
      </div>
      
      <div className={styles.imageGallery}>
      {matchingImages.map((fileNode, index) => {
          const productName = imageNameToProductNameMap.get(fileNode.name);
          const slug = productName ? slugify(productName) : '#';
          return (
            <Link to={productName ? `/fridge-magnets/${slug}` : '#'} key={index}>
              <GatsbyImage
                image={getImage(fileNode.childImageSharp)}
                alt={`Fridge Magnet ${productName || 'Image'}`}
              />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;