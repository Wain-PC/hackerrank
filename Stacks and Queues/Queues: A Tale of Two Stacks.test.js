const { solve } = require('./Queues: A Tale of Two Stacks');

describe('Queues: A Tale of Two Stacks', () => {
  const examples = [
    {
      query: '8\n'
          + '1 12\n'
          + '1 14\n'
          + '3\n'
          + '2\n'
          + '3\n'
          + '1 71\n'
          + '1 63\n'
          + '3',
      answer: ['12', '14', '14'],
    },
    {
      query: '8\n'
          + '1 15\n'
          + '1 17\n'
          + '3\n'
          + '1 25\n'
          + '2\n'
          + '3\n'
          + '2\n'
          + '3',
      answer: ['15', '17', '25'],
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
