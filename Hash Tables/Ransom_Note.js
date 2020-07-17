const solve = (magazine, note) => {
  const magHash = magazine.reduce((acc, word) => {
    if (!acc[word]) {
      acc[word] = 0;
    }
    acc[word]++;
    return acc;
  }, {});
  return note.every((word) => {
    if (!magHash[word]) {
      return false;
    }
    magHash[word]--;
    return true;
  })
    ? "Yes"
    : "No";
};

module.exports = { solve };
