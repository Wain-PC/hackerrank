const { solve } = require('./Fraudulent_Activity_Notifications');

describe('Fraudulent_Activity_Notifications', () => {
  it('should solve default example 1', () => {
    expect(solve([1, 2, 3, 4, 4], 4)).toBe(0);
  });

  it('should solve default example 2', () => {
    expect(solve([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)).toBe(2);
  });
});
