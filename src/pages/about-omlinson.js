import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutOmlinson = () => (
  <Layout>
  <Seo title="About Philip Tomlinson" />
  <div>
    <h1>About omlinson</h1>
    <p>This is my digital lab.</p>
    <h2>Ecommerce Lab</h2>
    <p>I discovered button magnet making while hanging out with a friend at <a href="https://square.banq.qc.ca/" target="_blank" rel="noreferrer">my library's Fab Lab.</a></p>
    <p>Perfect hobby to start a small ecom business with minimal capital investment.</p>
    <p>It's become a simple Jamstack powered by <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a> and <a href="https://docs.google.com/spreadsheets/d/16I6W2yArFYZX3gGrwCALkWs4zKagammZlTBfusQYAPI/edit?usp=sharing" target="_blank" rel="noreferrer">Google Sheets</a>.</p>
    <p>You can find source code on <a href="https://github.com/omlinson/magnet-shop" target="_blank" rel="noreferrer">Github</a></p>
    <h4>Current Goals</h4>
    <ul>
      <li>First attempt at shipping to Ontario has not yet been completed</li>
      <li>First in-person event will be on Jan 28th</li>
      <li>Basic integration with Square</li>
    </ul>
    <h2>Consultancy</h2>
      <p>I have placed this in second rank as I'm currently having too much fun in the lab. I am looking to add another 1 or 2 clients maximum. Feel free to contact me.</p>
      <h4>Current Goals</h4>
    <ul>
      <li>Finalize domain & plan soft-launch</li>
      <li>Create first offers</li>
      <li>Start capturing emails</li>
    </ul>
  </div>
  
  
</Layout>
)

export const Head = () => <Seo title="About omlinson" />

export default AboutOmlinson