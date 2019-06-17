import React from 'react';

const Sidebar = ({ children }) => (
  <aside className="sidebar">
    <header className="header">
      <a className="header__logo" href="/" title="Ward">
        Ward
      </a>
    </header>
    <nav className="sidebar__nav">{children}</nav>
  </aside>
);

export default Sidebar;
