const { readFile, readFileSync } = require("fs");
const { resolve } = require("path");

const getText = (path) => {
  return new promises((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      readFile("./content/first.txt", "utf8", (err, data) => {
        if (err) {
          return;
        } else {
          console.log(data);
        }
      });
    });
  });
};

getText(".content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText("/content/first.txt");

    console.log(first);
  } catch (error) {
    console.log(err);
  }
};
