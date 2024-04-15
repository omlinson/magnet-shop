import React from "react";
import { graphql} from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductList from "../components/productList.js";
import Pagination from "../components/pagination.js"; 


const PlpTemplate = ({ data, pageContext }) => {

  const { currentPage, numPages, plpSlug } = pageContext;

  const images = data.allFile.nodes
  const imageMap = new Map(images.map(image => [image.name, image.childImageSharp]));

  return (
    <Layout>
      <Seo title="All Omlinson Goods" />
      <div>
        <h1>All Fridge Magnets</h1>
      </div>
      <ProductList products={data.allGooglePimSheet.nodes} imageMap={imageMap} />
      <Pagination currentPage={currentPage} numPages={numPages} basePath={plpSlug} />
    </Layout>
  );
};

export const query = graphql`
  query ProductsQuery($limit: Int!, $skip: Int!) {
    allGooglePimSheet(limit: $limit, skip: $skip, filter: {website: {eq: 1}}) {
      nodes {
        sKU
        image
        name
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

export default PlpTemplate;