/* eslint-disable brace-style */

const solve = (str, substr) => {
  const sl = str.length;
  const ssl = substr.length;

  // Step 1. Prepare a Dynamic Programming Array.
  // Fill everything with false.
  const T = Array.from(Array(sl + 1), () => new Array(ssl + 1).fill(false));

  // Step 2. Fill zero-indexes of the array
  // If we compare empty strings we should return true (obviously).
  T[0][0] = true;

  // If substr is empty, we can return true until there're no uppercase characters in the string.
  let hasUppercase = false;
  for (let i = 1; i <= ssl; i++) {
    hasUppercase = hasUppercase || (str[i - 1].toUpperCase() === str[i - 1]);
    T[i][0] = !hasUppercase;
  }

  // Actually traverse DP array and calculate all the values.
  for (let i = 1; i <= sl; i++) {
    const charStr = str[i - 1];
    for (let j = 1; j <= ssl; j++) {
      const charSubstr = substr[j - 1];

      // Case 1. Uppercase match: must take.
      if (charStr === charSubstr) {
        T[i][j] = T[i - 1][j - 1];
      }

      // Case 2. Lowercase match. Can either take or skip.
      else if (charStr.toUpperCase() === charSubstr) {
        T[i][j] = T[i - 1][j - 1] || T[i - 1][j];
      }

      // Case 3. Lowercase no match: must skip.
      else if ((charStr.toUpperCase() !== charStr) && charStr.toUpperCase() !== charSubstr) {
        T[i][j] = T[i - 1][j];
      }

      // Case 4. Uppercase no match: must return false.
      else {
        T[i][j] = false;
      }
    }
  }

  return T[sl][ssl] ? 'YES' : 'NO';
};

module.exports = { solve };
