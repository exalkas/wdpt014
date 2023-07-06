import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

import db from "./config/db.js";

dotenv.config();

db();

const app = express();

app.use(cors());
app.use(express.json()); // handle body object from requests

app.use("/users", userRoutes);

app.use("/images", express.static("./server/uploads"));

app.listen(5000, () => console.log("Server is up and running at port 5000"));
