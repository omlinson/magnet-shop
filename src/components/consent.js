import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const ConsentComponent = () => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const userConsent = localStorage.getItem('cookieConsent');
    setConsent(userConsent);
  }, []);

  const handleConsent = (response) => {
    localStorage.setItem('cookieConsent', response);
    setConsent(response);
  
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
      <div>
        <button onClick={() => handleConsent(consent === 'yes' ? 'no' : 'yes')}>
          {consent === 'yes' ? ' o ' : ' - '}
        </button>
        <button onClick={() => handleConsent(consent === 'yes' ? 'no' : 'yes')}>
          {consent === 'yes' ? ' o ' : ' - '}
        </button> 
      </div> 
    );
  }

  return (
    <div>
      Can Google & Meta watch you?{' '}
      <button onClick={() => handleConsent('yes')}>Yes</button>{' '}
      <button onClick={() => handleConsent('no')}>No</button>{' '}
      <Link to="/privacy-policy"><button>Maybe</button></Link>
    </div>
  );
};

export default ConsentComponent;