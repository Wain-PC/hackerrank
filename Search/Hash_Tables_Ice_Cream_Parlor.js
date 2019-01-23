const solve = (cost, money) => {
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

module.exports = { solve };
