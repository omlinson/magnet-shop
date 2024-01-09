import React, { useState } from "react"
import Logo from "./navLogo"
import Consent from "./consent"
import BurgerMenu from "./burgerMenu"
import NavBar from "./navBar"
import NavWishlist from "./navWishlist"

const Header = ({ siteTitle }) => {

  const [consentDefined, setConsentDefined] = useState(false);

  const handleConsentChange = (isConsentDefined) => {
    setConsentDefined(isConsentDefined);
    };

    return (
      <header className={`${consentDefined ? 'defined' : 'undefined'}`}>
          {!consentDefined && (
        <div className="consent undefined">
          <Consent onConsentChange={handleConsentChange} />
        </div>
      )}
        <div className="headerTopRow">
          <div style={{ display: 'flex', alignItems: 'baseline', gap:`10px`  }}>
            <BurgerMenu />
            <Logo siteTitle={siteTitle} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap:`15px` }}>
            <NavWishlist />
            {consentDefined && (  <div  className="defined">
                <Consent onConsentChange={handleConsentChange} /> 
              </div> )}
          </div>
        </div>
        <NavBar />
     </header>
  )
};

export default Header
