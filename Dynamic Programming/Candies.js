const memo = fn => (index) => {
  const cache = new Map();

  if (!cache.has(index)) {
    cache.set(index, fn(index));
  }

  return cache.get(index);
};

const solve = (children) => {
  if (!children.length) {
    return 0;
  }

  const getCandies = memo((index) => {
    if (index < 0 || index >= children.length) {
      return 0;
    }
    // If it's a local maximum, we should take max of left and right and increase it by 1.
    if ((children[index] > children[index - 1]) && (children[index] > children[index + 1])) {
      return Math.max(getCandies(index - 1), getCandies(index + 1)) + 1;
    }

    // Decreasing trend. Current should be 1 more than next.
    if (children[index] > children[index + 1]) {
      return getCandies(index + 1) + 1;
    }

    // Increasing trend. Current should 1 more than previous.
    if (children[index] > children[index - 1]) {
      return getCandies(index - 1) + 1;
    }

    // Local minimum or same value as previous. Should always return 1.
    return 1;
  });


  const candies = children.map((value, index) => getCandies(index));
  return candies.reduce((acc, value) => acc + value, 0);
};

module.exports = { solve };
