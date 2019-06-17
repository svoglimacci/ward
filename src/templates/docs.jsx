import React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import createCategory from '../utils/createCategory';
import Icon from '../components/Icon';
class Docs extends React.PureComponent {
  render() {
    const { data, pathContext } = this.props;
    const docCategory = createCategory(data.allMarkdownRemark.edges);

    const CategoryLinks = props => {
      return (
        <React.Fragment>
          {Object.keys(props.category).map((category, i) => {
            const linkList = props.category[category].map((link, i) => {
              return (
                <li>
                  <Link
                    key={i}
                    to={link.node.fields.slug}
                    className="sidebar__link"
                    activeClassName="sidebar__link--active"
                  >
                    {link.node.frontmatter.title}
                  </Link>
                </li>
              );
            });

            return (
              <React.Fragment>
                <div>
                  <h4 className="sidebar__section">{category}</h4>
                  <Icon name="arrow" />
                </div>
                <ul className="sidebar__list" key={i}>
                  {linkList}
                </ul>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    };

    const post = data.markdownRemark;
    return (
      <div className="wrapper">
        {Object.keys(docCategory).map((category, i) => {
          return (
            category === pathContext.topDir && (
              <Sidebar>
                <div key={i}>
                  <h3 className="sidebar__title">{category}</h3>
                  <CategoryLinks category={docCategory[category]} />
                </div>
              </Sidebar>
            )
          );
        })}
        <Layout>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
      </div>
    );
  }
}

export const query = graphql`
  query docsContentQuery($slug: String!) {
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
