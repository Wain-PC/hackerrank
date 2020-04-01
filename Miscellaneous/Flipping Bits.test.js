const { solve, solveBitwise } = require('./Flipping Bits');

describe('Flipping Bits', () => {
  const examples = [

    {
      query: 2147483647,
      answer: 2147483648,
    },
    {
      query: 1,
      answer: 4294967294,
    },
    {
      query: 0,
      answer: 4294967295,
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
      expect(solveBitwise(query)).toEqual(answer);
    });
  });
});
