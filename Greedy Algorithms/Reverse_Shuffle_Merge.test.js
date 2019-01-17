const { solve } = require('./Reverse_Shuffle_Merge');

describe('Reverse_Shuffle_Merge', () => {
  it('should solve default example 1', () => {
    expect(solve('eggegg')).toBe('egg');
  });

  it('should solve default example 2', () => {
    expect(solve('abcdefgabcdefg')).toBe('agfedcb');
  });

  it('should solve default example 3', () => {
    expect(solve('aeiouuoiea')).toBe('aeiou');
  });
});
