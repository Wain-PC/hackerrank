// Find all array permutations using Heap algorithm
const permutations = (arr) => {
  const perms = [];

  const swap = (array, a, b) => {
    const tmp = array[a];
    // eslint-disable-next-line no-param-reassign
    array[a] = array[b];
    // eslint-disable-next-line no-param-reassign
    array[b] = tmp;
  };

  const generate = (array, length) => {
    if (length === 1) {
      perms.push([...array]);
      return;
    }

    for (let i = 0; i < length; i++) {
      generate(array, length - 1);

      if (length % 2 === 0) {
        swap(array, i, length - 1);
      } else {
        swap(array, 0, length - 1);
      }
    }
  };

  generate([...arr], arr.length);

  return perms;
};

// Check every row, column and both diagonals
const checkIfMagicSquare = (arr) => {
  const l = Math.sqrt(arr.length);
  const sum = l * (l * l + 1) / 2;
  for (let i = 0; i < l; i++) {
    let rowSum = 0;
    let columnSum = 0;
    for (let j = 0; j < l; j++) {
      // Row
      rowSum += arr[i * l + j];

      // Column
      columnSum += arr[j * l + i];
    }
    if (rowSum !== sum || columnSum !== sum) {
      return false;
    }
  }


  // Check diagonals
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < l; i++) {
    leftDiagonal += arr[i * l + i];
    rightDiagonal += arr[i * l + (l - 1 - i)];
  }

  return !(leftDiagonal !== sum || rightDiagonal !== sum);
};

const generateArray = n => Array.from(Array(n + 1).keys()).slice(1);

const findAllMagicSquares = n => permutations(generateArray(n * n))
  .filter(checkIfMagicSquare);

const calculateDiff = (target, magicSquare) => magicSquare
  .reduce((acc, n, i) => acc + Math.abs(n - target[i]), 0);

const flatten = (arr) => {
  const output = [];

  const traverse = (array) => {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        traverse(element);
      } else {
        output.push(element);
      }
    });
  };

  traverse(arr);

  return output;
};

// Preparation: Use brute force to get all magic squares with a size of 3.
const magicSquares = findAllMagicSquares(3);

const solve = (s) => {
  const query = flatten(s);
  const diffs = magicSquares.map(magicSquare => calculateDiff(query, magicSquare));
  return Math.min(...diffs);
};
module.exports = { solve };
