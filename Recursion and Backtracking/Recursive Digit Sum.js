const superDigit = (str) => {
  if (str.length === 1) {
    return str;
  }

  const result = str.split('').reduce((acc, n) => acc + +n, 0);
  return superDigit(`${result}`);
};

const solve = (n, k) => {
  const p = `${n}`.repeat(k);
  return +superDigit(p);
};

module.exports = { solve };
