const solve = (s1, s2) => {
  const w1Hash = s1.split("").reduce((acc, letter) => {
    acc[letter] = true;
    return acc;
  }, {});
  return s2.split("").some((letter) => w1Hash[letter]) ? "YES" : "NO";
};

module.exports = { solve };
