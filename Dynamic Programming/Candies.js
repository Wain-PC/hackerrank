/* eslint-disable brace-style */

const solve = (children) => {
  if (!children.length) {
    return 0;
  }

  const candies = [];

  const getCandies = (index) => {
    if (index < 0 || index >= children.length) {
      return 0;
    }

    if (candies[index]) {
      return candies[index];
    }

    // If it's a local maximum, we should take max of left and right and increase it by 1.
    if (
      children[index] > children[index - 1] &&
      children[index] > children[index + 1]
    ) {
      candies[index] = Math.max(candies[index - 1], getCandies(index + 1)) + 1;
    }

    // Decreasing trend. Current should be 1 more than next.
    else if (children[index] > children[index + 1]) {
      candies[index] = getCandies(index + 1) + 1;
    }

    // Increasing trend. Current should 1 more than previous.
    else if (children[index] > children[index - 1]) {
      candies[index] = candies[index - 1] + 1;
    } else {
      candies[index] = 1;
    }

    // Local minimum or same value as previous. Should always return 1.
    return candies[index];
  };

  return children.reduce((acc, value, index) => {
    if (!candies[index]) {
      candies[index] = getCandies(index);
    }

    return acc + candies[index];
  }, 0);
};

module.exports = { solve };
