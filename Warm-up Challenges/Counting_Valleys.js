const solve = (n, s) => {
  let depth = 0;
  let valleys = 0;
  s.split("").forEach((letter) => {
    if (depth === 0 && letter === "D") {
      valleys++;
    }
    depth += letter === "D" ? -1 : 1;
  });

  return valleys;
};

module.exports = { solve };
