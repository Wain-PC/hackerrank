const solve = (arr) => {
  let count = 0;
  let sorted = false;
  // Finds an element's original position and instantly moves the element to the correct place
  const swap = (el, i) => {
    if (el === i + 1) {
      return;
    }
    // Put the element into the correct place
    const tmp = arr[el - 1];
    arr[el - 1] = arr[i]; // eslint-disable-line no-param-reassign
    arr[i] = tmp; // eslint-disable-line no-param-reassign
    count++;
    sorted = false;
  };
  // Repeat while the array isn't sorted
  while (!sorted) {
    sorted = true;
    arr.forEach(swap);
  }

  return count;
};

module.exports = { solve };
