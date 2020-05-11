const { solve } = require('./Balanced Brackets');

describe('Balanced Brackets', () => {
  const examples = [

    {
      query: '{[()]}',
      answer: 'YES',
    },

    {
      query: '{[(])}',
      answer: 'NO',
    },

    {
      query: '{{[[(())]]}}',
      answer: 'YES',
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
