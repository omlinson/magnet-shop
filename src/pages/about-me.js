import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMe = () => (
  <Layout>
  <Seo title="About Philip Tomlinson" />
 <div>
    
    <h1>About Philip Tomlinson</h1>
    <p>Explore the site or use the links in the footer to learn more about me, Philip Tomlinson.</p>
  </div>
  
  
</Layout>
)

export const Head = () => <Seo title="About Philip Tomlinson" />

export default AboutMe
