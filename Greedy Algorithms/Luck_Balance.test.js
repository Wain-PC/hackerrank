const { solve } = require('./Luck_Balance');

describe('Luck_Balance', () => {
  it('should solve default example 1', () => {
    expect(solve(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])).toBe(29);
  });
});
