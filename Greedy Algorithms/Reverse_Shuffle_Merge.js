const permutations = (s) => {
  const results = [];
  if (s.length === 1) {
    return [s];
  }
  s.split("").forEach((char, i) => {
    const substr = s.slice(0, i) + s.slice(i + 1);
    permutations(substr).forEach((perm) => {
      const outPerm = char + perm;
      if (results.indexOf(outPerm) === -1) {
        results.push(char + perm);
      }
    });
  });
  return results;
};

const solve = (s) => {
  const hash = s.split("").reduce((acc, letter) => {
    if (!acc[letter]) {
      acc[letter] = 0;
    }
    acc[letter]++;
    return acc;
  }, {});

  const str = Object.keys(hash).reduce(
    (acc, h) => acc + h.repeat(hash[h] / 2),
    ""
  );
  const perms = permutations(str);
  const { length } = perms;
  const reversed = s.split("").reverse().join("");
  for (let i = 0; i < length; i++) {
    const permutation = perms[i];
    if (reversed.indexOf(permutation) !== -1) {
      return permutation;
    }
  }
  return null;
};

module.exports = { solve };
