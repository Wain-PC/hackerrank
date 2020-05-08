const { solve } = require('./Kangaroo');

describe('Kangaroo', () => {
  const examples = [

    {
      query: [0, 3, 4, 2],
      answer: 'YES',
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(...query)).toEqual(answer);
    });
  });
});
