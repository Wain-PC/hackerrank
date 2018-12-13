const solve = (s, n) => {
  const countOccurences = str => str.split('').filter(l => l === 'a').length;
  const stringLength = s.length;
  const fullSizeCount = Math.floor(n / stringLength);
  const lastStringPart = s.slice(0, n % stringLength);
  return (fullSizeCount * countOccurences(s)) + countOccurences(lastStringPart);
};

module.exports = { solve };
