import React from 'react';
import Header from '../Header';

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <>{children}</>;
  }
}

export default Layout;
