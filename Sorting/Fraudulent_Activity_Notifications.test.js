const { solve } = require('./Fraudulent_Activity_Notifications');

describe('Fraudulent_Activity_Notifications', () => {
  it('should solve default example 1', () => {
    expect(solve([1, 2, 3, 4, 4], 4)).toBe(0);
  });

  it('should solve default example 2', () => {
    expect(solve([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)).toBe(2);
  });

  it('should solve default example 3', () => {
    expect(solve([1, 5, 9, 15, 21, 28], 4)).toBe(2);
  });
});
