const isItemActive = (location, item) => {
  return location.pathname.includes(item.id);
};

export default isItemActive;
