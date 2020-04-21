const { solve } = require('./Davis Staircase');

describe('Davis Staircase', () => {
  const examples = [

    {
      query: 1,
      answer: 1,
    },

    {
      query: 3,
      answer: 4,
    },

    {
      query: 7,
      answer: 44,
    },

    {
      query: 36,
      answer: 2082876103,
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
