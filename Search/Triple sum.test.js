const { solve } = require("./Triple sum");

describe("Triple sum", () => {
  const examples = [
    {
      arrayA: [1, 3, 5],
      arrayB: [2, 3],
      arrayC: [1, 2, 3],
      answer: 8,
    },
    {
      arrayA: [3, 5, 7],
      arrayB: [3, 6],
      arrayC: [4, 6, 9],
      answer: 4,
    },
  ];

  examples.forEach(({ arrayA, arrayB, arrayC, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(arrayA, arrayB, arrayC)).toEqual(answer);
    });
  });
});
