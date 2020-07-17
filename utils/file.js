const fs = require("fs");
const { EOL } = require("os");

const read = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });

const array = async (path) => {
  const data = await read(path);
  return data.split(EOL);
};

module.exports = { read, array };
