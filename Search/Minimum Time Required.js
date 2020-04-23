const getMachines = (inputMachines) => {
  const machines = inputMachines
    .reduce((acc, machine) => {
      if (!acc[machine]) {
        acc[machine] = {
          daysToProduce: machine,
          n: 1,
        };
      } else {
        acc[machine].n += 1;
      }

      return acc;
    }, {});

  const keys = Object.keys(machines).sort((a, b) => a - b);

  return { machines, keys };
};


const getItemsForDays = (machines, keys, days) => keys.reduce((acc, key) => {
  const { daysToProduce, n } = machines[key];
  return acc + Math.floor(days / daysToProduce) * n;
}, 0);

const getMinDays = (machines, keys, initialDays, goal) => {
  let days = initialDays + 1;
  let items;
  do {
    days -= 1;
    items = getItemsForDays(machines, keys, days);
  } while (items >= goal);

  return days + 1;
};

// Binary search till we find the number of items that is close
const binary = (left, right, machinesObj, keys, goal) => {
  const center = Math.floor((right + left) / 2);
  const items = getItemsForDays(machinesObj, keys, center);

  if (items === goal) {
    return getMinDays(machinesObj, keys, center, goal);
  }

  if (right - left === 1) {
    return getMinDays(machinesObj, keys, right, goal);
  }

  if (goal < items) {
    return binary(left, center, machinesObj, keys, goal);
  }

  return binary(center, right, machinesObj, keys, goal);
};

const getMaxDays = (machinesObj, keys, goal) => {
  let itemsProduced = 0;
  let maxDays = keys.length;

  // Find max days value (top border), then use binary search
  while (itemsProduced < goal) {
    itemsProduced = getItemsForDays(machinesObj, keys, maxDays);
    if (itemsProduced < goal) {
      maxDays *= maxDays;
    }
  }

  return maxDays;
};

const solve = (machines, goal) => {
  const { machines: machinesObj, keys } = getMachines(machines);
  const maxDays = getMaxDays(machinesObj, keys, goal);
  return binary(1, maxDays, machinesObj, keys, goal);
};

module.exports = { solve };
