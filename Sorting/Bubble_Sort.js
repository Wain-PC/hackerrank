const solve = (a) => {
  const arr = [...a];
  let swaps = 0;
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        swaps++;
      }
    }
  }

  return `Array is sorted in ${swaps} swaps.
First Element: ${arr[0]}
Last Element: ${arr[length - 1]}`;
};


module.exports = { solve };
