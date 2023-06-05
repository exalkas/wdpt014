// Import

// import someObject, {} from './dem.....'
const someObject = require("./demoImportExport");
// console.log("🚀 ~ someObject:", someObject);

// console.log(someObject.namedFunction(2, 3));
require("dotenv").config();
// console.log("🚀 ~ dotenv:", dotenv);

// dotenv.config();
// console.log("🚀 ~ process.env:", process.env);

const http = require("http");
// console.log("🚀 ~ http:", http);

const firstRequestListener = (req, res) => {
  console.log("🚀 ~ firstRequestListener is EXECUTED");
  // console.log("🚀 ~ req:", req);
  //   console.log("🚀 ~ res:", res);

  res.end("Hello world");
};

const server = http.createServer(firstRequestListener);
// console.log("🚀 ~ server:", server);

const port = process.env.PORT;
server.listen(port, () =>
  console.log("Server is up and running at port", port)
);
