const { solve } = require("./Two_Strings");

describe("Ransom_Note", () => {
  it("should solve default example 1", () => {
    expect(solve("hello", "world")).toBe("YES");
  });
  it("should solve default example 1", () => {
    expect(solve("hi", "world")).toBe("NO");
  });
});
