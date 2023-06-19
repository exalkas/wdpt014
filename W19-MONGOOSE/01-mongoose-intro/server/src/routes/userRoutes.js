import express from "express";
import {
  handleListUsers,
  handleAddUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/list", handleListUsers);
router.post("/add", handleAddUser);
router.put("/edit", handleListUsers);
router.delete("/delete", handleListUsers);

export default router;
