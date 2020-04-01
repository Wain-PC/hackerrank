const padLeft = (str, desiredLength) => '0'.repeat(desiredLength - str.length) + str;

const solve = (N) => {
  const binary = N.toString(2);
  const padded = padLeft(binary, 32);
  const invertedBinaryPadded = padded.split('').map(n => (n === '1' ? '0' : '1')).join('');
  return parseInt(invertedBinaryPadded, 2);
};
module.exports = { solve };
