import React from 'react';
import '../../images/icons.svg';

const Icon = props => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
);

export default Icon;
