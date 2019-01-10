const solve = (arr) => {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const current = Math.abs(arr[i - 1] - arr[i]);
    if (current < min) {
      min = current;
    }
  }
  return min;
};

module.exports = { solve };
