import express from "express";
import { users } from "./users.js";

const app = express();
app.use(express.json());
// MIDDLEWARE

app.listen(5000, () => console.log("Server is up and running at port 5000"));

app.get("/users/list", (req, res) => {
  res.send(users);
});

app.post("/users/add", handleUserAdd);
app.delete("/users/delete", handleDeleteUser);
app.put("/users/edit", handleEditUser);
app.patch("/users/patch", handlePatchUser);

function handleUserAdd(req, res) {
  console.log("🚀 ~ req:", req.body);

  users.push(req.body);
  console.log("🚀 ~ users:", users);

  res.send("User added successfully");
}

function handleDeleteUser(req, res) {
  const user = req.query.name;
  console.log("🚀 ~ req.query:", req.query);

  // let usersArray = users.filter(
  //   (item) => item.name.toLowerCase() !== req.query.name.toLowerCase()
  // );

  let usersArray = users.filter(
    (item) => item.name.toLowerCase() !== req.body.name.toLowerCase()
  );

  console.log("🚀 ~ users:", usersArray);

  res.send("delete here");
}

function handleEditUser(req, res) {
  console.log("🚀 ~ req:", req.body);

  const newUsers = users.map((element) => {
    if (element.name === req.body.name) {
      element = req.body;
    }

    return element;
  });
  console.log("🚀 ~ users:", newUsers);

  res.send("Put here");
}

function handlePatchUser(req, res) {
  console.log("🚀 ~ req:", req.body);

  const newUsers = users.map((element) => {
    if (element.name === req.body.name) {
      element = { ...element, ...req.body };
    }

    return element;
  });
  console.log("🚀 ~ users:", newUsers);

  res.send("Patch here");
}
