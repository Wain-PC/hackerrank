const { solve } = require('./Friend Circle Queries');

describe('Friend Circle Queries', () => {
  const examples = [

    {
      query: [[1, 2], [1, 3]],
      answer: [2, 3],
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
