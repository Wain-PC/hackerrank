const solve = (arr) => {
  const max = [];
  if (!arr.length) {
    return 0;
  }

  if (arr[0] !== undefined) {
    max[0] = Math.max(arr[0], 0);
  }

  if (arr[1] !== undefined) {
    max[1] = Math.max(arr[0], arr[1]);
  }

  for (let i = 2; i < arr.length; i++) {
    max[i] = Math.max(max[i - 1], max[i - 2] + arr[i], arr[i]);
  }

  return max.pop();
};
module.exports = { solve };
