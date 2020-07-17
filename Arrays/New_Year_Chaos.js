const solve = (q) => {
  const arr = [...q];
  const bribes = {};
  let swaps = 0;
  const { length } = arr;
  // This is a trivial bubble sort implementation.
  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;

        // Keep track of the bribes for each swapped number.
        if (!bribes[arr[j]]) {
          bribes[arr[j]] = 0;
        }
        bribes[arr[j]]++;

        // If the number has been bribed > 2 times, immediately return `Too chaotic`.
        if (bribes[arr[j]] > 2) {
          return "Too chaotic";
        }

        // Swap the numbers.
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        swaps++;
      }
    }
    // Stop the sort if the array didn't require any swaps after the current iteration.
    if (!swapped) {
      break;
    }
  }
  return swaps;
};

module.exports = { solve };
