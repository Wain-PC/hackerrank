const { solve } = require("./Candies");

describe("Candies", () => {
  const examples = [
    {
      query: [1, 2, 2],
      answer: 4,
    },

    {
      query: [2, 4, 2, 6, 1, 7, 8, 9, 2, 1],
      answer: 19,
    },

    {
      query: [2, 4, 3, 5, 2, 6, 4, 5],
      answer: 12,
    },

    {
      query: [1, 2, 3, 4, 5, 4, 3, 2, 1],
      answer: 25,
    },

    {
      query: [1, 1, 1, 1, 1, 1],
      answer: 6,
    },

    {
      query: [11, 5, 11, 5, 2, 1],
      answer: 13,
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
