const solve = (n, queries) => {
  const arr = Array(n).fill(0);
  queries.forEach(([s, e, sum]) => {
    arr[s - 1] += sum;
    arr[e] -= sum;
  });
  let tmp = 0;
  return arr.reduce((sum, v) => {
    tmp += v;
    return (tmp > sum) ? tmp : sum;
  }, 0);
};

module.exports = { solve };
