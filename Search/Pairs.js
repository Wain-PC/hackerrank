const solve = (arr, k) => {
  let output = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const target = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(target - arr[j]);
      if (diff === k) {
        output += 1;
      }
    }
  }
  return output;
};

module.exports = { solve };
