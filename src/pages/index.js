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

  // Extract filenames and availability from Google Sheets data
  const sheetDataMap = new Map(
    data.allGooglePimSheet.nodes.map(node => [node.image, { name: node.name, availability: node.availability }])
  );

  // Filter filesystem images to only those that match
  const matchingImages = data.allFile.nodes.filter(fileNode =>
    sheetDataMap.has(fileNode.name)
  );

  // Shuffle and slice to get 10 random images
  // const randomImages = matchingImages.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <Layout>
      <Seo title="Fridge Magnets" />
      <div>
        <h1>omlinson</h1>
        <h2>Fridge Magnets</h2>
      </div>
      
      <div className={styles.imageGallery}>
        {matchingImages.map((fileNode, index) => {
          const productData = sheetDataMap.get(fileNode.name);
          const slug = productData ? slugify(productData.name) : '#';
          return (
            <div key={index} style={{ position: 'relative' }}>
              <Link to={productData ? `/fridge-magnets/${slug}` : '#'}>
                <GatsbyImage
                  image={getImage(fileNode.childImageSharp.gatsbyImageData)}
                  alt={`Fridge Magnet ${productData.name || 'Image'}`}
                />
              </Link>
              {productData.availability !== "in stock" && (
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
                  {productData.availability}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;