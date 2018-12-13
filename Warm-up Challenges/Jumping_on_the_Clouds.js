const solve = (c) => {
  const groups = c.join('').split('1');
  const jumps = groups.reduce((acc, { length }) => acc + Math.floor(length / 2), 0);
  return groups.length + jumps - 1;
};

module.exports = { solve };
