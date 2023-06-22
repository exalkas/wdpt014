import express from "express";
import {
  handleListPosts,
  handleAddPost,
  // handleDeleteUser,
  // handleEditUser,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/list", handleListPosts);
router.post("/add", handleAddPost);
// router.put("/edit", handleEditUser);
// router.delete("/delete/:id", handleDeleteUser);

export default router;
