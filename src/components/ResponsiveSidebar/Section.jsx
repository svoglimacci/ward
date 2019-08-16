import React from 'react';
import isItemActive from '../../utils/isItemActive';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = { uid: ('' + Math.random()).replace(/\D/g, '') };
  }

  render() {
    const {
      section,
      createLink,
      onSectionClick,
      isActive,
      location,
    } = this.props;
    const uid = 'section_' + this.state.uid;
    return (
      <>
        <button
          className={isActive ? 'button--active' : 'button'}
          type="button"
          onClick={onSectionClick}
        >
          {section.title}
        </button>
        <ul className={isActive ? 'active' : 'hidden'}>
          {section.items.map((item, index) => (
            <li className="sidebar__item" key={item.id}>
              {createLink({
                section,
                isActive: isItemActive(location, item),
                item,
                location,
              })}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Section;
