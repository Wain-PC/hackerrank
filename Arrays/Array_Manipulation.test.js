const { solve } = require("./Array_Manipulation");

describe("Array_Manipulation", () => {
  it("should solve default example 1", () => {
    expect(
      solve(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100],
      ])
    ).toBe(200);
  });
  it("should solve default example 2", () => {
    expect(
      solve(40, [
        [29, 40, 787],
        [9, 26, 219],
        [21, 31, 214],
        [8, 22, 719],
        [15, 23, 102],
        [11, 24, 83],
        [14, 22, 321],
        [5, 22, 300],
        [11, 30, 832],
        [5, 25, 29],
        [16, 24, 577],
        [3, 10, 905],
        [15, 22, 335],
        [29, 35, 254],
        [9, 20, 20],
        [33, 34, 351],
        [30, 38, 564],
        [11, 31, 969],
        [3, 32, 11],
        [29, 35, 267],
        [4, 24, 531],
        [1, 38, 892],
        [12, 18, 825],
        [25, 32, 99],
        [3, 39, 107],
        [12, 37, 131],
        [3, 26, 640],
        [8, 39, 483],
        [8, 11, 194],
        [12, 37, 502],
      ])
    ).toBe(8628);
  });
  it("should solve default example 3", () => {
    expect(
      solve(40, [
        [1, 2, 1],
        [2, 3, 1],
        [3, 4, 1],
        [2, 6, 1],
      ])
    ).toBe(2);
  });
});
