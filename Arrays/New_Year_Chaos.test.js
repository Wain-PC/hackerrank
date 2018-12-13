const { solve } = require('./New_Year_Chaos');

describe('New_Year_Chaos', () => {
  it('should solve default example 1', () => {
    expect(solve([2, 1, 5, 3, 4])).toBe(3);
  });
  it('should solve default example 2', () => {
    expect(solve([2, 5, 1, 3, 4])).toBe('Too chaotic');
  });
});
