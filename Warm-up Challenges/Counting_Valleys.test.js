const { solve } = require('./Counting_Valleys');

describe('Counting_Valleys', () => {
  it('should solve default example 1', () => {
    expect(solve(8, 'UDDDUDUU')).toBe(1);
  });
  it('should solve default example 2', () => {
    expect(solve(8, 'DDUUUUDD')).toBe(1);
  });
});
