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
  const { createPage, createRedirect } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              order
            }
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
      if (node.frontmatter.order === 1) {
        const redirectBatch = [
          {
            from: `/${splitSlug(node.fields.slug)[0]}`,
            to: node.fields.slug,
          },
          {
            from: `/${splitSlug(node.fields.slug)[0]}/`,
            to: node.fields.slug,
          },
        ];

        redirectBatch.forEach(({ from, to }) => {
          createRedirect({
            fromPath: from,
            redirectInBrowser: true,
            toPath: to,
          });
        });
      }
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/docs.jsx`),
        context: {
          slug: node.fields.slug,
          topDir: node.fields.topDir,
          subDir: node.fields.subDir,
        },
      });
    });
  });
};
