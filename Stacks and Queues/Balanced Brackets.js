const brackets = [
  {
    opening: "[",
    closing: "]",
  },
  {
    opening: "{",
    closing: "}",
  },
  {
    opening: "(",
    closing: ")",
  },
];

const isOpening = (bracket) =>
  brackets.some(({ opening }) => opening === bracket);
const getOpening = (bracket) =>
  brackets.find(({ closing }) => closing === bracket).opening;

const solve = (input) => {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const bracket = input.charAt(i);

    // If it's an opening bracket, put it to the stack.
    if (isOpening(bracket)) {
      stack.push(bracket);
      // It's a closing bracket. Get the opening one.
      // If it matches the top of the stack, continue the cycle. If it doesnt, exit with 'no'.
    } else if (getOpening(bracket) !== stack.pop()) {
      return "NO";
    }
  }

  // If the stack is empty in the end, brackets are aligned.
  return stack.length ? "NO" : "YES";
};

module.exports = { solve };
