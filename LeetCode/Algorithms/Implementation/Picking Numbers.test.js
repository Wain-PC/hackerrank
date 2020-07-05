const { solve } = require('./Picking Numbers');

describe('Picking Numbers', () => {
  const examples = [

    {
      query: [4, 6, 5, 3, 3, 1],
      answer: 3,
    },

    {
      query: [1, 2, 2, 3, 1, 2],
      answer: 5,
    },

    {
      query: [1, 1, 2, 2, 4, 4, 5, 5, 5],
      answer: 5,
    },

    {
      query: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answer: 10,
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
