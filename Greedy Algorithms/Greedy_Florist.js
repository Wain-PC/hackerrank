const solve = (k, c) => c
  .sort((a, b) => b - a)
  .reduce((acc, flower, index) => {
    const multiplier = Math.floor(index / k) + 1;
    return acc + (flower * multiplier);
  }, 0);

module.exports = { solve };
