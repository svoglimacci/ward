import React from 'react';

const Sidebar = ({ children }) => (
  <aside className="sidebar">
    <header className="sidebar__head">
      <a className="logo" href="/" title="Ward">
        Ward
      </a>
    </header>
    <nav className="sidebar__nav">{children}</nav>
  </aside>
);

export default Sidebar;
