const solveHash = (cost, money) => {
  const hash = cost.reduce((acc, price, index) => {
    if (!acc[price]) {
      acc[price] = [];
    }
    acc[price].push(index);
    return acc;
  }, {});
  const output = [];
  Object.keys(hash).some((price) => {
    if (hash[money - price]) {
      output.push(hash[price].splice(0, 1)[0] + 1);
      output.push(hash[money - price].splice(0, 1)[0] + 1);
      return true;
    }
    return false;
  });

  return output.sort((a, b) => a - b);
};

const solveBinary = (cost, money) => {
  const indexedCost = cost
    .map((c, i) => ({ cost: c, index: i + 1 }))
    .sort((a, b) => a.cost - b.cost);
  // Implement binary search on the sorted array
  const binary = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      const middle = Math.floor(end - start / 2);
      const c = arr[middle].cost;
      if (c === value) {
        return arr[middle];
      }
      // Value should be in the left part of the array
      if (value < c) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return null;
  };

  for (let i = 0; i < indexedCost.length; i++) {
    const pair = binary(indexedCost, money - indexedCost[i].cost);
    if (pair) {
      return [indexedCost[i].index, pair.index];
    }
  }
  return [];
};

module.exports = { solveBinary, solveHash };
