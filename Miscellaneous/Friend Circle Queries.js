
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

// Better algorithm.
// 3 case
const solveBetter = (queries) => {
  const people = {};
  const circles = [];
  const maxCircles = [];

  const addFriends = (p1, p2) => {
    // Case 1. Both friends are NOT present.
    // Add them to people list and create a new circle.
    if (!people[p1] && !people[p2]) {
      const circleId = circles.length;
      people[p1] = { circleId };
      people[p2] = { circleId };
      circles.push([p1, p2]);
      // Case 2.1 First person is in circle, other is not.
      // We should append p2 to the existing circle.
    } else if (people[p1] && !people[p2]) {
      const { circleId } = people[p1];
      people[p2] = { circleId };
      circles[circleId].push(p2);
      // Case 2.2 First person is NOT in circle, other is in.
      // Exactly the same as 2.1, but people are swapped
    } else if (!people[p1] && people[p2]) {
      const { circleId } = people[p2];
      people[p1] = { circleId };
      circles[circleId].push(p1);
      // Case 3. Both are in circles.
      // If the circle is the same, it's a noop.
    } else {
      const circleId1 = people[p1].circleId;
      const circleId2 = people[p2].circleId;
      // If circleIds are the same, it's a noop
      if (circleId1 === circleId2) {
        // noop
        return;
      }

      const circle1 = circles[circleId1];
      const circle2 = circles[circleId2];
      // Move everyone from the smaller circle to the bigger one.
      // Then change circleId for every changed id.
      if (circle1.length > circle2.length) {
        circles[circleId1] = circle1.concat(circle2);
        circle2.forEach((person) => {
          // eslint-disable-next-line no-param-reassign
          people[person].circleId = circleId1;
        });
        circles[circleId2] = undefined;
      } else {
        circles[circleId2] = circle2.concat(circle1);
        circle1.forEach((person) => {
          // eslint-disable-next-line no-param-reassign
          people[person].circleId = circleId2;
        });
        circles[circleId1] = undefined;
      }
    }
  };

  queries.forEach(([p1, p2]) => {
    // Step 1. Add new people to the hash.
    addFriends(p1, p2);

    // Step 2. Select max circle length of the current step.
    const max = circles
      .filter(c => c !== undefined)
      .reduce((acc, c) => (c.length > acc ? c.length : acc), 0);
    maxCircles.push(max);
  });

  return maxCircles;
};

module.exports = { solve: solveBetter };
