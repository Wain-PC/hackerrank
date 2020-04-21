const memo = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = args.join();
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const climb = memo((stairsLeft, stepsCanTake) => {
  if (stairsLeft === 0) {
    return 1;
  }

  let sum = 0;
  for (let i = 0; i < stepsCanTake; i++) {
    const stairsLeftAfterStep = stairsLeft - 1 - i;
    if (stairsLeftAfterStep >= 0) {
      sum += climb(stairsLeftAfterStep, stepsCanTake);
    }
  }

  return sum;
});

const solve = input => climb(input, 3);
module.exports = { solve };
