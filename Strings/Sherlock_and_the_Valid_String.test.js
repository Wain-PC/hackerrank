const { solve } = require("./Sherlock_and_the_Valid_String");

describe("Sherlock_and_the_Valid_String", () => {
  it("should solve default example 1", () => {
    expect(solve("abc")).toBe("YES");
  });

  it("should solve default example 2", () => {
    expect(solve("abcc")).toBe("YES");
  });

  it("should solve default example 3", () => {
    expect(solve("aabbcd")).toBe("NO");
  });

  it("should solve default example 4", () => {
    expect(solve("aabbccddeefghi")).toBe("NO");
  });

  it("should solve default example 5", () => {
    expect(solve("aabbbcccccc")).toBe("NO");
  });

  it("should solve default example 6", () => {
    expect(solve("aabc")).toBe("NO");
  });

  it("should solve default example 7", () => {
    expect(solve("abcdefghhgfedecba")).toBe("YES");
  });
});
