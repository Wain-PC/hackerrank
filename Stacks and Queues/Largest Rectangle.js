const solve = (input) => {
  let maxTotal = 0;
  for (let start = 0; start < input.length; start++) {
    let min = Infinity;
    for (let end = start; end < input.length; end++) {
      const height = input[end];
      if (height < min) {
        min = height;
      }
      const length = end - start + 1;
      const total = min * length;

      if (total > maxTotal) {
        maxTotal = total;
      }
    }
  }

  return maxTotal;
};

module.exports = { solve };
