const solve = (arr) => {
  const hourglassSum = (m, i, j) => {
    let sum = m[i][j];
    for (let jj = j - 1; jj <= j + 1; jj++) {
      sum += m[i - 1][jj] + m[i + 1][jj];
    }
    return sum;
  };

  const sums = [];
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      sums.push(hourglassSum(arr, i, j));
    }
  }
  return Math.max(...sums);
};

module.exports = { solve };
