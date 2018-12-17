const { solve } = require('./Sherlock_and_Anagrams');

describe('Sherlock_and_Anagrams', () => {
  it('should solve default example 1', () => {
    expect(solve('abba')).toBe(4);
  });

  it('should solve default example 2', () => {
    expect(solve('abcd')).toBe(0);
  });

  it('should solve default example 3', () => {
    expect(solve('ifailuhkqq')).toBe(3);
  });

  it('should solve default example 4', () => {
    expect(solve('kkkk')).toBe(10);
  });

  it('should solve default example 5', () => {
    expect(solve('cdcd')).toBe(5);
  });
});
