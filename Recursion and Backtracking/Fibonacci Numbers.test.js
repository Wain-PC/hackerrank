const { solve } = require("./Fibonacci Numbers");

describe("Fibonacci Numbers", () => {
  const examples = [
    {
      query: 3,
      answer: 2,
    },
    {
      query: 6,
      answer: 8,
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
