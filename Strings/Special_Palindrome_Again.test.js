const { solve } = require("./Special_Palindrome_Again");

describe("Alternating_Characters", () => {
  it("should solve default example 1", () => {
    const s = "asasd";
    expect(solve(s.length, s)).toBe(7);
  });

  it("should solve default example 2", () => {
    const s = "abcbaba";
    expect(solve(s.length, s)).toBe(10);
  });

  it("should solve default example 3", () => {
    const s = "aaaa";
    expect(solve(s.length, s)).toBe(10);
  });

  it("should solve default example 4", () => {
    const s = "cbbabbc";
    expect(solve(s.length, s)).toBe(11);
  });

  it("should solve default example 4", () => {
    const s = "mnonopoo";
    expect(solve(s.length, s)).toBe(12);
  });

  it("should solve default example 5", () => {
    const s = "mmmmmmbmmmmmm";
    expect(solve(s.length, s)).toBe(49);
  });

  it("should solve default example 6", () => {
    const s = "mmmmmmbmm";
    expect(solve(s.length, s)).toBe(27);
  });

  it("should solve default example 7", () => {
    const s = "qwertyuiop";
    expect(solve(s.length, s)).toBe(s.length);
  });
});
