const { solve } = require("./Largest Rectangle");

describe("Largest Rectangle", () => {
  const examples = [
    {
      query: [1, 2, 3, 4, 5],
      answer: 9,
    },

    {
      query: [3, 2, 5, 6, 1, 4, 4],
      answer: 10,
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
