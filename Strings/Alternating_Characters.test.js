const { solve } = require('./Alternating_Characters');

describe('Alternating_Characters', () => {
  it('should solve default example 1', () => {
    expect(solve('AAAA')).toBe(3);
  });

  it('should solve default example 2', () => {
    expect(solve('ABABABAB')).toBe(0);
  });

  it('should solve default example 3', () => {
    expect(solve('AAABBB')).toBe(4);
  });
});
