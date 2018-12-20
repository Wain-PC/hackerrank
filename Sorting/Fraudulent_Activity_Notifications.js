const solve = (expenditure, d) => {
  let notifications = 0;
  for (let i = d; i < expenditure.length; i++) {
    const current = expenditure[i];
    const arr = expenditure.slice(i - d, i).sort((a, b) => a - b);
    const median = d % 2 === 0 ? ((arr[(d / 2) - 1] + arr[d / 2]) / 2) : arr[(d / 2) - 0.5];
    if (current >= 2 * median) {
      notifications++;
    }
  }
  return notifications;
};


module.exports = { solve };
