const { solve } = require("./Abbreviation");

describe("Abbreviation", () => {
  const examples = [
    {
      string: "aBbdD",
      subString: "BBD",
      answer: "YES",
    },
    {
      string: "aAbAb",
      subString: "ABAB",
      answer: "YES",
    },

    {
      string: "abAAb",
      subString: "AAA",
      answer: "YES",
    },

    {
      string: "ababbaAbAB",
      subString: "AABABB",
      answer: "NO",
    },
    {
      string: "baaBa",
      subString: "BAAA",
      answer: "NO",
    },

    {
      string: "babaABbbAb",
      subString: "ABAA",
      answer: "NO",
    },
  ];

  examples.forEach(({ string, subString, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(string, subString)).toEqual(answer);
    });
  });
});
