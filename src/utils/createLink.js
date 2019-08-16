import { Link } from 'gatsby';
import React from 'react';

const createLink = ({ item, section, isActive }) => {
  return (
    <Link
      to={`/${section.category.toLowerCase()}/${item.id}/overview`}
      className="sidebar__link"
      activeClassName="sidebar__link--active"
      partiallyActive={true}
    >
      {isActive}
      {item.title}
    </Link>
  );
};

export default createLink;
