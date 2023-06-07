import express from "express";
import { users } from "./users.js";

const app = express();

// console.log("🚀 ~ app:", app);

app.listen(5000, () => console.log("Server is up and running at port 5000"));

// Request listener for GET requests at path /listusers
app.get("/listusers", handleListUsers);
app.get("/listone", handleListOneUser);
app.get("/searchbyemail/:email", handleSearchByEmail);

function handleListUsers(req, res) {
  console.log("handleListUsers here!");

  res.send(users);
}

function handleListOneUser(req, res) {
  console.log("Req.query", req.query);

  const result = users.filter((item) => item.name === req.query.name);
  console.log("🚀 ~ result:", result);

  res.send({
    success: true,
    result,
  });
}
function handleSearchByEmail(req, res) {
  console.log("Req.query", req.params);

  const result = users.filter((item) => item.email === req.params.email);
  console.log("🚀 ~ result:", result);

  res.send({
    success: true,
    result,
  });
}
