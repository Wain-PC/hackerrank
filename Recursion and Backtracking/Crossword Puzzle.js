// Direction can be either 'right' or 'bottom', test both
const findDirection = (puzzle, word, startRowIndex, startColumnIndex) => {
  let success = true;
  for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
    const symbol = puzzle[startRowIndex + wordIndex]
      ? puzzle[startRowIndex + wordIndex][startColumnIndex] : null;
    if (!symbol || !(symbol === '-' || symbol === word[wordIndex])) {
      success = false;
      break;
    }
  }

  if (success) {
    return 'bottom';
  }

  success = true;
  for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
    const symbol = puzzle[startRowIndex]
      ? puzzle[startRowIndex][startColumnIndex + wordIndex] : null;
    if (!symbol || !(symbol === '-' || symbol === word[wordIndex])) {
      success = false;
      break;
    }
  }

  if (success) {
    return 'right';
  }

  return null;
};

const putWordIntoPuzzle = (puzzle, word, direction, rowIndex, columnIndex) => {
  // Return new puzzle every time
  const newPuzzle = JSON.parse(JSON.stringify(puzzle));
  if (direction === 'right') {
    for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
      newPuzzle[rowIndex][columnIndex + wordIndex] = word[wordIndex];
    }
  } else if (direction === 'bottom') {
    for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
      newPuzzle[rowIndex + wordIndex][columnIndex] = word[wordIndex];
    }
  }

  return newPuzzle;
};

const findFirstApplicableSymbol = (puzzle, word) => {
  for (let rowIndex = 0; rowIndex < puzzle.length; rowIndex++) {
    const row = puzzle[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const symbol = row[columnIndex];
      if (symbol === '-' || symbol === word[0]) {
        const direction = findDirection(puzzle, word, rowIndex, columnIndex);
        if (direction) {
          return putWordIntoPuzzle(puzzle, word, direction, rowIndex, columnIndex);
        }
      }
    }
  }
  return null;
};

const solve = (puzzle, words) => {
  if (!words.length) {
    return puzzle;
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const newPuzzle = findFirstApplicableSymbol(puzzle, word);
    if (newPuzzle) {
      const newWords = words.filter(w => w !== word);
      const result = solve(newPuzzle, newWords);
      if (result) {
        return result;
      }
    }
  }

  return null;
};

module.exports = { solve };
