const { solve } = require('./Greedy_Florist');

describe('Greedy_Florist', () => {
  it('should solve default example 1', () => {
    expect(solve(3, [2, 5, 6])).toBe(13);
  });

  it('should solve default example 2', () => {
    expect(solve(2, [2, 5, 6])).toBe(15);
  });

  it('should solve default example 3', () => {
    expect(solve(3, [1, 3, 5, 7, 9])).toBe(29);
  });
});
