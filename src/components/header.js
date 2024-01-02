import React, { useState } from "react"
import { Link } from "gatsby"
import Consent from "./consent"
import  "./layout.css"

const Header = ({ siteTitle }) => {

  const [consentDefined, setConsentDefined] = useState(false);

  const handleConsentChange = (isConsentDefined) => {
    setConsentDefined(isConsentDefined);
  };

  return (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
    }}

    className={`header ${consentDefined ? 'defined' : 'undefined'}`}
  >
    <div className="navigation">
    <div className="logo">
    <Link
      to="/"
    >
      <button>{siteTitle}</button>
    </Link>
    </div>
    <div  className="menu" >
        <Link
      to="/fridge-magnets"
    >
      Magnets
    </Link>
    <Link
      to="/favorites"
    >
      Likes
    </Link>
    </div>
    </div>
    <div  className={`consent ${consentDefined ? 'defined' : 'undefined'}`}>
      <Consent onConsentChange={handleConsentChange} /> 
      </div>
     </header>
)
};
export default Header
