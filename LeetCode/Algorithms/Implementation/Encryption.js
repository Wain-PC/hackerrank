const solve = (input) => {
  const n = Math.ceil(Math.sqrt(input.length));
  const arr = Array(n).fill('');

  input.split('').forEach((char, index) => {
    const col = index % n;
    arr[col] += char;
  });

  return arr.join(' ');
};

module.exports = { solve };
