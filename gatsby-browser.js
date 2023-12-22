/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
let lastPathname = null;

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
};