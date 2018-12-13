const { solve } = require('./Minimum_Swaps_2');

describe('Minimum_Swaps_2', () => {
  it('should solve default example 1', () => {
    expect(solve([7, 1, 3, 2, 4, 5, 6])).toBe(5);
  });
  it('should solve default example 2', () => {
    expect(solve([4, 3, 1, 2])).toBe(3);
  });
  it('should solve default example 3', () => {
    expect(solve([1, 3, 5, 2, 4, 6, 7])).toBe(3);
  });
  it('should solve default example 4', () => {
    // eslint-disable-next-line max-len
    const arr = [2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19];
    expect(solve(arr)).toBe(46);
  });
});
