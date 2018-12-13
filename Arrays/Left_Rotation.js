const solve = (a, d) => {
  // We should rotate only (d % a.length) times,
  // since all other rotations will just return the array itself
  const rotationOffset = d % a.length;
  return a.slice(rotationOffset).concat(a.slice(0, rotationOffset));
};

module.exports = { solve };
