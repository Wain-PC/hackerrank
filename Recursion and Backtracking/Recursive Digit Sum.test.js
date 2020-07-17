const { solve } = require("./Recursive Digit Sum");

describe("Recursive Digit Sum", () => {
  const examples = [
    {
      query: [148, 3],
      answer: 3,
    },
    {
      query: [9875, 4],
      answer: 8,
    },
    {
      query: [123, 3],
      answer: 9,
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(...query)).toEqual(answer);
    });
  });
});
