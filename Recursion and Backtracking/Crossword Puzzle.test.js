const { solve } = require("./Crossword Puzzle");

describe("Crossword Puzzle", () => {
  const examples = [
    {
      puzzle: [
        ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "-", "-", "-", "-", "-", "+", "+", "+", "+"],
        ["+", "-", "+", "+", "+", "-", "+", "+", "+", "+"],
        ["+", "-", "+", "+", "+", "-", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],
        ["+", "+", "-", "-", "-", "-", "-", "-", "+", "+"],
        ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],
      ],
      words: ["LONDON", "DEHLI", "ANKARA", "ICELAND"],
      answer: [
        ["+", "L", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "O", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "N", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "D", "E", "H", "L", "I", "+", "+", "+", "+"],
        ["+", "O", "+", "+", "+", "C", "+", "+", "+", "+"],
        ["+", "N", "+", "+", "+", "E", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "L", "+", "+", "+", "+"],
        ["+", "+", "A", "N", "K", "A", "R", "A", "+", "+"],
        ["+", "+", "+", "+", "+", "N", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "D", "+", "+", "+", "+"],
      ],
    },
    {
      puzzle: [
        ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "-", "-", "-", "-", "-", "-", "-", "+", "+"],
        ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "-", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "-", "-", "-", "-", "-", "-", "+", "+", "+"],
        ["+", "-", "+", "+", "+", "-", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "-", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
      ],
      words: ["AGRA", "NORWAY", "ENGLAND", "GWALIOR"],
      answer: [
        ["+", "E", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "N", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "G", "W", "A", "L", "I", "O", "R", "+", "+"],
        ["+", "L", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "A", "+", "+", "+", "+", "+", "+", "+", "+"],
        ["+", "N", "O", "R", "W", "A", "Y", "+", "+", "+"],
        ["+", "D", "+", "+", "+", "G", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "R", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "A", "+", "+", "+", "+"],
        ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
      ],
    },
    {
      puzzle: [
        ["X", "X", "X", "X", "X", "X", "-", "X", "X", "X"],
        ["X", "X", "-", "-", "-", "-", "-", "-", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "-", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "-", "X", "X", "X"],
        ["X", "X", "X", "-", "-", "-", "-", "-", "-", "X"],
        ["X", "X", "X", "X", "X", "X", "-", "X", "-", "X"],
        ["X", "X", "X", "X", "X", "X", "-", "X", "-", "X"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "-", "X"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "-", "X"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "-", "X"],
      ],
      words: ["ICELAND", "MEXICO", "PANAMA", "ALMATY"],
      answer: [
        ["X", "X", "X", "X", "X", "X", "I", "X", "X", "X"],
        ["X", "X", "M", "E", "X", "I", "C", "O", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "E", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "L", "X", "X", "X"],
        ["X", "X", "X", "P", "A", "N", "A", "M", "A", "X"],
        ["X", "X", "X", "X", "X", "X", "N", "X", "L", "X"],
        ["X", "X", "X", "X", "X", "X", "D", "X", "M", "X"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "A", "X"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "T", "X"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "Y", "X"],
      ],
    },
  ];

  examples.forEach(({ puzzle, words, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(puzzle, words)).toEqual(answer);
    });
  });
});
