const { solve } = require("./Common_Child");

describe("Common_Child", () => {
  it("should solve default example 1", () => {
    expect(solve("HARRY", "SALLY")).toBe(2);
  });

  it("should solve default example 2", () => {
    expect(solve("SHINCHAN", "NOHARAAA")).toBe(3);
  });

  it("should solve default example 3", () => {
    expect(solve("ABCDEF", "FBDAMN")).toBe(2);
  });

  it("should solve default example 4", () => {
    expect(solve("AA", "BB")).toBe(0);
  });
});
