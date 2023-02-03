const http = require("http");
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("Ureka.. I have created a server!!!");
});

server.listen(5000);

// last watched - 4.16.48

// link --- https://www.youtube.com/watch?v=Oe421EPjeBE&t=13597s
