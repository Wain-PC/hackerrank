const solve = (s) => {
  const makeHash = (str) => {
    const obj = str
      .split('')
      .reduce((acc, letter) => {
        if (!acc[letter]) {
          acc[letter] = 0;
        }
        acc[letter]++;
        return acc;
      }, {});
    return Object.entries(obj).map(([k, v]) => `${k}:${v}`)
      .sort()
      .join(',');
  };

  const pairs = n => (n * (n - 1)) / 2;

  let n = 0;
  // Obviously, we don't need zero-length and string-length pieces
  for (let i = 1; i < s.length; i++) {
    const hashes = {};
    for (let j = 0; j <= s.length - i; j++) {
      const part = s.substr(j, i);
      const hash = makeHash(part);
      if (!hashes[hash]) {
        hashes[hash] = 0;
      }
      hashes[hash]++;
    }
    n += Object.values(hashes).reduce((acc, v) => acc + pairs(v), 0);
  }
  return n;
};

module.exports = { solve };
