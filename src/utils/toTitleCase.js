exports.toTitleCase = str => {
  return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
    return (prep && ' ') + letter.toUpperCase();
  });
};
