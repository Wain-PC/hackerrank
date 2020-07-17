class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  enqueue(value) {
    this.input.push(value);
  }

  prepare() {
    if (!this.output.length) {
      while (this.input.length) {
        this.output.push(this.input.pop());
      }
    }
  }

  dequeue() {
    this.prepare();
    return this.output.pop();
  }

  top() {
    this.prepare();

    if (!this.output.length) {
      return null;
    }

    return this.output[this.output.length - 1];
  }
}

const processLine = (line, queue) => {
  const [operation, value] = line.split(" ");

  switch (operation) {
    case "1": {
      queue.enqueue(value);
      return null;
    }
    case "2": {
      queue.dequeue();
      return null;
    }
    case "3": {
      return queue.top();
    }
    default: {
      return null;
    }
  }
};

const solve = (input) => {
  const queue = new Queue();
  return input
    .split("\n")
    .slice(1)
    .map((line) => processLine(line, queue))
    .filter((v) => v !== null);
};

module.exports = { solve };
