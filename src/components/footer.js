import * as React from "react"
import { Link } from "gatsby"

const moreLinks = [
  { text: "LinkedIn", url: "https://linkedin.com/in/omlinson" },
  {
    text: "Instagram",
    url: "https://www.instagram.com/_omlinson/",
  },
  {
    text: "GitHub",
    url: "https://github.com/omlinson/magnet-shop",
  }
]

const Footer = ({ siteTitle }) => (
  <footer
  style={{
    marginTop: `var(--space-5)`,
    fontSize: `var(--font-sm)`,
  }}
> <p> 
  
<Link
      to="/about-omlinson"
    >
      About
    </Link>
    <> · </>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a target="_blank" rel="noreferrer" href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} </p>  
    <p  style={{fontSize:`x-small`}}>© {new Date().getFullYear()} Philip Tomlinson | <Link to="/privacy-policy">Privacy Policy</Link></p>

</footer>
)

export default Footer
