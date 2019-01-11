const solve = (k, contests) => {
  let luck = 0;
  contests
    // Filter out important contests
    .filter(([l, important]) => {
      // If the contest is not important, lose it immediately
      if (!important) {
        luck += l;
        return false;
      }
      return true;
    })
    // Sort the important contests by importance (desc)
    .sort((a, b) => b[0] - a[0])
    .forEach(([l], i) => {
      // Lose the first k most important contests
      if (i < k) {
        luck += l;
        // Win all other less important contests to maximize luck
      } else {
        luck -= l;
      }
    });
  return luck;
};

module.exports = { solve };
