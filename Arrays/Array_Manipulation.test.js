const { solve } = require('./Array_Manipulation');

describe('Array_Manipulation', () => {
  it('should solve default example 1', () => {
    expect(solve(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])).toBe(200);
  });
});
