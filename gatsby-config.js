const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Project Ward`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'categories',
        path: path.resolve('./src/content'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svg-sprite`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
  ],
};
