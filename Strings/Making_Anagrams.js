const solve = (a, b) => {
  const arr = Array(26).fill(0);
  const aCharCode = "a".charCodeAt(0);
  const calc = (str, sign) =>
    str.split("").forEach((letter) => {
      arr[letter.charCodeAt(letter) - aCharCode] += sign;
    });
  calc(a, 1);
  calc(b, -1);
  return arr.reduce((acc, v) => acc + Math.abs(v), 0);
};

module.exports = { solve };
