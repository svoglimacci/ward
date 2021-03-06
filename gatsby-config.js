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
        name: 'content',
        path: path.resolve('./src/content'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
  ],
};
