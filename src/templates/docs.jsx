import React from 'react';
import { graphql } from 'gatsby';
import sectionList from '../utils/sectionList';
import createLink from '../utils/createLink';
import MarkdownPage from '../components/MarkdownPage';
import Layout from '../components/Layout';

const Docs = ({ data, location }) => (
  <Layout>
    <MarkdownPage
      location={location}
      createLink={createLink}
      markdownRemark={data.markdownRemark}
      sectionList={sectionList}
    />
  </Layout>
);

export const query = graphql`
  query docsContentQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

export default Docs;
