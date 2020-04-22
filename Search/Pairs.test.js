const { solve } = require('./Pairs');

describe('Pairs', () => {
  const examples = [

    {
      query: [[1, 5, 3, 4, 2], 2],
      answer: 3,
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(...query)).toEqual(answer);
    });
  });
});
