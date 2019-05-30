import React from 'react';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <a className="header__link" href="/">
        Basics
      </a>
      <a className="header__link" href="/">
        Advanced
      </a>
      <a className="header__link" href="/">
        Champions
      </a>
    </nav>
    <button type="button" className="header__search">
      Search
    </button>
  </header>
);

export default Header;
