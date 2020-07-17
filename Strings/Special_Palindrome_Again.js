const solve = (n, s) => {
  let count = 0;
  let current = "";
  let same = 0;
  const { length } = s;
  for (let i = 0; i < length; i++) {
    if (s[i] !== current) {
      // 1+2+3+...+n
      count += (same * (same + 1)) / 2;

      // Special case for `aabaa` palindromes
      let pal = 0;
      for (let j = i + 1; j < i + same + 1; j++) {
        if (current !== s[j]) {
          break;
        }
        pal++;
      }
      count += pal;

      same = 1;
      current = s[i];
    } else {
      same++;
    }
  }
  count += (same * (same + 1)) / 2;

  return count;
};

module.exports = { solve };
