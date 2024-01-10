import React, { useState, useEffect } from "react"
import Logo from "./navLogo"
import Consent from "./consent"
import BurgerMenu from "./burgerMenu"
import NavBar from "./navBar"
import NavWishlist from "./navWishlist"

const Header = ({ siteTitle }) => {

  const [consentDefined, setConsentDefined] = useState(null);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    const isConsentDefined = cookieConsent === 'yes' || cookieConsent === 'no';
    setConsentDefined(isConsentDefined); // Set based on local storage
  }, []);

  const handleConsentChange = (isConsentDefined) => {
    setConsentDefined(isConsentDefined);
    };

    /* keeping in case issue happens again if (consentDefined === null) {
      return (<header className={`${consentDefined ? 'defined' : 'undefined'}`}>
      
    <div className="headerTopRow">
      <div style={{ display: 'flex', alignItems: 'baseline', gap:`10px`  }}>
        <BurgerMenu />
        <Logo siteTitle={siteTitle} />
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap:`15px` }}>
        <NavWishlist />
      </div>
    </div>
    <NavBar />
 </header>)
    } */

    return (
      <header className={`${consentDefined ? 'defined' : 'undefined'}`}>
          {consentDefined !== null && !consentDefined && (
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
            
            {consentDefined && (  
              <>
                <NavWishlist />
                <div  className="defined">
                <Consent onConsentChange={handleConsentChange} /> 
              </div>
              </>
               )}
          </div>
        </div>
        <NavBar />
     </header>
  )
};

export default Header
