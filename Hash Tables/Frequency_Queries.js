const solve = (queries) => {
  const result = [];
  const map = {};
  const freqMap = {};

  const syncFreqMap = (oldValue, newValue) => {
    if (freqMap[oldValue]) {
      freqMap[oldValue]--;
    }

    if (!freqMap[newValue]) {
      freqMap[newValue] = 0;
    }
    freqMap[newValue]++;
  };

  const add = (value) => {
    if (!map[value]) {
      map[value] = 0;
    }
    map[value]++;
    const oldValue = map[value] - 1;
    const newValue = oldValue + 1;
    syncFreqMap(oldValue, newValue);
  };

  const remove = (value) => {
    if (!map[value]) {
      map[value] = 0;
    } else {
      map[value]--;
      const oldValue = map[value] + 1;
      const newValue = map[value];
      syncFreqMap(oldValue, newValue);
    }
  };

  queries.forEach(([command, value]) => {
    switch (command) {
      case 1: {
        add(value);
        break;
      }
      case 2: {
        remove(value);
        break;
      }
      default:
      case 3: {
        result.push(+(freqMap[value] > 0));
        break;
      }
    }
  });
  return result;
};


module.exports = { solve };
