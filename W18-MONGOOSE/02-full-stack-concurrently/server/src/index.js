import express from "express";
import cors from "cors";
import { users } from "./users.js";

const app = express();

app.use(cors());
app.get("/users/list", (req, res) => {
  res.send({ users });
});

app.listen(5000, () => console.log("Server is up and running at port 5000"));
