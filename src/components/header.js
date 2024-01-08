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
      <BurgerMenu />
        <Logo siteTitle={siteTitle} />
        <NavWishlist />
        <div  className={`consent ${consentDefined ? 'defined' : 'undefined'}`}>
          <Consent onConsentChange={handleConsentChange} /> 
        </div>
        <NavBar />
     </header>
  )
};

export default Header
