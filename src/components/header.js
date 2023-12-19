import * as React from "react"
import { Link } from "gatsby"

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
    <a style ={{ marginLeft:`3%`,marginRight:`1%` }} href="/">Home</a>
    <a style ={{ marginLeft:`3%`,marginRight:`auto` }} href="/about">About</a>
  </header>
)

export default Header
