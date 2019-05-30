import React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import createCategory from '../utils/createCategory';

class Docs extends React.PureComponent {
  render() {
    const { data, pathContext } = this.props;

    const docContent = data.markdownRemark;
    const docCategory = createCategory(data.allMarkdownRemark.edges);

    const CategoryLinks = props => {
      return (
        <React.Fragment>
          {Object.keys(props.category).map((category, i) => {
            const linkList = props.category[category].map((link, i) => {
              return (
                <li>
                  <Link key={i} to={link.node.fields.slug}>
                    {link.node.frontmatter.title}
                  </Link>
                </li>
              );
            });

            return (
              <React.Fragment>
                <h4 className="nav-section">{category}</h4>
                <ul key={i}>{linkList}</ul>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    };

    return (
      <Layout>
        {Object.keys(docCategory).map((category, i) => {
          return (
            category === pathContext.topDir && (
              <Sidebar>
                <div key={i}>
                  <h3 className="nav-title">{category}</h3>
                  <CategoryLinks category={docCategory[category]} />
                </div>
              </Sidebar>
            )
          );
        })}
      </Layout>
    );
  }
}

export const query = graphql`
  query docContentQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
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
`;

export default Docs;
