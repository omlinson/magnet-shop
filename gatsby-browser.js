/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it



import React from 'react'; 
import { WishlistProvider } from './src/context/wishlistContext.js'; 

const RootComponent = ({element}) => {
  return (
    <WishlistProvider>
      {element}
    </WishlistProvider>
  );
};

export const wrapRootElement = RootComponent;

/* let lastPathname = null;

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (window.dataLayer) {
    // Check if the pathname has changed
    if (lastPathname !== location.pathname) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
        },
      });
      lastPathname = location.pathname;
    }
  }
}; */ 