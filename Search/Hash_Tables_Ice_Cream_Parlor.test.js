const { solve } = require('./Hash_Tables_Ice_Cream_Parlor');

describe('Hash_Tables_Ice_Cream_Parlor', () => {
  it('should solve default example 1', () => {
    expect(solve([1, 4, 5, 3, 2], 4)).toEqual([1, 4]);
  });

  it('should solve default example 2', () => {
    expect(solve([2, 2, 4, 3], 4)).toEqual([1, 2]);
  });
});
