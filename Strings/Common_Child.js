// This is actually a 'Longest Common Subsequence` problem simplified to finding only the length.
const solve = (s1, s2) => {
  const table = [];
  const { length } = s1;
  for (let i = 0; i <= length; i++) {
    table[i] = [0];
  }
  table[0] = Array(length + 1).fill(0);
  for (let i = 1; i <= length; i++) {
    const letter1 = s1[i - 1];
    for (let j = 1; j <= length; j++) {
      const letter2 = s2[j - 1];
      if (letter1 === letter2) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
      }
    }
  }
  return table[length][length];
};

module.exports = { solve };
