import navDocs from '../content/nav.yml';

const sectionListDocs = navDocs.map(item => {
  return {
    ...item,
    category: item.title,
  };
});

export default sectionListDocs;
