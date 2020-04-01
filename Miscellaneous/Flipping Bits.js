const padLeft = (str, desiredLength) => '0'.repeat(desiredLength - str.length) + str;

const solve = (N) => {
  const binary = N.toString(2);
  const padded = padLeft(binary, 32);
  const invertedBinaryPadded = padded.split('').map(n => (n === '1' ? '0' : '1')).join('');
  return parseInt(invertedBinaryPadded, 2);
};

const solveBitwise = (N) => {
  // eslint-disable-next-line no-bitwise
  const invertedN = ~N;

  // Because of the numbers in JS are signed int we might end with a negative number.
  // Just add 32 bits to make it positive again.
  if (invertedN < 0) {
    return invertedN + (2 ** 32);
  }
  return invertedN;
};

module.exports = { solve, solveBitwise };
