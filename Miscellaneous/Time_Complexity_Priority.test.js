const { solve } = require("./Time_Complexity_Priority");

describe("Time_Complexity_Priority", () => {
  const examples = [
    {
      query: [1, 2, 4, 5, 7, 12],
      answer: [
        "Not prime",
        "Prime",
        "Not prime",
        "Prime",
        "Prime",
        "Not prime",
      ],
    },
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
