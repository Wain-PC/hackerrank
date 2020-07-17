const { solve } = require("./Count_Triplets");

describe("Count_Triplets", () => {
  it("should solve default example 1", () => {
    expect(solve([1, 2, 2, 4], 2)).toBe(2);
  });

  it("should solve default example 2", () => {
    expect(solve([1, 3, 9, 9, 27, 81], 3)).toBe(6);
  });

  it("should solve default example 3", () => {
    expect(solve([1, 5, 5, 25, 125], 5)).toBe(4);
  });

  it("should solve default example 4", () => {
    expect(solve([1, 2, 1, 2, 4], 2)).toBe(3);
  });
});
