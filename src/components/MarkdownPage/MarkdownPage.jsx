import React from 'react';
import Header from '../Header';
import ResponsiveSidebar from '../ResponsiveSidebar';
import findSectionForPath from '../../utils/findSectionForPath';

const MarkdownPage = ({
  markdownRemark,
  sectionList,
  createLink,
  location,
}) => (
  <div className="wrapper">
    <Header />
    <ResponsiveSidebar
      location={location}
      sectionList={sectionList}
      createLink={createLink}
      defaultActiveSection={findSectionForPath(location.pathname, sectionList)}
    />
    <div
      className="content-wrapper"
      dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
    />
  </div>
);

export default MarkdownPage;
