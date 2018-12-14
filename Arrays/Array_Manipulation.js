const solve = (n, queries) => {
  const arr = {};
  queries.forEach(([start, end, sum]) => {
    for (let i = start - 1; i < end; i++) {
      if (!arr[i]) {
        arr[i] = 0;
      }
      arr[i] += sum;
    }
  });
  return Object.values(arr).reduce((max, v) => (v > max ? v : max), -Infinity);
};

module.exports = { solve };
