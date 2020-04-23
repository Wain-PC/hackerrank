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

const solve = (machines, goal) => {
  let days = 0;
  let itemsProduced = 0;
  const { machines: machinesObj, keys } = getMachines(machines);
  while (itemsProduced < goal) {
    days += 1;
    itemsProduced = getItemsForDays(machinesObj, keys, days);
  }

  return days;
};

module.exports = { solve };
