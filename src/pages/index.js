import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductList from "../components/productList"; 


const IndexPage = () => {
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



  const imageMap = new Map(
    data.allFile.nodes.map(node => [node.name, node.childImageSharp])
  );


  return (
    <Layout>
      <Seo title="Fridge Magnets" />
      <div>
        <h1>omlinson</h1>
        <h2>Fridge Magnets</h2>
      </div>

      <ProductList products={data.allGooglePimSheet.nodes} imageMap={imageMap} />
      
    </Layout>
  );
};

export default IndexPage;