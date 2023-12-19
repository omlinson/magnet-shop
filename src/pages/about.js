import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
  <Seo title="About Philip Tomlinson" />
  <div>
    <h1>About omlinson</h1>
    <p>The site is an attempt to make a centralized hub for my digital projects. </p>
    <p>I will try to make no distinction between work and play on this domain.</p>
    <p>The current iteration is a simple Jamstack powered by <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> and <a href="https://docs.google.com/spreadsheets/d/16I6W2yArFYZX3gGrwCALkWs4zKagammZlTBfusQYAPI/edit?usp=sharing" target="_blank">Google Sheets</a> showcasing one of my current hobbies: making fridge magnets.</p>
    <h2>Roadmap</h2>
    <p>There is no particular order here.</p>
    <ul>
     <li>Tracking & privacy policy</li>
     <li>Additional ecom functions</li>
     <li>Contact form</li>
     <li>Resume & consulting section</li>
    </ul>
    <h2>About Philip Tomlinson</h2>
    <p>Explore the site or use the links in the footer to continue learning about me, Philip Tomlinson.</p>
  </div>
  
  
</Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
