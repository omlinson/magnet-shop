import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import "./layout.css";

const ConsentComponent = ({ onConsentChange }) => {
  const [consent, setConsent] = useState(null);

  // Effect for initializing and updating consent state
  useEffect(() => {
    const userConsent = localStorage.getItem('cookieConsent');
      setConsent(userConsent);
      onConsentChange(userConsent === 'yes' || userConsent === 'no');
  }, [onConsentChange]);

  // Handler for setting consent
  const handleConsent = (response) => {
    localStorage.setItem('cookieConsent', response);
    setConsent(response);
    onConsentChange(response === 'yes' || response === 'no');
    // Event tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie-consent-update',
      cookieConsent: response
    });
    // Consent update for analytics
    window.gtag && window.gtag('consent', 'update', {
      'ad_storage': response === 'yes' ? 'granted' : 'denied',
      'analytics_storage': response === 'yes' ? 'granted' : 'denied'
    });
  };

  // Conditional rendering based on consent value
  return (
    <div>
      {consent === 'yes' || consent === 'no' ? (
        <div class="active">
          <button onClick={() => handleConsent(consent === 'yes' ? 'no' : 'yes')}>
            {consent === 'yes' ? ' 🐵 ' : ' 🙈 '}
          </button>
        </div>
      ) : (
        <div style={{marginBottom:`1%`, transition:`display 2s`}}>
          <p>Let Google & Meta watch you?</p>
          <button onClick={() => handleConsent('yes')}>Yes</button>{' '}
          <button onClick={() => handleConsent('no')}>No</button>{' '}
          <Link to="/privacy-policy"><button>Maybe</button></Link>
        </div>
      )}
    </div>
  );
};

export default ConsentComponent;