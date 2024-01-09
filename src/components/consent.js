import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import "./layout.css";

const ConsentComponent = ({ onConsentChange }) => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const userConsent = localStorage.getItem('cookieConsent');
    setConsent(userConsent);
    onConsentChange(userConsent === 'yes' || userConsent === 'no');
  }, [onConsentChange]);

  const handleConsent = (response) => {
    localStorage.setItem('cookieConsent', response);
    setConsent(response);
    onConsentChange(response === 'yes' || response === 'no');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie-consent-update',
      cookieConsent: response
    });
    window.gtag && window.gtag('consent', 'update', {
      'ad_storage': response === 'yes' ? 'granted' : 'denied',
      'analytics_storage': response === 'yes' ? 'granted' : 'denied'
    });

  };

  if (consent === 'yes' || consent === 'no') {
    return (
      <div class="active">
        <button onClick={() => handleConsent(consent === 'yes' ? 'no' : 'yes')}>
          {consent === 'yes' ? ' 🐵 ' : ' 🙈 '}
        </button>
      </div> 
    );
  }

  return (
    <div style={{marginBottom:`1%`}}>
      <p>Let Google & Meta watch you?</p>
      <button onClick={() => handleConsent('yes')}>Yes</button>{' '}
      <button onClick={() => handleConsent('no')}>No</button>{' '}
      <Link to="/privacy-policy"><button>Maybe</button></Link>
    </div>
  );
};

export default ConsentComponent;