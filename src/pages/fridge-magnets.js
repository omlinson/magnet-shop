import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductList from "../components/productList"; 


const IndexPage = () => {

  return (
    <Layout>
      <Seo title="Fridge Magnets" />
      <div>
        <h1>Fridge Magnets</h1>
      </div>
      

      <ProductList/>
      

    
    </Layout>
  );
};

export default IndexPage;