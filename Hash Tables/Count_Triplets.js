/* eslint-disable no-prototype-builtins */
const solve = (arr, r) => {
  let num = 0;
  const leftMap = {};
  arr.forEach((v) => {
    if (!leftMap[v]) {
      leftMap[v] = 0;
    }
    leftMap[v]++;
  });

  const rightMap = {};
  const lastElem = arr[arr.length - 1];
  rightMap[lastElem] = 1;
  leftMap[lastElem] -= 1;
  for (let i = arr.length - 2; i > 0; i--) {
    const middle = arr[i];
    leftMap[middle]--;
    const toTheRight = rightMap[middle * r] || 0;
    const toTheLeft = leftMap[middle / r] || 0;
    num += toTheRight * toTheLeft;
    if (!rightMap[middle]) {
      rightMap[middle] = 0;
    }
    rightMap[middle]++;
  }
  return num;
};

module.exports = { solve };
