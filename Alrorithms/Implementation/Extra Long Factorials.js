// Perform actual 3rd grade multiplication
const multiplyStrings = (str1, str2) => {
  const cols = str1.length + str2.length;
  const rows = str2.length;
  const matrix = Array.from(Array(rows), () =>
    Array.from(Array(cols), () => 0)
  );

  /* Step 1. Multiplication (creating matrix). */
  for (let i = str2.length - 1; i >= 0; i--) {
    const ir = str2.length - 1 - i;
    const n2 = +str2[i];
    let excess = 0;
    for (let j = str1.length - 1; j >= 0; j--) {
      const jr = str1.length - 1 - j;
      const n1 = +str1[j];
      let res = n1 * n2 + excess;
      if (res > 9) {
        excess = Math.floor(res / 10);
        res %= 10;
      } else {
        excess = 0;
      }

      const position = cols - 1 - ir - jr;
      matrix[ir][position] = res;

      if (j === 0 && excess) {
        matrix[ir][position - 1] = excess;
      }
    }
  }

  // Step 2. Sum matrix columns to receive a final string
  let excess = 0;
  const output = [];
  for (let col = cols - 1; col >= 0; col--) {
    let sum = 0;
    for (let row = 0; row < rows; row++) {
      sum += matrix[row][col];
    }
    sum += excess;
    if (sum > 9) {
      excess = Math.floor(sum / 10);
      sum %= 10;
    } else {
      excess = 0;
    }
    output.unshift(sum);
  }

  // If any excess is left in the end, add it to the last position
  if (excess) {
    output.unshift(excess);
  }

  // We may get a leading zero at the end. If so, strip it.
  if (output[0] === 0) {
    output.shift();
  }

  return output.join("");
};

const solve = (n) => {
  let res = "1";

  for (let i = 1; i <= n; i++) {
    res = multiplyStrings(res, `${i}`);
  }

  return res;
};

module.exports = { solve };
