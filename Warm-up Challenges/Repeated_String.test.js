const { solve } = require("./Repeated_String");

describe("Repeated_String", () => {
  it("should solve default example 1", () => {
    expect(solve("aba", 10)).toBe(7);
  });
  it("should solve default example 2", () => {
    expect(solve("abcac", 10)).toBe(4);
  });
  it("should solve default example 3", () => {
    expect(solve("a", 1000000000000)).toBe(1000000000000);
  });
});
