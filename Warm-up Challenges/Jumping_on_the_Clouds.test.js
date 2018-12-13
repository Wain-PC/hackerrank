const { solve } = require('./Jumping_on_the_Clouds');

describe('Jumping_on_the_Clouds', () => {
  it('should solve default example 1', () => {
    expect(solve([0, 0, 1, 0, 0, 1, 0])).toBe(4);
  });
  it('should solve default example 2', () => {
    expect(solve([0, 0, 0, 0, 1, 0])).toBe(3);
  });
  it('should solve default example 3', () => {
    expect(solve([0, 1, 0, 1, 0, 1, 0, 1, 0])).toBe(4);
  });
});
