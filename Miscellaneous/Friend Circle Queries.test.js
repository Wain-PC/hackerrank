const { solve } = require("./Friend Circle Queries");

describe("Friend Circle Queries", () => {
  const examples = [
    {
      query: [
        [6, 4],
        [5, 9],
        [8, 5],
        [4, 1],
        [1, 5],
        [7, 2],
        [4, 2],
        [7, 6],
      ],
      answer: [2, 2, 3, 3, 6, 6, 8, 8],
    },
    {
      query: [
        [1, 2],
        [1, 3],
      ],
      answer: [2, 3],
    },
    {
      query: [
        [1000000000, 23],
        [11, 3778],
        [7, 47],
        [11, 1000000000],
      ],
      answer: [2, 2, 2, 4],
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
