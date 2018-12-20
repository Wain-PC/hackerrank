const solve = (prices, k) => {
  const arr = [...prices];
  let toys = 0;
  let moneyLeft = k;
  arr.sort((a, b) => a - b).some((price) => {
    if (moneyLeft - price >= 0) {
      toys++;
      moneyLeft -= price;
      return false;
    }
    return true;
  });
  return toys;
};


module.exports = { solve };
