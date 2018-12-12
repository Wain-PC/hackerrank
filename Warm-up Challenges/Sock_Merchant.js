const solve = (n, ar) => {
  const obj = {};
  ar.forEach((key) => {
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key]++;
  });
  return Object.values(obj).reduce((acc, value) => {
    const pairs = value % 2 === 0 ? value / 2 : (value - 1) / 2;
    return acc + pairs;
  }, 0);
};

module.exports = { solve };
