const { solve } = require('./Max Array Sum');

describe('Max Array Sum', () => {
  const examples = [

    {
      query: [3, 7, 4, 6, 5],
      answer: 13,
    },

    {
      query: [2, 1, 5, 8, 4],
      answer: 11,
    },

    {
      query: [3, 5, -7, 8, 10],
      answer: 15,
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
