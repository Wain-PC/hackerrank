const { solve } = require('./Abbreviation');

describe('Abbreviation', () => {
  const examples = [
    {
      string: 'ababbaAbAB',
      subString: 'AABABB',
      answer: 'NO',
    },

    {
      string: 'aAbAb',
      subString: 'ABAB',
      answer: 'YES',
    },

    {
      string: 'baaBa',
      subString: 'BAAA',
      answer: 'NO',
    },

    {
      string: 'abAAb',
      subString: 'AAA',
      answer: 'YES',
    },

    {
      string: 'babaABbbAb',
      subString: 'ABAA',
      answer: 'NO',
    },

  ];

  examples.forEach(({ string, subString, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(string, subString)).toEqual(answer);
    });
  });
});
