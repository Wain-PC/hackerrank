const { solve } = require('./Sock_Merchant');

describe('361.1', () => {
  it('should solve default example 1', () => {
    expect(solve(7, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
  });
  it('should solve default example', () => {
    expect(solve(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });
});
