import * as React from "react"

const moreLinks = [
  { text: "LinkedIn", url: "https://linkedin.com/in/omlinson" },
  {
    text: "Instagram",
    url: "https://www.instagram.com/_omlinson/",
  },
  {
    text: "GitHub",
    url: "https://github.com/omlinson",
  }
]

const Footer = ({ siteTitle }) => (
  <footer
  style={{
    marginTop: `var(--space-5)`,
    fontSize: `var(--font-sm)`,
  }}
> <p> {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} </p>  
  © {new Date().getFullYear()} Philip Tomlinson 
</footer>
)

export default Footer
