import React from 'react';
import Sidebar from './Sidebar';

class ResponsiveSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  openMenu = () => {
    this.setState({ open: !this.state.open });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <>
        <div className={open ? 'sidebar--active' : 'sidebar'}>
          <div className="sidebar__header">
            <span className="logo">WARD</span>
          </div>
          <nav className="sidebar__nav">
            <Sidebar closeParent={this.closeMenu} {...this.props} />
          </nav>
        </div>
        <>
          <button
            className="sidebar__toggle"
            onClick={this.openMenu}
            type="button"
          >
            Menu
          </button>
        </>
      </>
    );
  }
}

export default ResponsiveSidebar;
