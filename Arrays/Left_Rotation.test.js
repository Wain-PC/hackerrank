const { solve } = require("./Left_Rotation");

describe("Left_Rotation", () => {
  it("should solve default example 1", () => {
    expect(solve([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
  });
  it("should solve default example 2", () => {
    expect(solve([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
  });
  it("should solve default example 3", () => {
    expect(solve([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
