const makeHash = str => str.split('').reduce((acc, letter) => {
  if (!acc[letter]) {
    acc[letter] = 0;
  }
  acc[letter]++;
  return acc;
}, {});

const solve = (a, b) => {
  const hash1 = makeHash(a);
  const hash2 = makeHash(b);
  return Object
    .keys({ ...hash1, ...hash2 })
    .reduce((acc, letter) => acc + Math.abs((hash1[letter] || 0) - (hash2[letter] || 0)), 0);
};

module.exports = { solve };
