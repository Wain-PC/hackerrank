const solve = (s) => {
  const hash = {};
  const { length } = s;
  for (let i = 0; i < length; i++) {
    const letter = s[i];
    if (!hash[letter]) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }
  const arr = Object.values(hash);
  const mainFreq = arr[0];
  let decrementUsed = false;
  for (let i = 0; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - mainFreq);
    if (diff > 1) {
      if (arr[i] === 1 && !decrementUsed) {
        decrementUsed = true;
      } else {
        return "NO";
      }
    }
    if (diff === 1) {
      if (decrementUsed) {
        return "NO";
      }
      decrementUsed = true;
    }
  }
  return "YES";
};

module.exports = { solve };
