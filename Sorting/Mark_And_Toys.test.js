const { solve } = require("./Mark_And_Toys");

describe("Mark_And_Toys", () => {
  it("should solve default example 1", () => {
    expect(solve([1, 12, 5, 111, 200, 1000, 10], 50)).toBe(4);
  });
});
