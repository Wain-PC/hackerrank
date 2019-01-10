const { solve } = require('./Minimum_Absolute_Difference');

describe('Minimum_Absolute_Difference', () => {
  it('should solve default example 1', () => {
    expect(solve([3, -7, 0])).toBe(3);
  });

  it('should solve default example 2', () => {
    expect(solve([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])).toBe(1);
  });

  it('should solve default example 3', () => {
    expect(solve([1, -3, 71, 68, 17])).toBe(3);
  });
});
