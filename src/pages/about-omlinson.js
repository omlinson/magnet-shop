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
      <li>Improve build time</li>
      <li>Basic SEO lol</li>
      <li>Leverage PIM improvements on front-end</li>
      <li>Build navigation filters</li>
    </ul>
    <h2>Social Media Bots</h2>
      <p>I've started working on some GPT powered social media bots. You can see the progress on my <a href="https://www.instagram.com/_omlinson" target="_blank" rel="noreferrer">Instagram</a>.</p>
      <h4>Current Goals</h4>
        <ul>
          <li>Launch v2 of bot in production with an automate story everyday using Stability AI image-to-video GPT</li>
          <li>Solve the music / audio problem. OpenAI text-to-voice not good enough.</li>
          <li>Get v3 video generator running with Stability AI animation GPT</li>
          <li>Update public repo</li>
        </ul>
    <h2>Consultancy / B2B</h2>
      <p>I'm currently having too much fun in the lab. <a href="https://www.calendly.com/omlinson" target="_blank" rel="noreferrer">Feel free to book a conversation</a>.</p>
      <h4>Current Goals</h4>
    <ul>
      <li>Capture emails</li>
    </ul>
  </div>
  
  
</Layout>
)

export const Head = () => <Seo title="About omlinson" />

export default AboutOmlinson
