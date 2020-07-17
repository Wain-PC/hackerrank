const { solve } = require("./Max_Min");

describe("Greedy_Florist", () => {
  it("should solve default example 1", () => {
    expect(solve(3, [10, 100, 300, 200, 1000, 20, 30])).toBe(20);
  });

  it("should solve default example 2", () => {
    expect(solve(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200])).toBe(3);
  });

  it("should solve default example 3", () => {
    expect(solve(2, [1, 2, 1, 2, 1])).toBe(0);
  });
});
