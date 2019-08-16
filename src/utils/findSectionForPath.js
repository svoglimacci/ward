import slugify from './slugify';

const findSectionForPath = (pathname, sections) => {
  let activeSection;
  const slugId = pathname.split('/');

  sections.forEach(section => {
    const match = section.items.some(item => slugId[2] === slugify(item.id));
    if (match) {
      activeSection = section;
    }
  });

  return activeSection;
};

export default findSectionForPath;
