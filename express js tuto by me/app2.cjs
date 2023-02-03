const http = require("http");
const server = http.createServer((req, req) => {
  console.log("user hit the server");
});

server.listen(5000);
