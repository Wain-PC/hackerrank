const solve = (expenditure, d) => {
  let notifications = 0;
  // Prepare the counting sort array.
  const countSort = Array(201).fill(0);
  for (let i = 0; i < d; i++) {
    countSort[expenditure[i]] += 1;
  }
  // Prepare median calculation in countSort array
  const middle = d / 2;
  const isEven = d % 2 === 0;
  const getMedian = () => {
    let count = 0;
    for (let i = 0; i < countSort.length; i++) {
      count += countSort[i];
      if (count >= middle) {
        if (isEven) {
          if (count === middle) {
            // Continue cycling through the array to find next non-zero item
            for (let j = i + 1; j < countSort.length; j++) {
              if (countSort[j]) {
                return (i + j) / 2;
              }
            }
            return i;
          }
        }
        return i;
      }
    }
    return 0;
  };

  // For each value starting after the running window
  for (let i = d; i < expenditure.length; i++) {
    const current = expenditure[i];
    const median = getMedian();
    if (current >= 2 * median) {
      notifications++;
    }
    // Use countSort as a queue-like object by manually shifting it to a new state.
    countSort[expenditure[i - d]]--;
    countSort[current]++;
  }
  return notifications;
};


module.exports = { solve };
