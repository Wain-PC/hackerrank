
const solve = (queries) => {
  const people = {};
  const maxCircles = [];

  const addPerson = (person, friend) => {
    if (!people[person]) {
      people[person] = { friends: [friend] };
    } else {
      people[person].friends.push(friend);
    }
  };

  const walk = (first) => {
    let counter = 0;
    let queue = [first];

    while (queue.length) {
      const person = queue.shift();
      if (!people[person].visited) {
        people[person].visited = true;
        counter += 1;
        queue = queue.concat(people[person].friends);
      }
    }

    return counter;
  };

  queries.forEach(([p1, p2]) => {
    // Step 1. Add new people to the hash.
    addPerson(p1, p2);
    addPerson(p2, p1);

    const keys = Object.keys(people);

    // Step 2. Invalidate the hash.
    keys.forEach((person) => { people[person].visited = false; });

    // Step 4. Select max graph length of the current step.
    maxCircles.push(
      Math.max(
        walk(p1),
        walk(p2),
        maxCircles.length ? maxCircles[maxCircles.length - 1] : 0,
      ),
    );
  });

  return maxCircles;
};

module.exports = { solve };
