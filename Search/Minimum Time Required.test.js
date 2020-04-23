const { solve } = require('./Minimum Time Required');

describe('Minimum Time Required', () => {
  const examples = [

    {
      machines: [1, 3, 4],
      goal: 10,
      answer: 7,
    },
    {
      machines: [2, 3],
      goal: 5,
      answer: 6,
    },
    {
      machines: [4, 5, 6],
      goal: 12,
      answer: 20,
    },

  ];

  examples.forEach(({ machines, goal, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(machines, goal)).toEqual(answer);
    });
  });
});
