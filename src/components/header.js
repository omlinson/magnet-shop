import * as React from "react"
import { Link } from "gatsby"
import Consent from "./consent"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
    }}
  >
    <div style={{marginBottom:`1%`}}>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    </div>
    <div style={{width:`100%`}}>
    <Link
      to="/"
      style={{
        marginLeft:`3%`,marginRight:`1%`
      }}
    >
      Home
    </Link>
    <Link
      to="/about"
      style={{
        marginLeft:`3%`,marginRight:`auto`
      }}
    >
      About
    </Link>
    </div>
    
      <Consent/> 
     </header>
)

export default Header
