const solveOne = (n) => {
  if (n === 1) {
    return 'Not prime';
  }

  if (n <= 3) {
    return 'Prime';
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return 'Not prime';
    }
  }

  return 'Prime';
};

const solve = arr => arr.map(solveOne);


module.exports = { solve };
