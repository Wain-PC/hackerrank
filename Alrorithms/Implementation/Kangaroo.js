const solve = (x1, v1, x2, v2) => {
  const stepDiff = v1 - v2;

  if (stepDiff <= 0) {
    return 'NO';
  }

  const initialDiff = x2 - x1;
  const steps = initialDiff / stepDiff;
  return steps % 1 === 0 ? 'YES' : 'NO';
};
module.exports = { solve };
