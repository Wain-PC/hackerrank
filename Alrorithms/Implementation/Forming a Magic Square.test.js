const { solve } = require("./Forming a Magic Square");

describe("Forming a Magic Square", () => {
  const examples = [
    {
      query: [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5],
      ],
      answer: 1,
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
