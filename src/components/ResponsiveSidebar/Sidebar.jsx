import React from 'react';
import Section from './Section';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeSection: props.defaultActiveSection,
    };
  }

  toggleSection(section) {
    this.setState(state => ({
      activeSection: state.activeSection === section ? null : section,
    }));
  }

  render() {
    const { sectionList, createLink, location } = this.props;
    const { activeSection } = this.state;
    return (
      <>
        {sectionList.map((section, index) => (
          <Section
            location={location}
            key={index}
            section={section}
            createLink={createLink}
            onSectionClick={() => this.toggleSection(section)}
            isActive={activeSection === section}
          />
        ))}
      </>
    );
  }
}

export default Sidebar;
