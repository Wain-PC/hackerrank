const { solve } = require('./2D_Array');

describe('2D_Array', () => {
  it('should solve default example 1', () => {
    expect(solve([
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ])).toBe(7);
  });

  it('should solve default example 2', () => {
    expect(solve([
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ])).toBe(19);
  });

  it('should solve default example 3', () => {
    expect(solve([
      [-9, -9, -9, 1, 1, 1],
      [0, -9, 0, 4, 3, 2],
      [-9, -9, -9, 1, 2, 3],
      [0, 0, 8, 6, 6, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ])).toBe(28);
  });
});
