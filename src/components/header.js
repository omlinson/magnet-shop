import * as React from "react"
import { Link } from "gatsby"
import Consent from "./consent"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      textAlign: `left`
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
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
    <div>
      <Consent/> 
    </div>
  </header>
)

export default Header
