const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { toTitleCase } = require('./src/utils/toTitleCase.js');

const splitSlug = slug => {
  const slugString = slug.substring(1, slug.length - 1);
  return slugString.split('/');
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    const slugArray = splitSlug(slug);

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'topDir',
      value: toTitleCase(slugArray[0]),
    });

    createNodeField({
      node,
      name: 'subDir',
      value: toTitleCase(slugArray.length > 2 ? slugArray[1] : ''),
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              topDir
              subDir
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Docs.jsx`),
        context: {
          slug: node.fields.slug,
          topDir: node.fields.topDir,
          subDir: node.fields.subDir,
        },
      });
    });
  });
};
