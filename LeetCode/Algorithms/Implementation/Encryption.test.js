const { solve } = require('./Encryption');

describe('Encryption', () => {
  const examples = [

    {
      query: 'haveaniceday',
      answer: 'hae and via ecy',
    },

    {
      query: 'feedthedog',
      answer: 'fto ehg ee dd',
    },

    {
      query: 'chillout',
      answer: 'clu hlt io',
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
