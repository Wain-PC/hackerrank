const memo = fn => (a, b) => {
  const cache = new Map();
  const key = `${a}|${b}`;

  if (!cache.has(key)) {
    cache.set(key, fn(a, b));
  }

  return cache.get(key);
};

const check = memo((str, substr) => {
  // If both strings are empty, we found a solution!
  // If only str is empty, its an immediate 'false'.
  if (!str.length) {
    return !substr.length;
  }

  // Return true only if every character left in the original string is lowercase
  if (!substr.length) {
    return str.toLowerCase() === str;
  }

  // If substr is longer than original string, return false.
  if (substr.length > str.length) {
    return false;
  }

  // Now compare first letters
  const strChar = str[0];
  const substrChar = substr[0];

  // Case 1. Uppercase match - great, only single option here. Move on deeper with recursion.
  if (strChar === substrChar) {
    return check(str.slice(1), substr.slice(1));
  }

  // Case 2. Lowercase match. 2 options here. We can take it or skip it
  if (strChar.toUpperCase() === substrChar) {
    // Take it
    if (check(str.slice(1), substr.slice(1))) {
      return true;
    }
    // or skip it.
    return check(str.slice(1), substr);
  }

  // Case 3. Uppercase no match - immediate false;
  if (strChar.toUpperCase() === strChar) {
    return false;
  }

  // Case 4. Lowercase no match - skip.
  return check(str.slice(1), substr);
});

const solve = (str, subStr) => (check(str, subStr) ? 'YES' : 'NO');

module.exports = { solve };
