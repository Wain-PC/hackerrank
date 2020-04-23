const unique = (arr) => {
  const cache = new Map();
  return arr.reduce((acc, value) => {
    if (!cache[value]) {
      cache[value] = true;
      acc.push(value);
    }
    return acc;
  }, []);
};

const sort = arr => arr.sort((a, b) => a - b);

const pairs = (sampleArr, targetArr) => {
  const counters = {};
  for (let i = 0; i < targetArr.length; i++) {
    const n = targetArr[i];
    let j = 0;
    for (j; j < sampleArr.length; j++) {
      if (sampleArr[j] > n) {
        break;
      }
    }
    counters[n] = j;
  }

  return counters;
};

const solve = (arrayA, arrayB, arrayC) => {
  // Put your solution here
  const uniqueA = sort(unique(arrayA));
  const uniqueB = sort(unique(arrayB));
  const uniqueC = sort(unique(arrayC));

  const pairsA = pairs(uniqueA, uniqueB);
  const pairsB = pairs(uniqueC, uniqueB);

  return Object.keys(pairsA).reduce((acc, key) => acc + (pairsA[key] * pairsB[key]), 0);
};

module.exports = { solve };
