const { solve } = require("./Extra Long Factorials");

describe("Extra Long Factorials", () => {
  const examples = [
    {
      query: 25,
      answer: "15511210043330985984000000",
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
