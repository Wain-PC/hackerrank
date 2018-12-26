const { solve } = require('./Making_Anagrams');

describe('Making_Anagrams', () => {
  it('should solve default example 1', () => {
    expect(solve('cde', 'abc')).toBe(4);
  });
  it('should solve default example 2', () => {
    expect(solve('cde', 'dcf')).toBe(2);
  });
});
