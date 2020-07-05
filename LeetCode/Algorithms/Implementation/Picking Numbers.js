const solve = (input) => {
  let maxLength = 0;
  let length = 0;
  let prevUsed = false;

  input
    .sort((a, b) => a - b)
    .forEach((n, i, arr) => {
      const prev = arr[i - 1];

      if (i === 0 || n === prev) {
        length++;
      } else if (!prevUsed && prev + 1 === n) {
        length++;
        prevUsed = true;
      } else {
        if (length > maxLength) {
          maxLength = length;
        }

        length = 1;
        prevUsed = false;
      }
    });

  if (length > maxLength) {
    maxLength = length;
  }

  return maxLength;
};

const solveObj = (input) => {
  const obj = input.reduce((acc, n) => {
    if (!acc[n]) {
      acc[n] = 0;
    }
    acc[n]++;

    return acc;
  }, {});

  return Object.keys(obj).reduce((max, key) => {
    const current = obj[key];
    const prev = obj[key - 1] || 0;
    const next = obj[key + 1] || 0;
    const maxPair = Math.max(current, current + prev, current + next);

    if (maxPair > max) {
      return maxPair;
    }

    return max;
  }, 0);
};

module.exports = { solve, solveObj };
