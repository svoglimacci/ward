const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

const splitSlug = slug => {
  const slugString = slug.substring(1, slug.length - 1);
  return slugString.split('/');
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
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
          {
            from: `/${splitSlug(node.fields.slug)[0]}/${
              splitSlug(node.fields.slug)[1]
            }`,
            to: node.fields.slug,
          },
          {
            from: `/${splitSlug(node.fields.slug)[0]}/${
              splitSlug(node.fields.slug)[1]
            }/`,
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
        },
      });
    });
  });
};
