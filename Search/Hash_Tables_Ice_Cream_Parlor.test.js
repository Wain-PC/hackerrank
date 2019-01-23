const { solveBinary, solveHash } = require('./Hash_Tables_Ice_Cream_Parlor');

describe('Hash_Tables_Ice_Cream_Parlor', () => {
  it('should solve default example 1', () => {
    expect(solveBinary([1, 4, 5, 3, 2], 4)).toEqual([1, 4]);
    expect(solveHash([1, 4, 5, 3, 2], 4)).toEqual([1, 4]);
  });

  it('should solve default example 2', () => {
    expect(solveBinary([2, 2, 4, 3], 4)).toEqual([1, 2]);
    expect(solveHash([2, 2, 4, 3], 4)).toEqual([1, 2]);
  });

  it('should solve default example 3', () => {
    expect(solveBinary([1, 2, 3, 5, 6], 5)).toEqual([2, 3]);
    expect(solveHash([1, 2, 3, 5, 6], 5)).toEqual([2, 3]);
  });
});
