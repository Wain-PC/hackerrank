const { solve } = require("./Count_Inversions");

describe("Count_Inversions", () => {
  it("should solve default example 1", () => {
    expect(solve([1, 1, 2, 2])).toBe(0);
  });
  it("should solve default example 2", () => {
    expect(solve([2, 1, 3, 1, 2])).toBe(4);
  });
});
