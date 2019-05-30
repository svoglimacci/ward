const getSubCategory = category => {
  const subCategory = category.reduce((acc, cur) => {
    acc[cur.node.fields.subDir] = acc[cur.node.fields.subDir] || [];
    acc[cur.node.fields.subDir].push(cur);

    return acc;
  }, Object.create(null));

  return subCategory;
};

const getCategory = categoryData => {
  let newObj;
  categoryData.reduce((acc, cur) => {
    categoryData.reduce((acc, cur) => {
      acc[cur.node.fields.topDir] = acc[cur.node.fields.topDir] || [];
      acc[cur.node.fields.topDir].push(cur);

      newObj = acc;
      return newObj;
    }, Object.create(null));

    Object.keys(newObj).forEach((category, index) => {
      newObj[category] = getSubCategory(newObj[category]);
    });

    return newObj;
  }, Object.create(null));

  return newObj;
};

export default getCategory;
