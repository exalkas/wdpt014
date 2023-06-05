const http = require("http");

const students = [
  {
    name: "John",
    id: 1,
  },
  {
    name: "John2",
    id: 2,
  },
  {
    name: "John3",
    id: 3,
  },
  {
    name: "John4",
    id: 4,
  },
];

const server = http.createServer(reqListener);

function reqListener(req, res) {
  res.end(JSON.stringify(students));
}

server.listen(3000, () => console.log("Server 2 is running"));
