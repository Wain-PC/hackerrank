const solve = (input) => {
  let maxLength = 0;
  let length = 0;
  let prevUsed = false;

  input
    .sort((a, b) => a - b)
    .forEach((n, i, arr) => {
      const prev = arr[i - 1];

      if (i === 0 || n === prev) {
        length++;
      } else if (!prevUsed && prev + 1 === n) {
        length++;
        prevUsed = true;
      } else {
        if (length > maxLength) {
          maxLength = length;
        }

        length = 1;
        prevUsed = false;
      }
    });

  if (length > maxLength) {
    maxLength = length;
  }

  return maxLength;
};

module.exports = { solve };
