

const solve = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return solve(n - 1) + solve(n - 2);
};

module.exports = { solve };
