import React from 'react';
import { Link } from 'gatsby';

import Icon from '../Icon';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link
        className="header__link"
        to="/fundamentals"
        activeClassName="header__link--active"
        partiallyActive={true}
      >
        Fundamentals
      </Link>
      <Link
        className="header__link"
        to="/champions"
        activeClassName="header__link--active"
        partiallyActive={true}
      >
        Champions
      </Link>
    </nav>
    <button
      type="button"
      className="header__search"
      activeClassName="button--active"
      partiallyActive={true}
    >
      <Icon name="search" />
    </button>
  </header>
);

export default Header;
