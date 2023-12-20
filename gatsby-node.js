/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .trim();                  // Trim - from start and end of text
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allGooglePimSheet {
        nodes {
          sKU
          image
          name
          tag1
        }
        distinct(field: tag1)
      }
    }
  `)

  // Create individual magnet pages
  result.data.allGooglePimSheet.nodes.forEach(node => {
    const pathSlug = slugify(node.name);
    createPage({
      path: `/fridge-magnets/${pathSlug}`,
      component: require.resolve("./src/templates/magnetTemplate.js"),
      context: {
        sKU: node.sKU,
        imageName: node.image
      },
    });
  });

  result.data.allGooglePimSheet.distinct.forEach(tag => {
    const tagSlug = slugify(tag);
    createPage({
      path: `/${tagSlug}-fridge-magnets`,
      component: require.resolve("./src/templates/tagTemplate.js"),
      context: {
        tag: tag
      },
    });
  });
};
