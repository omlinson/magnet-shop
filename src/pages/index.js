import * as React from "react"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"


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
      </div>
      
    </Layout>
  );
};

export default IndexPage;