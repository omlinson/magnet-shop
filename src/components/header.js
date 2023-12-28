import * as React from "react"
import { Link } from "gatsby"
import Consent from "./consent"
import  "./layout.css"

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
    <div  className="menu" >
    <Link
      to="/"
      style={{
        marginRight:`1%`
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
    <Link
      to="/fridge-magnets"
      style={{
        marginLeft:`3%`,marginRight:`auto`
      }}
    >
      Magnets
    </Link>
    <Link
      to="/favorites"
      style={{
        marginLeft:`3%`,marginRight:`auto`
      }}
    >
      Liked
    </Link>
    </div>
    <div className="consent">
      <Consent/> 
      </div>
     </header>
)

export default Header
