const solve = (k, arr) => {
  arr.sort((a, b) => a - b);
  const maxLength = arr.length - k + 1;
  let bestUnfairness = Infinity;
  for (let i = 0; i < maxLength; i++) {
    const min = arr[i];
    const max = arr[i + k - 1];
    const currentUnfairness = max - min;
    if (currentUnfairness < bestUnfairness) {
      bestUnfairness = currentUnfairness;
    }
  }
  return bestUnfairness;
};

module.exports = { solve };
