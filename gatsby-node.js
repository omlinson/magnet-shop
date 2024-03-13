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
        }
        distinct(field: {tag1: SELECT})
      }
    }
  `)

  // Create PLP pages
    const products = result.data.allGooglePimSheet.nodes
    const productsPerPage = 24
    const numPages = Math.ceil(products.length / productsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/fridge-magnets` : `/fridge-magnets/${i + 1}`,
        component: require.resolve("./src/templates/plpTemplate.js"),
        context: {
          limit: productsPerPage,
          skip: i * productsPerPage,
          numPages,
          currentPage: i + 1,
          plpSlug: '/fridge-magnets'
        },
      })
    })


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
};
