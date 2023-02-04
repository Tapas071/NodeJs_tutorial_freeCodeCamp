const { readFileSync } = require("fs");

const http = require("http");
const homepage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(homepage);
  res.end();
});

server.listen(5000);
