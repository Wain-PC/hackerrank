const { solve } = require('./Bubble_Sort');

describe('Bubble_Sort', () => {
  it('should solve default example 1', () => {
    expect(solve([1, 2, 3])).toBe(`Array is sorted in 0 swaps.
First Element: 1
Last Element: 3`);
  });
});
