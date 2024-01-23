import * as React from "react"
import * as styles from "../components/index.module.css"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductList from "../components/productList";


const IndexPage = () => {
  
  return (
    <Layout>
      <Seo title="Philip Tomlinson - Marketing Operations Consultant" />
      <div className={styles.ir1}>
      <div style={{flexGrow:`1`}}>
        <p>If you're here, you likely know that I am</p>
        <h1 className={styles.name}>Philip Tomlinson</h1>
        <p>Nothing here should really surprise you</p>
      </div>
      <div className={styles.photo}>
      <p style={{fontSize:`var(--font-sx)`}}>Space for my face</p>
      <p>🧑🏻🌱🌲</p>
      </div>
      </div>
      <div >
        <h2>Random Fridge Magnets</h2>
        <ProductList qty='3' showWishlistButton={false} />
        <Link to="/fridge-magnets">
          <button style={{width:`100%`, marginTop:`1.5rem`}}>SHOP ALL</button>
        </Link>
      </div>
      
    </Layout>
  );
};

export default IndexPage;