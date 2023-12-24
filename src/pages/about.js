import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
  <Seo title="About Philip Tomlinson" />
  <div>
    <h1>About omlinson</h1>
    <p>Just getting things done online. omlinson is Philip Tomlinson's lifestyle brand.</p>
    <p></p>
    <h2>In Progress</h2>
    <h3>Ecommerce Lab</h3>
    <p>The current iteration is a simple Jamstack powered by <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a> and <a href="https://docs.google.com/spreadsheets/d/16I6W2yArFYZX3gGrwCALkWs4zKagammZlTBfusQYAPI/edit?usp=sharing" target="_blank" rel="noreferrer">Google Sheets</a> showcasing one of my current hobbies: making fridge magnets.</p>
    <p>GDP & Loi 25 consent management is present. Google Tag Manager & GA4 including enhanced ecommerce measurements are set.</p>
    <h4>Roadmap</h4>
    <ul>
     <li>Finalize tracking (ecommerce isn't really set)</li>
     <li>Consolidate components & functions</li>
     <li>Localization</li>
    </ul>
    <h3>Brand Lab</h3>
    <p>Building up social media accounts based on what is happening in Ecommerce Lab.</p>
    <p>Website design needs to represent brand. Need to figure this out.</p>
    <p>Instagram is being fed daily by product images.</p>
    <h4>Roadmap</h4>
    <ul>
     <li>Weekly Instagram Reel Concept</li>
     <li>Logo Improvements</li>
     <li>Design Fixes</li>
     <li>First B2B Offers</li>
     <li>Localization</li>
    </ul>
    <h2>Upcoming</h2>
    <h3>Data Lab</h3>
    <p>Building better dashboards for services like GA4 is in this lab. R & Python code projects.</p>
    <h4>Roadmap</h4>
    <ul>
     <li>GA4 API</li>
     <li>Web data visualization tests</li>
     <li>Daily Python Appsflyer ETL job</li>
     <li>Localization</li>
    </ul>
    
    <h2>About Philip Tomlinson</h2>
    <p>Explore the site or use the links in the footer to learn more about me, Philip Tomlinson.</p>
  </div>
  
  
</Layout>
)

export const Head = () => <Seo title="About omlinson & Philip Tomlinson" />

export default SecondPage
