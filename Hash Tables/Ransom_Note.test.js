const { solve } = require('./Ransom_Note');

describe('Ransom_Note', () => {
  it('should solve default example 1', () => {
    expect(solve('give me one grand today night'.split(' '), 'give one grand today'.split(' '))).toBe('Yes');
  });

  it('should solve default example 2', () => {
    expect(solve('two times three is not four'.split(' '), 'two times two is four'.split(' '))).toBe('No');
  });

  it('should solve default example 3', () => {
    expect(solve('two two four'.split(' '), 'two two'.split(' '))).toBe('Yes');
  });

  it('should solve default example 3', () => {
    expect(solve('two two four'.split(' '), 'two two two'.split(' '))).toBe('No');
  });
});
