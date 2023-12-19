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
      }
    }
  `)

  result.data.allGooglePimSheet.nodes.forEach(node => {
    const pathSlug = slugify(node.name);
    createPage({
      path: `/fridge-magnets/${pathSlug}`, // Define path using the SKU or another unique field
      component: require.resolve("./src/templates/magnetTemplate.js"),
      context: {
        sKU: node.sKU, // Pass SKU as context for the template query
        imageName: node.image // Pass the image filename as context

      },
    })
  })
}
