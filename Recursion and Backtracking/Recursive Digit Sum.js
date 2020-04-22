const superDigit = (str, repeats) => {
  const { length } = str;
  if (length === 1) {
    return str;
  }
  const result = str.split('').reduce((acc, n) => acc + +n, 0) * repeats;
  return superDigit(`${result}`, 1);
};

const solve = (n, k) => +superDigit(`${n}`, k);

module.exports = { solve };
