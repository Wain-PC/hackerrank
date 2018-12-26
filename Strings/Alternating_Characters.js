const solve = (s) => {
  let current = s[0];
  let counter = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === current) {
      counter++;
    } else {
      current = s[i];
    }
  }
  return counter;
};

module.exports = { solve };
